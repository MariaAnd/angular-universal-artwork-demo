import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    
    constructor(private readonly metaService: Meta, private titleService: Title){}
    
    setMetaData(artwork:any){
        this.setTitle(artwork.title);
        this.setDescription(artwork.medium_display);
        this.setKeywords(artwork.term_titles);
        // you can add other tags: url, image and etc
    }

    setTitle(title: string){
        this.titleService.setTitle(title);
        this.metaService.addTag({name: 'twitter:title', content: title});
        this.metaService.addTag({property: 'og:title', content: title});
        this.metaService.addTag({name: 'title', content: title});
    }

    setDescription(description: string){
        this.metaService.addTag({name: 'twitter:description', content: description});
        this.metaService.addTag({property: 'og:description', content: description});
        this.metaService.addTag({name: 'description', content: description});
    }

    setKeywords(keywords: string){
        this.metaService.addTag({name: 'keywords', content: keywords});
    }

}