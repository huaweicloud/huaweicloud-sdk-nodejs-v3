

export class GetDevServerImageRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): GetDevServerImageRequest {
        this['id'] = id;
        return this;
    }
}