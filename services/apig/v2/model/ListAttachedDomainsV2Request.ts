

export class ListAttachedDomainsV2Request {
    private 'certificate_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'url_domain'?: string;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): ListAttachedDomainsV2Request {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withOffset(offset: number): ListAttachedDomainsV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAttachedDomainsV2Request {
        this['limit'] = limit;
        return this;
    }
    public withUrlDomain(urlDomain: string): ListAttachedDomainsV2Request {
        this['url_domain'] = urlDomain;
        return this;
    }
    public set urlDomain(urlDomain: string  | undefined) {
        this['url_domain'] = urlDomain;
    }
    public get urlDomain(): string | undefined {
        return this['url_domain'];
    }
}