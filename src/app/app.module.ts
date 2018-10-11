import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NgbdModalStacked, NgbdModal1Content, NgbdModal2Content } from './modal-basic/modal-basic.component';

@NgModule({
	declarations: [
		AppComponent,
		NgbdModalStacked,
		NgbdModal1Content,
		NgbdModal2Content
	],
	imports: [
		BrowserModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [NgbdModal1Content, NgbdModal2Content]
})
export class AppModule { }
