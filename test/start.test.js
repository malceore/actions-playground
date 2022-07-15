class Stack {
	constructor() {
		this.top = -1;
		this.items = {};
		this.nextIndex = 0;
	}

	get peek(){
		return this.items[this.nextIndex-1]
	}

	get length(){
		return this.nextIndex
	}

	push(value) {
		this.items[this.nextIndex] = value;
		this.nextIndex++;
	}

	pop() {
		this.nextIndex--;
		return this.items[this.nextIndex];
	}

}

// This is like one 'suite'
describe('My Stack', () => {
	let stack;
	beforeEach (() => {
		stack = new Stack();
	})


	it('is created empty', () =>{
		expect(stack.top).toBe(-1);
		expect(stack.items).toEqual({});
	});

	it('can push to top', () => {
		const emoji1 = ":+1:"
		stack.push(emoji1)
		expect(stack.peek).toEqual(emoji1);

		const emoji2 = ":shaking-fist:"
		stack.push(emoji2)
		expect(stack.peek).toEqual(emoji2);
	});


	it('can pop off top.', () => {
		const emoji1 = ":cloudy:"
		const emoji2 = ":stormy:"
		stack.push(emoji1)
		stack.push(emoji2)

		expect(stack.length).toEqual(2);			
		expect(stack.pop()).toEqual(emoji2);			
		expect(stack.length).toEqual(1);			
	});

})
