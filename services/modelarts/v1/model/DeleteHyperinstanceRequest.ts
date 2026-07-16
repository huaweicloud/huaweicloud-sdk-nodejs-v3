

export class DeleteHyperinstanceRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteHyperinstanceRequest {
        this['id'] = id;
        return this;
    }
}