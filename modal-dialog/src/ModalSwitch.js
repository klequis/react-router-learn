import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from './Gallery'
import ImageView from './ImageView'
import Home from './Home'
import Modal from './Modal'
import { green } from './logger'

class ModalSwitch extends React.Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    green('props', this.props)
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    green('ModalSwitch.render()')
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/img/:id" component={ImageView} />
        </Switch>
        {isModal ? <Route path="/img/:id" component={Modal} /> : null}
      </div>
    );
  }
}

export default ModalSwitch
