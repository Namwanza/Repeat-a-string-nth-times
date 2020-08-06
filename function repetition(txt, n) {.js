function repetition(txt, n) {
	switch(n) {
		case 1: 
			return (txt.repeat(1))
		case 2: 
			return (txt.repeat(2))
		case 3: 
			return (txt.repeat(3))
		case 4: 
			return (txt.repeat(4))
		case 5: 
			return (txt.repeat(5))
		default:
			return (txt.repeat(6))
	}
}
repetition('Ron', 1);
repetition('Nam', 2);
repetition('Ruth', 3);
repetition('Skylla', 4);