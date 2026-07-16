

export class StopHyperinstanceRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): StopHyperinstanceRequest {
        this['id'] = id;
        return this;
    }
}