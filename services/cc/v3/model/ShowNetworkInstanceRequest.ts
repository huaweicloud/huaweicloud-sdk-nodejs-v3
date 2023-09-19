

export class ShowNetworkInstanceRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowNetworkInstanceRequest {
        this['id'] = id;
        return this;
    }
}