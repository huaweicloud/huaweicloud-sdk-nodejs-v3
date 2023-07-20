

export class ShowJobDetailRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowJobDetailRequest {
        this['id'] = id;
        return this;
    }
}