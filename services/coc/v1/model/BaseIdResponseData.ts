

export class BaseIdResponseData {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): BaseIdResponseData {
        this['id'] = id;
        return this;
    }
}