import { connect } from 'react-redux';
import { addApple, addOrange, clearFruit } from '../actions';
import FruitStand from './fruit_stand';

const mapStateToProps = state => ({
  fruits: state.fruits
});

const mapDispatchToProps = dispatch => ({
  addApple: () => dispatch(addApple()),
  addOrange: () => dispatch(addOrange()),
  clearFruit: () => dispatch(clearFruit())
});

// connect is sending over props
// which is an object with four properties right now
// props = {fruits, addApple, addOrange, clearFruit}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitStand);
