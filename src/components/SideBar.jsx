import React from 'react'

const SideBar = ({isOpen, toggle, menuList, children}) => {
  return (
    <div className="container">
      <div className={`sidebar ${isOpen && "sidebar--open"}`}>
        <nav className="menu">          
          <ul>
            {menuList.map((item, idx) => (
              <li key={idx + '-menu-item'}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div class={`content ${isOpen && "content--open"}`}>{children}</div>
    </div>
  )
}

export default SideBar;