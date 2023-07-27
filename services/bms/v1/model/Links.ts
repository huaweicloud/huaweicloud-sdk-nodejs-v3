

export class Links {
    public rel?: string;
    public href?: string;
    public constructor() { 
    }
    public withRel(rel: string): Links {
        this['rel'] = rel;
        return this;
    }
    public withHref(href: string): Links {
        this['href'] = href;
        return this;
    }
}