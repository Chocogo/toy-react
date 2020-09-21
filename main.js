// for (let i of [1,2,3]) {
//   console.log(i)
// }
import { render, Component, createElement } from './toy-react.js'

class Hello extends Component {
  render() {
    return (<div>
      hello
      { this.children }
    </div>)
  }
}

render(<Hello>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Hello>, document.body)