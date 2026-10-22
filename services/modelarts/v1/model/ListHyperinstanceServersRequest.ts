

export class ListHyperinstanceServersRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ListHyperinstanceServersRequest {
        this['id'] = id;
        return this;
    }
}