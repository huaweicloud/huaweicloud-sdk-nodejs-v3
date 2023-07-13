

export class SelfLinksInfo {
    public self?: string;
    public constructor() { 
    }
    public withSelf(self: string): SelfLinksInfo {
        this['self'] = self;
        return this;
    }
}