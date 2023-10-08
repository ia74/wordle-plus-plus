import { ModGlobal } from "./ModGlobal";

export default function () {
	let answer: string[];
	fetch("https://www.nytimes.com/svc/wordle/v2/2023-10-08.json")
	.then(r=>r.json())
	.then(r=>{
		answer = r.solution.split('');
	})

	const btn: HTMLButtonElement = document.createElement('button');
	btn.className = ModGlobal.Key + ' dont-read';
	btn.type = 'button';
	btn.addEventListener('click', (ev: MouseEvent) => {
		document.querySelectorAll(ModGlobal.Key).forEach(keya => {
			let keyb: HTMLButtonElement = keya as HTMLButtonElement;
			if (keyb.className.includes('dont-read')) return;
			answer.forEach(letter => {
				console.log(letter, keyb.getAttribute('data-key'))
				if (keyb.getAttribute('data-key') == letter) {
					var keyboardEvent: KeyboardEvent = new KeyboardEvent('keypress', {
						key: keyb.getAttribute('data-key')
					})
					console.log(keyb.getAttribute('data-key'))
					
					document.querySelector('.MomentSystem-module_moment__G9hyw').dispatchEvent(keyboardEvent);
					
				}
			})
		})
	});
	btn.innerText = "SOLVE";
	document.querySelector('main').appendChild(btn);
}