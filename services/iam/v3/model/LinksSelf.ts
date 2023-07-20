

export class LinksSelf {
    public self?: string;
    public constructor(self?: string) { 
        this['self'] = self;
    }
    public withSelf(self: string): LinksSelf {
        this['self'] = self;
        return this;
    }
}