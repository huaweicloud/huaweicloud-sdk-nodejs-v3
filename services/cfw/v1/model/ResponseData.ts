

export class ResponseData {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): ResponseData {
        this['id'] = id;
        return this;
    }
}