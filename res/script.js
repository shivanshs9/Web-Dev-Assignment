/*
 *  Copyright 2017 Shivansh Saini
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var clicks = 0;	// Stores the number of button clicks
var pos = true;	// Checks if the clicking the button executes the function.

function buttonClicked(elem)
{
	if (pos)	// If yes, increase the clicks count, display the new count and return true.
	{
		increaseCount(elem);
		return true;
	}
	else	return false;
}

function increaseCount (elem)
{
	clicks++;	// Increments the click count by 1.
	var box = document.getElementById("main");
	box.style.opacity = 0;
	elem.style = "cursor: wait";
	pos = false;
	setTimeout(function () {
					elem.style = "cursor: pointer";
					pos = true;
				}, 2000);
	setTimeout(function () {
					box.innerHTML = "Number of clicks: " + clicks;
					box.style.opacity = 1;
				}, 500);
}