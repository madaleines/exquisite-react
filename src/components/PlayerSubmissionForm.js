import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstAdjective: "",
      firstNoun: "",
      firstAdverb: "",
      firstVerb: "",
      secondAdjective: "",
      secondNoun: "",
    }
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example
            }
            <input
              placeholder="adjective"
              type="text"
              name="firstAdjective"
              value={this.state.firstAdjective} />

            <input
              placeholder="noun"
              type="text"
              name="firstNoun"
              value={this.state.firstNoun} />

            <input
              placeholder="adverb"
              type="text"
              name="firstAdverb"
              value={this.state.firstAdverb} />

              <input
                placeholder="verb"
                type="text"
                name="firstVerb"
                value={this.state.firstVerb} />
              the
              <input
                placeholder="adjective"
                type="text"
                name="secondAdjective"
                value={this.state.secondAdjective} />

                <input
                  placeholder="noun"
                  type="text"
                  name="secondNoun"
                  value={this.state.secondNoun} />
                .

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
