

export class CheckpointExtraInfoResp {
    public name?: string;
    public description?: string;
    private 'retention_duration'?: number;
    public constructor() { 
    }
    public withName(name: string): CheckpointExtraInfoResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CheckpointExtraInfoResp {
        this['description'] = description;
        return this;
    }
    public withRetentionDuration(retentionDuration: number): CheckpointExtraInfoResp {
        this['retention_duration'] = retentionDuration;
        return this;
    }
    public set retentionDuration(retentionDuration: number  | undefined) {
        this['retention_duration'] = retentionDuration;
    }
    public get retentionDuration(): number | undefined {
        return this['retention_duration'];
    }
}