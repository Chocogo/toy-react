// 需要导出component, createElement, render
// createElement中引用createElementWrap, createTextWrap, 定义为类
class createElementWrap { // 节点包裹, 代理节点，拥有三个方法
  constructor(tagName){
    this.root = document.createElement(tagName)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(component) {
    this.root.appendChild(component.root)
  }
}
class createTextWrap { // 文本节点，只能被插入
  constructor(text){
    this.root = document.createTextNode(text)
  }
}
export class Component { // 组件： appendChild , setAttributes
  constructor(){
    this.props = Object.create(null)
    this.children = []
    this._root = null
  }
  appendChild(child) {
    this.children.push(child)
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  get root() {
    if (!this._root) { // 默认没有，访问时调用render方法，递归获得root,此root为createElementWrap所得
      this._root = this.render().root
    }
    return this._root
  }
} 

export function render(component, ele) {
  ele.appendChild(component.root)
} 

export function createElement(tagName, attrs, ...children) {
  // tagName有可能是文本或者属性(编译为字符串)， 非字符串时为类
  let e
  if (typeof tagName === 'string') {
    e = new createElementWrap(tagName)
  } else {
    e = new tagName
  }
  // e.setAttribute(attr)
  for(let a in attrs) {
    e.setAttribute(a, attrs[a])
  }
  const insertChildren = (children) => {
    for(let child of children) { // 子节点有可能是文本，文本不支持append
      if (typeof child === 'string') {
        child = new createTextWrap(child)
      }
      if ((typeof child === 'object') && (child instanceof Array)) { // 类组件调用子组件时的， this.children 编译为数组，需要我们帮他递归编译
        insertChildren(child)
        return
      }
      // ele能appendChild ele和textNode
      e.appendChild(child)
    }
  }
  insertChildren(children)
  
  return e
} 