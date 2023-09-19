

export class ShowCloudConnectionRoutesRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowCloudConnectionRoutesRequest {
        this['id'] = id;
        return this;
    }
}