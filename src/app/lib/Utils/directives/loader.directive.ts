import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import {
    ApplicationRef,
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    Injector,
    Input,
} from '@angular/core';
import { LoadingComponent } from '../../Atoms/loading';

@Directive({
    selector: '[loader]',
})
export class LoaderDirective {
    @Input() set loader(status: boolean) {
        this.on(status);
    }

    @Input() loaderSize?: string;
    @Input() loaderColor: string = 'principal';

    private host!: DomPortalOutlet;

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        private cfr: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    on(status: boolean): void {
        const element = this.elementRef.nativeElement;
        if (status) {
            element.classList.add('ds-in-loading');
            this.create();
        } else {
            element.classList.remove('ds-in-loading');
            this.host?.detach();
        }
    }

    create(): void {
        const component = new ComponentPortal(LoadingComponent);
        this.host = new DomPortalOutlet(
            this.elementRef.nativeElement,
            this.cfr,
            this.appRef,
            this.injector
        );
        const componentRef = this.host.attach(component);

        componentRef.instance.color = this.loaderColor;
        if (this.loaderSize) {
            componentRef.instance.size = this.loaderSize;
        }
    }
}
