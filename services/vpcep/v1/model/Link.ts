

export class Link {
    public href?: string;
    public type?: string;
    public rel?: string;
    public constructor() { 
    }
    public withHref(href: string): Link {
        this['href'] = href;
        return this;
    }
    public withType(type: string): Link {
        this['type'] = type;
        return this;
    }
    public withRel(rel: string): Link {
        this['rel'] = rel;
        return this;
    }
}