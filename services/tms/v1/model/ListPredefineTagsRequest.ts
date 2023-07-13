

export class ListPredefineTagsRequest {
    public key?: string;
    public value?: string;
    public limit?: number;
    public marker?: string;
    private 'order_field'?: string | undefined;
    private 'order_method'?: ListPredefineTagsRequestOrderMethodEnum | undefined;
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
    public set orderField(orderField: string | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField() {
        return this['order_field'];
    }
    public withOrderMethod(orderMethod: ListPredefineTagsRequestOrderMethodEnum): ListPredefineTagsRequest {
        this['order_method'] = orderMethod;
        return this;
    }
    public set orderMethod(orderMethod: ListPredefineTagsRequestOrderMethodEnum | undefined) {
        this['order_method'] = orderMethod;
    }
    public get orderMethod() {
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
