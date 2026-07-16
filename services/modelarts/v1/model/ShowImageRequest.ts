

export class ShowImageRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowImageRequest {
        this['id'] = id;
        return this;
    }
}