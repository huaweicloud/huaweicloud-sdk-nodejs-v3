

export class ListGeipResourceQuotasRequest {
    public limit?: number;
    public offset?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    public fields?: Array<string>;
    public type?: Array<ListGeipResourceQuotasRequestTypeEnum> | Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGeipResourceQuotasRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListGeipResourceQuotasRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListGeipResourceQuotasRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListGeipResourceQuotasRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withFields(fields: Array<string>): ListGeipResourceQuotasRequest {
        this['fields'] = fields;
        return this;
    }
    public withType(type: Array<ListGeipResourceQuotasRequestTypeEnum> | Array<string>): ListGeipResourceQuotasRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGeipResourceQuotasRequestTypeEnum {
    GEIP = 'geip',
    GEIP_SEGMENT = 'geip_segment',
    INTERNETBANDWIDTHIP = 'internetBandwidthIP',
    INTERNETBANDWIDTH = 'internetBandwidth'
}
