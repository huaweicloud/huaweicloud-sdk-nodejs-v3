

export class RespImage {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RespImage {
        this['id'] = id;
        return this;
    }
}