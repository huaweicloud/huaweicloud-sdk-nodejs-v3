

export class FlavorLink {
    public href?: string;
    public rel?: string;
    public type?: string;
    public constructor(href?: string, rel?: string, type?: string) { 
        this['href'] = href;
        this['rel'] = rel;
        this['type'] = type;
    }
    public withHref(href: string): FlavorLink {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): FlavorLink {
        this['rel'] = rel;
        return this;
    }
    public withType(type: string): FlavorLink {
        this['type'] = type;
        return this;
    }
}