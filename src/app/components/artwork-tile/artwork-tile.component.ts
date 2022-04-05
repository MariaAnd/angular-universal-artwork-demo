import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'artwork-tile',
    templateUrl: './artwork-tile.component.html',
    styleUrls: ['./artwork-tile.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtworkTileComponent {
    @Input() artwork: any;
}
