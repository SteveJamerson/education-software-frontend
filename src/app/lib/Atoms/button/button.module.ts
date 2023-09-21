import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from '../../Utils/directives/directive.module';
import { IconModule } from '../icon';
import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, DirectivesModule, IconModule],
    exports: [ButtonComponent],
})
export class ButtonModule {}
