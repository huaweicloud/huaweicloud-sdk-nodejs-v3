

export class LinksInfoResponse {
    public href?: string;
    public rel?: string;
    public constructor() { 
    }
    public withHref(href: string): LinksInfoResponse {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): LinksInfoResponse {
        this['rel'] = rel;
        return this;
    }
}