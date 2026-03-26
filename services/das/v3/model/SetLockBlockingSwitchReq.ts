

export class SetLockBlockingSwitchReq {
    private 'instance_id'?: string;
    private 'switch_on'?: boolean;
    private 'engine_type'?: string;
    private 'retention_hours'?: number;
    public constructor(instanceId?: string, switchOn?: boolean, engineType?: string) { 
        this['instance_id'] = instanceId;
        this['switch_on'] = switchOn;
        this['engine_type'] = engineType;
    }
    public withInstanceId(instanceId: string): SetLockBlockingSwitchReq {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSwitchOn(switchOn: boolean): SetLockBlockingSwitchReq {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withEngineType(engineType: string): SetLockBlockingSwitchReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withRetentionHours(retentionHours: number): SetLockBlockingSwitchReq {
        this['retention_hours'] = retentionHours;
        return this;
    }
    public set retentionHours(retentionHours: number  | undefined) {
        this['retention_hours'] = retentionHours;
    }
    public get retentionHours(): number | undefined {
        return this['retention_hours'];
    }
}