
module.exports = class  {

    constructor({uid}) {
	this.uid = uid;
	this start = new Date();
    }

    show() {	
	return {  uid:this.uid, start: this.start };
    }    
}
