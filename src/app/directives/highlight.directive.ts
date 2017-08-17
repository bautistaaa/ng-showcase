import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    @Input() defaultColor: string;
    @Input() hightlightColor: string;

    // can use @HotsBinding instead of _renderer
    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
    constructor(
        private _renderer: Renderer2,
        private _elRef: ElementRef) { }

    ngOnInit() {
        this.highlight(this.defaultColor || 'purple');
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.hightlightColor || 'orange');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(this.defaultColor || 'purple');
    }

    highlight(color) {
        // this._renderer.setStyle(this._elRef.nativeElement, 'background-color', color);
        this.backgroundColor = color;
    }
}
