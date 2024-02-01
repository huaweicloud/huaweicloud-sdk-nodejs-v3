

export class ListGlobalConnectionBandwidthSitesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'site_code'?: string;
    private 'site_type'?: ListGlobalConnectionBandwidthSitesRequestSiteTypeEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalConnectionBandwidthSitesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListGlobalConnectionBandwidthSitesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListGlobalConnectionBandwidthSitesRequest {
        this['id'] = id;
        return this;
    }
    public withSiteCode(siteCode: string): ListGlobalConnectionBandwidthSitesRequest {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
    public withSiteType(siteType: ListGlobalConnectionBandwidthSitesRequestSiteTypeEnum | string): ListGlobalConnectionBandwidthSitesRequest {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: ListGlobalConnectionBandwidthSitesRequestSiteTypeEnum | string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): ListGlobalConnectionBandwidthSitesRequestSiteTypeEnum | string | undefined {
        return this['site_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthSitesRequestSiteTypeEnum {
    AREA = 'Area',
    SUBAREA = 'SubArea',
    REGION = 'Region'
}
