import { ChangeDetectionStrategy, Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'share-button',
    templateUrl: './share-button.component.html',
    styleUrls: ['./share-button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonComponent {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    shareOnFacebook() {
        if (isPlatformBrowser(this.platformId)) {
            // browser specific logic
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
        }
    }

}
