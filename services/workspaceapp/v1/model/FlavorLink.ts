

export class FlavorLink {
    public rel?: string;
    public hrel?: string;
    public constructor() { 
    }
    public withRel(rel: string): FlavorLink {
        this['rel'] = rel;
        return this;
    }
    public withHrel(hrel: string): FlavorLink {
        this['hrel'] = hrel;
        return this;
    }
}