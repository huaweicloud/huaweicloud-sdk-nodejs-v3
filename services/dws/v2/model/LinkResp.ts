

export class LinkResp {
    public rel?: string;
    public href?: string;
    public constructor() { 
    }
    public withRel(rel: string): LinkResp {
        this['rel'] = rel;
        return this;
    }
    public withHref(href: string): LinkResp {
        this['href'] = href;
        return this;
    }
}