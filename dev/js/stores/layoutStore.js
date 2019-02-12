import Reflux from 'reflux';
import LayoutActions from '../actions/layoutAction';

export default Reflux.createStore({
    listenables: [LayoutActions],
    getInitialState() {
        return this.storeadata;
    },
    storeadata: {
        isFlag: true
    },
    testClick(){
        this.storeadata.isFlag = !this.storeadata.isFlag;
        console.log("CLICK INSIDE THE REFLUX STORE",this.storeadata.isFlag);
        alert("FLAG VALUE " + this.storeadata.isFlag);
    }
})