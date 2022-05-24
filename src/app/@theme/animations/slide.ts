
import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
} from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
  transition('1 => 2', [
    style({ height: '!' }),
    query(':enter', style({ transform: 'translateX(100%)' })),
    query(
      ':enter, :leave',
      style({ position: 'absolute', top: 75, left: 75, right: 75 })
    ),
    group([
      query(':leave', [
        animate(
          '0.3s cubic-bezier(.35, 0, .25, 1)',
          style({ transform: 'translateX(-100%)' })
        ),
      ]),
      query(':enter', [
        animate(
          '0.3s cubic-bezier(.35, 0, .25, 1)',
          style({ transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ]),
  transition('2 => 1', [
    style({ height: '!' }),
    query(':enter', style({ transform: 'translateX(-100%)' })),
    query(
      ':enter, :leave',
      style({ position: 'absolute', top: 75, left: 75, right: 75 })
    ),
    group([
      query(':leave', [
        animate(
          '0.3s cubic-bezier(.35, 0, .25, 1)',
          style({ transform: 'translateX(100%)' })
        ),
      ]),
      query(':enter', [
        animate(
          '0.3s cubic-bezier(.35, 0, .25, 1)',
          style({ transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ]),
])
