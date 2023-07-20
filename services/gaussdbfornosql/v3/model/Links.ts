

export class Links {
    public href?: string;
    public rel?: string;
    public constructor() { 
    }
    public withHref(href: string): Links {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): Links {
        this['rel'] = rel;
        return this;
    }
}