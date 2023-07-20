

export class NovaLink {
    public href?: string;
    public rel?: NovaLinkRelEnum | string;
    public constructor(href?: string, rel?: string) { 
        this['href'] = href;
        this['rel'] = rel;
    }
    public withHref(href: string): NovaLink {
        this['href'] = href;
        return this;
    }
    public withRel(rel: NovaLinkRelEnum | string): NovaLink {
        this['rel'] = rel;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaLinkRelEnum {
    SELF = 'self',
    BOOKMARK = 'bookmark',
    ALTERNATE = 'alternate',
    DESCRIBEDBY = 'describedby'
}
