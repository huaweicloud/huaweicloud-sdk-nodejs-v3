

export class ListCertificatesRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean | undefined;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'admin_state_up'?: boolean | undefined;
    public domain?: Array<string>;
    public type?: Array<string>;
    public constructor() { 
    }
    public withMarker(marker: string): ListCertificatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListCertificatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListCertificatesRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListCertificatesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListCertificatesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListCertificatesRequest {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListCertificatesRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDomain(domain: Array<string>): ListCertificatesRequest {
        this['domain'] = domain;
        return this;
    }
    public withType(type: Array<string>): ListCertificatesRequest {
        this['type'] = type;
        return this;
    }
}