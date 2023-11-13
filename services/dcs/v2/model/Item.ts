

export class Item {
    public result?: string;
    public id?: string;
    public constructor() { 
    }
    public withResult(result: string): Item {
        this['result'] = result;
        return this;
    }
    public withId(id: string): Item {
        this['id'] = id;
        return this;
    }
}