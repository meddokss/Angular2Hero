import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-hero',
	templateUrl: 'app.component.html',
	styleUrls:['app.component.css']
})

export class AppComponent {
    title: string = 'Create Your Hero';
}
