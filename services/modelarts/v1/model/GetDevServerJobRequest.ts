

export class GetDevServerJobRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetDevServerJobRequest {
        this['id'] = id;
        return this;
    }
}