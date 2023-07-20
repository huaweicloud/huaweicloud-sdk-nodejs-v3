

export class ListCertificatesRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: string;
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: string;
    public domain?: string;
    private 'private_key'?: string;
    public certificate?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListCertificatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCertificatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: string): ListCertificatesRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: string  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): string | undefined {
        return this['page_reverse'];
    }
    public withId(id: string): ListCertificatesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListCertificatesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListCertificatesRequest {
        this['description'] = description;
        return this;
    }
    public withType(type: string): ListCertificatesRequest {
        this['type'] = type;
        return this;
    }
    public withDomain(domain: string): ListCertificatesRequest {
        this['domain'] = domain;
        return this;
    }
    public withPrivateKey(privateKey: string): ListCertificatesRequest {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withCertificate(certificate: string): ListCertificatesRequest {
        this['certificate'] = certificate;
        return this;
    }
}