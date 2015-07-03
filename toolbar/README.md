#ToolBar

##Screenshot

![](https://github.com/yxfanxiao/myFrontEndDemo/raw/master/toolbar/img/screenshot.png)

## 1. use background pictures
##### what i learn in this demo
		* how to use `require.js`
		* how to use `sass`
		* how to modularize css 
		* how to locate picture locations

### sass note:
> $foo: 10px;											// use as constant
<br>
> height: $foo - 6;										// when '+-*/' need add space
<br>
> @import "foo";										// import '_foo.scss'
<br>
> @mixin toolbar-item ($pos, $hoverPos){} 				// in '_foo.scss' create function 	
<br>		
> @include opacity(0);									// use function in '_foo.scss' 
<br>
> .demo{ height: $foo; &:hover{ height: $foo * 2;} }  	// '&:'  mean this



## 2. use font icon
		* [Free IconMoon](https://icomoon.io/app/#/select)
		* only need floder 'fonts' & 'style.css'
		* understand html construction 

## 3. use pseudo-classes like 'before' & 'after' 
		why after i use this, the second way fails? I can't figure out, so move the second way to way2.html...

## LOL suddenly want to review quicksort 
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
