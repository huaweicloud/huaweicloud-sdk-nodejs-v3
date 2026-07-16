

export class GetDevServerJobServiceRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetDevServerJobServiceRequest {
        this['id'] = id;
        return this;
    }
}