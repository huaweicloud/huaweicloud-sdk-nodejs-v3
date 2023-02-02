

export class ApiLink {
    public href?: string;
    public rel?: string;
    public constructor() { 
    }
    public withHref(href: string): ApiLink {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): ApiLink {
        this['rel'] = rel;
        return this;
    }
}