

export class APIVersionLink {
    public href?: string;
    public rel?: APIVersionLinkRelEnum | string;
    public constructor(href?: string, rel?: string) { 
        this['href'] = href;
        this['rel'] = rel;
    }
    public withHref(href: string): APIVersionLink {
        this['href'] = href;
        return this;
    }
    public withRel(rel: APIVersionLinkRelEnum | string): APIVersionLink {
        this['rel'] = rel;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum APIVersionLinkRelEnum {
    SELF = 'self'
}
