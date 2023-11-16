

export class DeletePipelineGroupRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DeletePipelineGroupRequest {
        this['id'] = id;
        return this;
    }
}