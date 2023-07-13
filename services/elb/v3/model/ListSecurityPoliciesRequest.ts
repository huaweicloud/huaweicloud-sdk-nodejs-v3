

export class ListSecurityPoliciesRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean | undefined;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    public protocols?: Array<string>;
    public ciphers?: Array<string>;
    public constructor() { 
    }
    public withMarker(marker: string): ListSecurityPoliciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListSecurityPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListSecurityPoliciesRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListSecurityPoliciesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListSecurityPoliciesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListSecurityPoliciesRequest {
        this['description'] = description;
        return this;
    }
    public withProtocols(protocols: Array<string>): ListSecurityPoliciesRequest {
        this['protocols'] = protocols;
        return this;
    }
    public withCiphers(ciphers: Array<string>): ListSecurityPoliciesRequest {
        this['ciphers'] = ciphers;
        return this;
    }
}