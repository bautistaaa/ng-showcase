import { Component, OnInit, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';

@Component({
    selector: 'app-animations',
    templateUrl: './animations.component.html',
    styleUrls: ['./animations.component.css'],
    animations: [
        trigger('divState', [
            state('normal', style({
                'background-color': 'red',
                transform: 'translateX(0)'
            })),
            state('highlighted', style({
                'background-color': 'blue',
                transform: 'translateX(100px)'
            })),
            transition('normal<=> highlighted', animate(300))
        ]),

        trigger('wildState', [
            state('normal', style({
                'background-color': 'red',
                transform: 'translateX(0) scale(1)'
            })),
            state('highlighted', style({
                'background-color': 'blue',
                transform: 'translateX(100px) scale(1)'
            })),
            state('shrunken', style({
                'background-color': 'green',
                transform: 'translateX(0) scale(0.5)'
            })),
            transition('normal => highlighted', animate(300)),
            transition('highlighted => normal', animate(800)),
            transition('shrunken <=> *', [
                style({
                    'background-color': 'orange'
                }),
                animate(500, style({
                    borderRadius: '30px'
                })),
                animate(500, style({
                    borderRadius: '50px'
                })),
                animate(500)
            ])
        ]),

        trigger('list1', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(100px)'
                }),
                animate(300)
            ]),
            transition('* => void', [
                animate(300, style({
                    transform: 'translateX(100px)',
                    opacity: 0
                }))
            ])
        ]),

        trigger('list2', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0)'
            })),
            transition('void => *', [
                animate(1000, keyframes([
                    style({
                        transform: 'translateX(-100px)',
                        opacity: 0,
                        offset: 0
                    }),
                    style({
                        transform: 'translateX(-50px)',
                        opacity: 0.5,
                        offset: 0.3
                    }),
                    style({
                        transform: 'translateX(-20px)',
                        opacity: 1,
                        offset: 0.8
                    }),
                    style({
                        transform: 'translateX(0px)',
                        opacity: 1,
                        offset: 1
                    })
                ]))
            ]),
            transition('* => void', [
                group([
                    animate(300, style({
                        color: 'red'
                    })),
                    animate(800, style({
                        transform: 'translateX(100px)',
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
})
export class AnimationsComponent implements OnInit {
    state = 'normal';
    wildState = 'normal';
    items = ['LCMP', 'Rules', 'So', 'Hard'];

    constructor() { }

    ngOnInit() {
    }

    onAdd(item) {
        console.log(item);
        this.items.push(item);
    }

    onDelete(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    onAnimate() {
        this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
        this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }

    onShrink() {
        this.wildState = 'shrunken';
    }
}
