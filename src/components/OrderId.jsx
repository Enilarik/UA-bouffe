import React        from 'react';
import { connect }  from 'react-redux';

import Keyboard from './Keyboard';

const LETTERS_PER_ROW = 4;
const SPOT_LETTERS = ['A', 'B', 'C', 'D',
                      'E', 'F', 'G', 'H',
                      'I', 'J', 'K', 'L',
                      'M', 'N', 'O', 'P',
                      'Q', 'R', 'S'];

const NUMBERS_PER_ROW = 8;
const SPOT_NUMBERS = [ 1,  2,  3,  4,  5,  6,  7,  8,
                       9, 10, 11, 12, 13, 14, 15, 16,
                      17, 18, 19, 20, 21, 22, 23, 24,
                      25, 26, 27, 28, 29, 30, 31, 32];

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class OrderId extends React.Component {
  state = {
    selectedLetter: null
  };

  onLetterSelect(selectedLetter) {
    this.setState({selectedLetter});
  }

  render() {

    return (
      <div className="b-select_order_id">
        <div className="b-order_id__keyboards">          
          <Keyboard keys={SPOT_LETTERS} keysPerRow={LETTERS_PER_ROW}></Keyboard>
          <Keyboard keys={SPOT_NUMBERS} keysPerRow={NUMBERS_PER_ROW}></Keyboard>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderId);
