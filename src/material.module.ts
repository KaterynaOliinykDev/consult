import {NgModule} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    exports: [
      MatSlideToggleModule,
      MatGridListModule,
      MatCardModule,
      MatToolbarModule,
      MatListModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule
    ]
  })
  export class MaterialModule {}
