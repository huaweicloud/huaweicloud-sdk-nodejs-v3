

export class NovaLink {
    public href: string;
    public rel: NovaLinkRelEnum;
    public constructor(href?: any, rel?: any) { 
        this['href'] = href;
        this['rel'] = rel;
    }
    public withHref(href: string): NovaLink {
        this['href'] = href;
        return this;
    }
    public withRel(rel: NovaLinkRelEnum): NovaLink {
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
