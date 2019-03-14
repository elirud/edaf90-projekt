import { NgModule } from '@angular/core';

    import {
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatDividerModule,
      MatFormFieldModule,
      MatInputModule
    } from '@angular/material';

    @NgModule({
      imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
      ],
      exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
    export class MaterialModule {}