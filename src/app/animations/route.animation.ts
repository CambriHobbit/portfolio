import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    // Styles au début de l'animation
    query(
      ':enter',
      [
        style({
          opacity: 0,
          position: 'absolute',
          width: '100%',
        }),
      ],
      { optional: true }
    ),

    // Styles à la fin de l'animation
    query(
      ':leave',
      [
        style({
          opacity: 1,
          position: 'absolute',
          width: '100%',
        }),
      ],
      { optional: true }
    ),

    // Exécution de l'animation
    group([
      query(
        ':leave',
        [
          animate(
            '300ms ease-out',
            style({
              opacity: 0,
              transform: 'translateY(1rem)',
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            transform: 'translateY(-1rem)',
          }),
          animate(
            '300ms ease-out',
            style({
              opacity: 1,
              transform: 'translateY(0)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
