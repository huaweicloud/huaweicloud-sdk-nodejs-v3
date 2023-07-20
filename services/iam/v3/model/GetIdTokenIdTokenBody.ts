

export class GetIdTokenIdTokenBody {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetIdTokenIdTokenBody {
        this['id'] = id;
        return this;
    }
}