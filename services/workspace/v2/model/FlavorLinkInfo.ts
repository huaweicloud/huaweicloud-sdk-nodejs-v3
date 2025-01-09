

export class FlavorLinkInfo {
    public rel?: string;
    public hrel?: string;
    public constructor() { 
    }
    public withRel(rel: string): FlavorLinkInfo {
        this['rel'] = rel;
        return this;
    }
    public withHrel(hrel: string): FlavorLinkInfo {
        this['hrel'] = hrel;
        return this;
    }
}