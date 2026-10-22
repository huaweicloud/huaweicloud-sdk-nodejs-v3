

export class DeleteHyperinstanceGroupRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeleteHyperinstanceGroupRequest {
        this['id'] = id;
        return this;
    }
}