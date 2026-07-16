

export class ListDevServerPublicIPRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ListDevServerPublicIPRequest {
        this['id'] = id;
        return this;
    }
}