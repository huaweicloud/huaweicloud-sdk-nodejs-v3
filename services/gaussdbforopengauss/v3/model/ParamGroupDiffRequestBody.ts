

export class ParamGroupDiffRequestBody {
    private 'source_id'?: string;
    private 'target_id'?: string;
    public constructor(sourceId?: string, targetId?: string) { 
        this['source_id'] = sourceId;
        this['target_id'] = targetId;
    }
    public withSourceId(sourceId: string): ParamGroupDiffRequestBody {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withTargetId(targetId: string): ParamGroupDiffRequestBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
}