import React from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter as Router, Route, Switch, withRouter, } from "react-router-dom";

class One extends React.Component {
    render(){
        console.log(this.props.match);
        return (
          <div>
          <h3>pathId</h3>
            params.id: {this.props.match.params.id}<br/>
            path: {this.props.match.path}<br/>
            url: {this.props.match.url}<br/>
          </div>)
    }
}

class Two extends React.Component {
  render(){
      console.log(this.props.match);
      return (
        <div>
        <h3>pathIndustry</h3>
          params.id: {this.props.match.params.id}<br/>
          path: {this.props.match.path}<br/>
          url: {this.props.match.url}<br/>
        </div>)
  }
}

class Three extends React.Component {
  render(){
      console.log(this.props.match);
      return (
        <div>
          <h3>pathIndustryAndId</h3>
          params.id: {this.props.match.params.id}<br/>
          path: {this.props.match.path}<br/>
          url: {this.props.match.url}<br/>
        </div>)
  }
}

const industryRegex = "(air|motor|ship)";
const guidRegex = "([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})?"; // Note the questionmark ? at the end

const pathId =            `/gps/:id${guidRegex}`;
const pathIndustry =      `/gps/:industryType${industryRegex}`;
const pathIndustryAndId = `/gps/:industryType${industryRegex}/:id${guidRegex}`;

console.log(pathId);
console.log(pathIndustry);
console.log(pathIndustryAndId);

const link = {
  padding: 15,
}

const AppComponent = ({...props}) => {
    return (
      <Router>
        <div>
          <ul>
            <li><Link style={link} to='/gps'>/gps</Link></li>
            <li><Link style={link} to='/gps/air'>/gps/air</Link></li>
            <li><Link style={link} to='/gps/a0b6dc45-11a1-42c5-afdb-a62822d109dc'>/gps/a0b6dc45-11a1-42c5-afdb-a62822d109dc</Link></li>
            <li><Link style={link} to='/gps/air/a0b6dc45-11a1-42c5-afdb-a62822d109dc'>/gps/air/a0b6dc45-11a1-42c5-afdb-a62822d109dc</Link></li>
            <li><Link style={link} to='/gps/air/junk'>/gps/air/junk</Link></li>
          </ul>

          <Switch>
              <Route path={pathId}                     component={One} />
              <Route path={pathIndustry}               component={Two} />
              <Route path={pathIndustryAndId}          component={Three} />
          </Switch>
        </div>
      </Router>
    )
};

export default AppComponent