import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../Atoms';
import { DirectivesModule } from '../../Utils/directives';
import { TextFieldComponent } from './textfield.component';

@NgModule({
    declarations: [TextFieldComponent],
    imports: [CommonModule, IconModule, DirectivesModule],
    exports: [TextFieldComponent],
})
export class TextFieldModule {}
