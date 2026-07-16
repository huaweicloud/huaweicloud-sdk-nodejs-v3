

export class StartHyperinstanceRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): StartHyperinstanceRequest {
        this['id'] = id;
        return this;
    }
}