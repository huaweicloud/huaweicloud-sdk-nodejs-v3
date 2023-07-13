

export class PageLink {
    public self?: string;
    public next?: string;
    public constructor() { 
    }
    public withSelf(self: string): PageLink {
        this['self'] = self;
        return this;
    }
    public withNext(next: string): PageLink {
        this['next'] = next;
        return this;
    }
}