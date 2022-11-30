

export class ServerImage {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): ServerImage {
        this['id'] = id;
        return this;
    }
}