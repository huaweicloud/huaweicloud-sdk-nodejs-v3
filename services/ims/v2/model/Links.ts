

export class Links {
    public href: string;
    public rel: string;
    public constructor(href?: any, rel?: any) { 
        this['href'] = href;
        this['rel'] = rel;
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