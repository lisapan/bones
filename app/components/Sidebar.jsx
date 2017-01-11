'use strict'

import React from 'react'
import {Link} from 'react-router';

export default () => {
  return (
    <sidebar>
      <section>
        <h4 className="menu-item">
          <Link to='/products/women'>WOMEN</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/products/men'>MEN</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/products/kids'>KIDS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/products'>DOGS</Link>
        </h4>
      </section>
    </sidebar>
  );
}