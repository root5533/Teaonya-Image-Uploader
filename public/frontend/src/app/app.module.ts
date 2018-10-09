import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarModule } from 'ng-sidebar';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { SidebarService } from './services/sidebar.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ImageService } from './services/image.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    LayoutComponent,
    ImageUploaderComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    AngularFontAwesomeModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
