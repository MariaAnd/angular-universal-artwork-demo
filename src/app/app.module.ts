import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserStateInterceptor } from './interceptors/browser-state.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworksService } from './services/artworks/artworks.service';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { ArtworkTileComponent } from './components/artwork-tile/artwork-tile.component';
import { ImageComponent } from './components/image/image.component';
import { ArtworkPageComponent } from './pages/artwork-page/artwork-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewPageComponent,
    ArtworkPageComponent,
    ArtworkTileComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserTransferStateModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
