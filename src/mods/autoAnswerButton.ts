import { ModGlobal } from "./ModGlobal";

export default function () {
	let answer: string[];
	let fmd: string = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
	fetch("https://www.nytimes.com/svc/wordle/v2/" + fmd + ".json")
	.then(r=>r.json())
	.then(r=>{
		answer = r.solution.split('');
		answer.push('↵');
		console.log('GOT NASEWR')
		const btn: HTMLButtonElement = document.createElement('button');
		btn.className = ModGlobal.Key + ' dont-read';
		btn.type = 'button';
		let buttons = {}
		btn.addEventListener('click', (ev: MouseEvent) => {
			document.querySelectorAll('.Key-module_key__kchQI').forEach(a=> {
				if(answer.includes(a.getAttribute('data-key'))) { // @ts-ignore
					buttons[a.getAttribute('data-key')] = a;
				}
			})
			answer.forEach(letter => {
				if(buttons[letter]) buttons[letter].click();
			})
			buttons = {};
			
		});
		btn.innerText = "SOLVE";
		document.querySelector('main').appendChild(btn);
	})
}
