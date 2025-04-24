

export class ApiVersionsLinks {
    public href?: string;
    public rel?: string;
    public constructor() { 
    }
    public withHref(href: string): ApiVersionsLinks {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): ApiVersionsLinks {
        this['rel'] = rel;
        return this;
    }
}