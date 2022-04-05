import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ArtworksService } from 'src/app/services/artworks/artworks.service';
import { Router } from '@angular/router';
import { share } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
    selector: 'artwork-page',
    templateUrl: './artwork-page.component.html',
    styleUrls: ['./artwork-page.component.css']
})
export class ArtworkPageComponent implements OnInit, OnDestroy {
    constructor(private artworksService: ArtworksService,
        private seoService: SeoService,
        private router: Router) { }

    artwork$ !: Observable<any>
    artworkSubscription!: Subscription;

    ngOnInit() {
        this.artwork$ = this.artworksService.getArtworkDetails(this.router.url).pipe(share());
        this.artworkSubscription = this.artwork$.subscribe( (artwork:any) =>{
            this.seoService.setMetaData(artwork);
        })
    }

    ngOnDestroy() {
        this.artworkSubscription.unsubscribe();
    }
}
