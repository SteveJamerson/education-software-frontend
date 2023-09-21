import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from './button';
import { IconModule } from './icon';
import { LoadingModule } from './loading';

const modules = [ButtonModule, IconModule, LoadingModule];

@NgModule({
    imports: [CommonModule, ...modules],
    exports: [...modules],
})
export class AtomsModule {}
