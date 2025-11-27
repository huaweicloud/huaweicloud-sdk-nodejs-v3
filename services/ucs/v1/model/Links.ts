

export class Links {
    public self?: string;
    public next?: string;
    public constructor() { 
    }
    public withSelf(self: string): Links {
        this['self'] = self;
        return this;
    }
    public withNext(next: string): Links {
        this['next'] = next;
        return this;
    }
}