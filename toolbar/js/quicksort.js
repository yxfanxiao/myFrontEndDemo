function quicksort (array) {
	sort(0, array.length-1);
	function sort (pre, beh) {
		var previous = pre;
		var behind = beh;
		var temp = array[pre];
		if (pre < beh) {
			while (pre < beh) {
				while (array[beh] > temp && pre < beh) {
					beh--;
				}
				array[pre] =array[beh];
				array[beh] = temp;
				while (array[pre] < temp && pre < beh) {
					pre++;
				}
				array[beh] =array[pre];
				array[pre] = temp;			
			}
			sort(previous, beh-1);
			sort(beh+1, behind);			
		}
	}
}
function startSort () {
	var array = [1,3,2,5,4,8];
	quicksort(array);
	console.log(array);
}
