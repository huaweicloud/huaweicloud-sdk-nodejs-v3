

export class ListPipelineTagRequest {
    private 'proj_id'?: string;
    public constructor() { 
    }
    public withProjId(projId: string): ListPipelineTagRequest {
        this['proj_id'] = projId;
        return this;
    }
    public set projId(projId: string  | undefined) {
        this['proj_id'] = projId;
    }
    public get projId(): string | undefined {
        return this['proj_id'];
    }
}