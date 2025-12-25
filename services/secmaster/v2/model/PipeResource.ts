

export class PipeResource {
    private 'pipe_resource_type'?: object;
    public constructor(pipeResourceType?: object) { 
        this['pipe_resource_type'] = pipeResourceType;
    }
    public withPipeResourceType(pipeResourceType: object): PipeResource {
        this['pipe_resource_type'] = pipeResourceType;
        return this;
    }
    public set pipeResourceType(pipeResourceType: object  | undefined) {
        this['pipe_resource_type'] = pipeResourceType;
    }
    public get pipeResourceType(): object | undefined {
        return this['pipe_resource_type'];
    }
}