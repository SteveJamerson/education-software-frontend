import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from '../../Utils/directives/directive.module';
import { IconComponent } from './icon.component';

@NgModule({
    declarations: [IconComponent],
    imports: [CommonModule, DirectivesModule],
    exports: [IconComponent],
})
export class IconModule {}
