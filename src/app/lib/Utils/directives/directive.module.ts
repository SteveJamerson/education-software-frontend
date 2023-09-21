import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderDirective } from './loader.directive';
import { TestIdDirective } from './testid.directive';

@NgModule({
    declarations: [TestIdDirective, LoaderDirective],
    imports: [CommonModule],
    exports: [TestIdDirective, LoaderDirective],
})
export class DirectivesModule {}
