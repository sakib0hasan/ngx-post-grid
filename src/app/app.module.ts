import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, PostComponent],
    imports: [BrowserModule, HttpClientModule, MatIconModule, NoopAnimationsModule],
    providers: [PostService],
    bootstrap: [AppComponent],
})
export class AppModule {}
