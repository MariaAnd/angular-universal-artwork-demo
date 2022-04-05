import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworksService } from 'src/app/services/artworks/artworks.service';

@Component({
    selector: 'overview-page',
    templateUrl: './overview-page.component.html',
    styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit{
    constructor(private artworksService: ArtworksService) { }

    artworks$ !: Observable<any>

    ngOnInit(){
        this.artworks$ = this.artworksService.getArtworksOverview()
    }
}
