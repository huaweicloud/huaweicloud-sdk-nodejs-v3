

export class Link {
    public href: string;
    public rel: string;
    public constructor(href?: any, rel?: any) { 
        this['href'] = href;
        this['rel'] = rel;
    }
    public withHref(href: string): Link {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): Link {
        this['rel'] = rel;
        return this;
    }
}