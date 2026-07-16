

export class StopDevServerRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): StopDevServerRequest {
        this['id'] = id;
        return this;
    }
}