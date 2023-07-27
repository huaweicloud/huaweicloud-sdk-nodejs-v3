

export class LinksInfo {
    public rel?: string;
    public href?: string;
    public type?: string;
    public constructor() { 
    }
    public withRel(rel: string): LinksInfo {
        this['rel'] = rel;
        return this;
    }
    public withHref(href: string): LinksInfo {
        this['href'] = href;
        return this;
    }
    public withType(type: string): LinksInfo {
        this['type'] = type;
        return this;
    }
}