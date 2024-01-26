interface vNode {
  tag: string
  props?: object
  children?: Array<vNode>
  text: string
}

const vnode: vNode = {
  tag: "div",
  props: {
    id: "app"
  },
  children: [
    {
      tag: "span",
      text: "hello"
    },
    {
      tag: "span",
      text: "world"
    }
  ],
  text: ""
}

function vdom2dom(vnode: vNode) {
  const inRender = (vnode: vNode, parent: HTMLElement | null = null) => {
    const el = document.createElement(vnode.tag)
    if (vnode.props) {
      for (const key in vnode.props) {
        el.setAttribute(key, vnode.props[key])
      }
    }
    if (vnode.children) {
      vnode.children.forEach((child) => inRender(child, el))
    }
    if (vnode.text) {
      el.textContent = vnode.text
    }
    parent && parent.appendChild(el)
    return el
  }
  return inRender(vnode)
}

console.log(vdom2dom(vnode))
