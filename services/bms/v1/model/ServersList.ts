

export class ServersList {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ServersList {
        this['id'] = id;
        return this;
    }
}