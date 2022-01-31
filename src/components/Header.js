import React from 'react';
import './Header.css'

export default function Header() {
  return <div class="navbar">
  <div class="container flex">
      <h1 class="logo">Dojo Hosting.</h1>
      <nav>
          <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="features.html">Features</a></li>
              <li><a href="docs.html">Docs</a></li>
          </ul>
      </nav>
  </div>
</div>;
}
