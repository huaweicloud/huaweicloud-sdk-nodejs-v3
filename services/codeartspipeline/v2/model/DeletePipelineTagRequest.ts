

export class DeletePipelineTagRequest {
    public tagId?: string;
    public constructor(tagId?: string) { 
        this['tagId'] = tagId;
    }
    public withTagId(tagId: string): DeletePipelineTagRequest {
        this['tagId'] = tagId;
        return this;
    }
}