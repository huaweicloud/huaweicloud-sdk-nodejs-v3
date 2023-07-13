

export class Links {
    public self: string;
    public previous: string;
    public next: string;
    public constructor(self?: any, previous?: any, next?: any) { 
        this['self'] = self;
        this['previous'] = previous;
        this['next'] = next;
    }
    public withSelf(self: string): Links {
        this['self'] = self;
        return this;
    }
    public withPrevious(previous: string): Links {
        this['previous'] = previous;
        return this;
    }
    public withNext(next: string): Links {
        this['next'] = next;
        return this;
    }
}