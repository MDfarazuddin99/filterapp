import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class NavBar extends Component {
    render() {
        return (
            <div>

<nav class="navbar navbar-expand navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">Home</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">Link</Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search"/>
        </form>
      </div>
    </nav>
                
            </div>
        )
    }
}

                export default NavBar