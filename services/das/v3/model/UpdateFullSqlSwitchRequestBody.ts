

export class UpdateFullSqlSwitchRequestBody {
    private 'instance_id'?: string;
    private 'open_switch'?: number;
    private 'engine_type'?: string;
    private 'retention_hours'?: number;
    public constructor(instanceId?: string, openSwitch?: number, engineType?: string) { 
        this['instance_id'] = instanceId;
        this['open_switch'] = openSwitch;
        this['engine_type'] = engineType;
    }
    public withInstanceId(instanceId: string): UpdateFullSqlSwitchRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOpenSwitch(openSwitch: number): UpdateFullSqlSwitchRequestBody {
        this['open_switch'] = openSwitch;
        return this;
    }
    public set openSwitch(openSwitch: number  | undefined) {
        this['open_switch'] = openSwitch;
    }
    public get openSwitch(): number | undefined {
        return this['open_switch'];
    }
    public withEngineType(engineType: string): UpdateFullSqlSwitchRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withRetentionHours(retentionHours: number): UpdateFullSqlSwitchRequestBody {
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