

export class ShowLeaseRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowLeaseRequest {
        this['id'] = id;
        return this;
    }
}