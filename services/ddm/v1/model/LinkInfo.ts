

export class LinkInfo {
    public href?: string;
    public rel?: string;
    public constructor() { 
    }
    public withHref(href: string): LinkInfo {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): LinkInfo {
        this['rel'] = rel;
        return this;
    }
}