
import React from 'react'
import st from './BaseLayout.module.css'

const BaseLayout = () => (
  <div className={st.layout}>
    <header className={st.header}>
      Header
    </header>
    <main>
      BaseLayout
    </main>
    <footer className={st.footer}>
      Footer
    </footer>
  </div>
)

export default BaseLayout
