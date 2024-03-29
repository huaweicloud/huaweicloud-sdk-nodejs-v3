

export class VersionLinks {
    public rel?: string;
    public href?: string;
    public constructor(rel?: string, href?: string) { 
        this['rel'] = rel;
        this['href'] = href;
    }
    public withRel(rel: string): VersionLinks {
        this['rel'] = rel;
        return this;
    }
    public withHref(href: string): VersionLinks {
        this['href'] = href;
        return this;
    }
}