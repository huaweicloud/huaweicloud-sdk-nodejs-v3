

export class ShowRackRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowRackRequest {
        this['id'] = id;
        return this;
    }
}