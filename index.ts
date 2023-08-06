import './style.css';
import { concat, empty } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

// elems
const userMsg = document.getElementById('message');
const delayedTime = 1000;
const showLastResultAfter = 4000;

// helper
const delayedAction = (msg, delayed = delayedTime) => {
  return empty().pipe(startWith(msg), delay(delayed));
};

concat(
  delayedAction('Get Ready!'),
  delayedAction(3),
  delayedAction(2),
  delayedAction(1),
  delayedAction('Go!'),
  delayedAction('...', showLastResultAfter)
).subscribe((message: any) => (userMsg.innerHTML = message));
