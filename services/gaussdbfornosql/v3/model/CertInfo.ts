

export class CertInfo {
    public category?: CertInfoCategoryEnum | string;
    private 'download_link'?: string;
    public constructor(category?: string, downloadLink?: string) { 
        this['category'] = category;
        this['download_link'] = downloadLink;
    }
    public withCategory(category: CertInfoCategoryEnum | string): CertInfo {
        this['category'] = category;
        return this;
    }
    public withDownloadLink(downloadLink: string): CertInfo {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CertInfoCategoryEnum {
    INTERNATIONAL = 'international'
}
