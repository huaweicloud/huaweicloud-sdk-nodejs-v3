

export class PageLink {
    public href: string;
    public rel: string;
    public constructor(href?: any, rel?: any) { 
        this['href'] = href;
        this['rel'] = rel;
    }
    public withHref(href: string): PageLink {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): PageLink {
        this['rel'] = rel;
        return this;
    }
}