#ToolBar

##Screenshot

![](https://github.com/yxfanxiao/myFrontEndDemo/raw/master/toolbar/img/screenshot.png)

## 1. use background pictures
##### what i learn in this demo
		* how to use `require.js`
		* how to use `sass`
		* how to modularize css 
		* how to locate picture locations

## 2. use font icon


## 3. use pseudo-classes like 'before' & 'after' 


## LOL review quicksort 
```javascript
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
				array[pre] = array[beh];
				array[beh] = temp;
				while (array[pre] < temp && pre < beh) {
					pre++;
				}
				array[beh] = array[pre];
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

```
