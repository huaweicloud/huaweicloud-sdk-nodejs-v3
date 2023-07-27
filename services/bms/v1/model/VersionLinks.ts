

export class VersionLinks {
    public href?: string;
    public rel?: string;
    public constructor() { 
    }
    public withHref(href: string): VersionLinks {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): VersionLinks {
        this['rel'] = rel;
        return this;
    }
}