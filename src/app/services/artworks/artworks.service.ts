import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpsService } from '../https/https.service';

@Injectable({
    providedIn: 'root'
})
export class ArtworksService {
    constructor(private httpsService: HttpsService) { }

    // Art Institute of Chicago API https://api.artic.edu/docs/
    artworksUrl = 'https://api.artic.edu/api/v1/artworks';

    successHandler(response: any) {
        if (response.data) {
            return response.data
        } else {
            return response
        }
    }

    getArtworksOverview() {
        return this.httpsService.getRequest(this.artworksUrl).pipe(
            map(result => this.successHandler(result))
        );
    }

    getArtworkDetails(id: string) {
        console.log(`${this.artworksUrl}${id}`)
        return this.httpsService.getRequest(`${this.artworksUrl}${id}`).pipe(
            map(result => this.successHandler(result))
        );
    }

}