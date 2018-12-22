import React from "react";
import Modal from "./Modal";

class App extends React.Component {
  state = {
    clicked: false
  };

  handleClick = event => {
    this.setState(state => ({
      clicked: !state.clicked
    }));
  };

  render() {
    return (
      <div>
        <p>
          {this.state.clicked ? "You clicked" : "waiting.."}
          Open up the browser DevTools to observe that the MODAL is not a child
          of the root div.
        </p>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Launch demo modal
          </button>
        </div>
        <Modal>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    onClick={this.handleClick}
                    type="button"
                    className="btn btn-primary"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
