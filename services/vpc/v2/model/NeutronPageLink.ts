

export class NeutronPageLink {
    public href: string;
    public rel: string;
    public constructor(href?: any, rel?: any) { 
        this['href'] = href;
        this['rel'] = rel;
    }
    public withHref(href: string): NeutronPageLink {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): NeutronPageLink {
        this['rel'] = rel;
        return this;
    }
}