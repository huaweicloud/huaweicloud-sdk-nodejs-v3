

export class Pager {
    public href?: string;
    public rel?: PagerRelEnum | string;
    public constructor() { 
    }
    public withHref(href: string): Pager {
        this['href'] = href;
        return this;
    }
    public withRel(rel: PagerRelEnum | string): Pager {
        this['rel'] = rel;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PagerRelEnum {
    NEXT = 'next',
    PREVIOUS = 'previous'
}
