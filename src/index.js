module.exports = function multiply(first, second) {
		let a = first.split('').reverse();
		let b = second.split('').reverse();
		
		let comp = [];
		
		for (let i = 0; i < a.length+b.length; i++)
		{
			comp[i] = 0;
		}
		
		for (let i = 0; i < a.length; i++){
			for (let j = 0; j < b.length; j++){
				comp[i+j] += (a[i] * b[j]) % 10;
				comp[i+j+1] += Math.floor((a[i] * b[j]) / 10);
				
				if(comp[i+j] >= 10){
					let temp = comp[i+j];
					comp[i+j] %= 10;
					comp[i+j+1] += Math.floor(temp / 10);
				}
				
				if(comp[i+j+1] >= 10){
					let temp = comp[i+j+1];
					comp[i+j+1] %= 10;
					comp[i+j+2] += Math.floor(temp / 10);
				}
			}
		}
		
		if(comp[comp.length-1] == 0)
			comp.pop();
			
			

		return comp.reverse().join('');
	}