

export class BusinessAssetRequest {
    private 'search_all_attributes'?: boolean;
    public tags?: object;
    public limit?: number;
    public offset?: number;
    public guid?: string;
    public query?: string;
    public type?: BusinessAssetRequestTypeEnum | string;
    public constructor(searchAllAttributes?: boolean, limit?: number, offset?: number, query?: string, type?: string) { 
        this['search_all_attributes'] = searchAllAttributes;
        this['limit'] = limit;
        this['offset'] = offset;
        this['query'] = query;
        this['type'] = type;
    }
    public withSearchAllAttributes(searchAllAttributes: boolean): BusinessAssetRequest {
        this['search_all_attributes'] = searchAllAttributes;
        return this;
    }
    public set searchAllAttributes(searchAllAttributes: boolean  | undefined) {
        this['search_all_attributes'] = searchAllAttributes;
    }
    public get searchAllAttributes(): boolean | undefined {
        return this['search_all_attributes'];
    }
    public withTags(tags: object): BusinessAssetRequest {
        this['tags'] = tags;
        return this;
    }
    public withLimit(limit: number): BusinessAssetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): BusinessAssetRequest {
        this['offset'] = offset;
        return this;
    }
    public withGuid(guid: string): BusinessAssetRequest {
        this['guid'] = guid;
        return this;
    }
    public withQuery(query: string): BusinessAssetRequest {
        this['query'] = query;
        return this;
    }
    public withType(type: BusinessAssetRequestTypeEnum | string): BusinessAssetRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BusinessAssetRequestTypeEnum {
    BUSINESS = 'BUSINESS',
    LOGICENTITY = 'LOGICENTITY'
}
