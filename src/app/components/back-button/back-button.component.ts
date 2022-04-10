import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent{

    goBack(){
        history.back()
    }

}
