

export class ListEdgeSiteMetricsRequest {
    private 'site_id'?: string;
    public dim?: ListEdgeSiteMetricsRequestDimEnum | string;
    public constructor(siteId?: string) { 
        this['site_id'] = siteId;
    }
    public withSiteId(siteId: string): ListEdgeSiteMetricsRequest {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withDim(dim: ListEdgeSiteMetricsRequestDimEnum | string): ListEdgeSiteMetricsRequest {
        this['dim'] = dim;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEdgeSiteMetricsRequestDimEnum {
    SITE_ID = 'site_id',
    FLAVOR = 'flavor',
    STORAGE = 'storage',
    FLAVOR_CAPACITY = 'flavor_capacity',
    STORAGE_POOL = 'storage_pool'
}
