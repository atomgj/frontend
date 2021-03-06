module.exports = {
	user: {
		name: {type: String, required: true},
		password: {type: String, require: true},
		gender: {type: Boolean, default: true}
	},
	commodity: {
		name: {type: String, required: true},
		price: {type: Number, required: true},
		imgSrc: {type: String, required: true}
	},
	cart: {
		uId: {type: String},
		cId: {type: String},
		cName: {type: String},
		cPrice: {type: Number},
		cQuantity: {type: Number},
		cStatus: {type: Boolean, default: false}
	}
};
