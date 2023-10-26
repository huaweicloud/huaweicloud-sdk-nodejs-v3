

export class ClusterLinks {
    public rel?: string;
    public href?: string;
    public constructor() { 
    }
    public withRel(rel: string): ClusterLinks {
        this['rel'] = rel;
        return this;
    }
    public withHref(href: string): ClusterLinks {
        this['href'] = href;
        return this;
    }
}