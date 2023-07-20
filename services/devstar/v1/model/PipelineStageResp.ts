

export class PipelineStageResp {
    private 'display_name'?: string;
    public status?: string;
    public result?: string;
    public constructor() { 
    }
    public withDisplayName(displayName: string): PipelineStageResp {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withStatus(status: string): PipelineStageResp {
        this['status'] = status;
        return this;
    }
    public withResult(result: string): PipelineStageResp {
        this['result'] = result;
        return this;
    }
}