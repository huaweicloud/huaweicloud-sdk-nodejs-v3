

export class ShowDisasterRecoverySettingsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ShowDisasterRecoverySettingsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ShowDisasterRecoverySettingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDisasterRecoverySettingsRequest {
        this['limit'] = limit;
        return this;
    }
}