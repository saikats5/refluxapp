import Reflux from 'reflux';
import LayoutActions from '../actions/layoutAction';

export default Reflux.createStore({
    listenables: [LayoutActions],
    testClick(){
        console.log("CLICK INSIDE THE REFLUX STORE");
    }
})