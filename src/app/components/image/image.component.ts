import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit{
    @Input() imageId!: string;
    imageUrl!: string;

    ngOnInit(){
        if (this.imageId){
            this.imageUrl = `https://www.artic.edu/iiif/2/${this.imageId}/full/843,/0/default.jpg`
        } else {
            this.imageUrl = '/assets/default-placeholder.png'
        }
        
    }

}
