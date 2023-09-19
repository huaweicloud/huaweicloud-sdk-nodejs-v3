

export class ShowCloudConnectionRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowCloudConnectionRequest {
        this['id'] = id;
        return this;
    }
}