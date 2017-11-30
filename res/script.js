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

var last = 0, clicks = 0;
function increaseCount(elem)
{
	var cur = new Date();
	var now = cur.getTime()/1000;
	if (now - last >= 2) {
		clicks++;
		var box = document.getElementById("main");
		box.style.opacity = 0;
		elem.style = "cursor: wait";
		setTimeout(function () {
						elem.style = "cursor: pointer";
					}, 2000);
		setTimeout(function () {
						box.innerHTML = "Number of clicks: " + clicks;
						box.style.opacity = 1;
					}, 500);
		last = now;
		return true;
	}
	else	return false;
}