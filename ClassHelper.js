var Klass = function(Parent, props) {
	var Child, F, i;

	// 1. 新的建構式
	Child = function() {
		if(Child.uber && Child.uber.hasOwnProperty('__construct')){
			Child.uber.__construct.apply(this, arguments);
		}
		if(Child.prototype.hasOwnProperty("__construct")){
			Child.prototype.__construct.apply(this, arguments);
		}
	}

	// 2. 繼承
	Parent =  Parent || Object;
	F = function() {};
	F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype;
    Child.prototype.constructor = Child;

    // 3. 加入實作的方法
    for(i in props){
    	if(props.hasOwnProperty(i)){
    		Child.prototype[i] = props[i];
    	}
    }

    return Child;

}