

export class Link {
    public self?: string;
    public constructor() { 
    }
    public withSelf(self: string): Link {
        this['self'] = self;
        return this;
    }
}