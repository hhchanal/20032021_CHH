let deduplicate = (rows) => {
    //Deduplicate logic
    rows.forEach(function (value, index, arr) {
    	value.quantity = 0;
    	let id = value.id;
    	for (let i = 0; i < rows.length; i++) {
    		if (value.id == rows[i].id) {
    			value.quantity++;
    			if (index != i) {
    				rows.splice(i, 1);
    				i--;
    			}
    		}
    	}
    });
    return rows;
};


module.exports = deduplicate;