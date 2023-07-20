

export class ListPredefineTagsRequest {
    public key?: string;
    public value?: string;
    public limit?: number;
    public marker?: string;
    private 'order_field'?: string;
    private 'order_method'?: ListPredefineTagsRequestOrderMethodEnum | string;
    public constructor() { 
    }
    public withKey(key: string): ListPredefineTagsRequest {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ListPredefineTagsRequest {
        this['value'] = value;
        return this;
    }
    public withLimit(limit: number): ListPredefineTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPredefineTagsRequest {
        this['marker'] = marker;
        return this;
    }
    public withOrderField(orderField: string): ListPredefineTagsRequest {
        this['order_field'] = orderField;
        return this;
    }
    public set orderField(orderField: string  | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField(): string | undefined {
        return this['order_field'];
    }
    public withOrderMethod(orderMethod: ListPredefineTagsRequestOrderMethodEnum | string): ListPredefineTagsRequest {
        this['order_method'] = orderMethod;
        return this;
    }
    public set orderMethod(orderMethod: ListPredefineTagsRequestOrderMethodEnum | string  | undefined) {
        this['order_method'] = orderMethod;
    }
    public get orderMethod(): ListPredefineTagsRequestOrderMethodEnum | string | undefined {
        return this['order_method'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPredefineTagsRequestOrderMethodEnum {
    ASC = 'asc',
    DESC = 'desc'
}
