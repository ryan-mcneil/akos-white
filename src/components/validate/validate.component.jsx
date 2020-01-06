import React from 'react';

class Validate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      is_a_baby: false,
      message: "Are You Over 21?",
      onClickYes: props.handleClickYes

    }
  }

  onClickNo = () => (
    this.setState({
      message: "Grow up, why dontcha?",
      is_a_baby: true
    })
  )

  render() {
    console.log(this.state);
    return (
      <div className='validate-page'>
        <div className='validate-box'>
          <h1>{this.state.message}</h1>
          {
            !this.state.is_a_baby ? 
              <div className='validate-buttons'>
                <button onClick={this.state.onClickYes} className='button'>Yes</button>
                <button onClick={this.onClickNo} className='button'>No</button>
              </div>
            :
              null
          }
        </div>
      </div>
    )
  }

}

export default Validate;