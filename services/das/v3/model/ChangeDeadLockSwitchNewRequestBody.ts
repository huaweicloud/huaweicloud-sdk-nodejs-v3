

export class ChangeDeadLockSwitchNewRequestBody {
    private 'engine_type'?: string;
    private 'switch_on'?: boolean;
    private 'instance_id'?: string;
    private 'retention_hours'?: number;
    public constructor(engineType?: string, switchOn?: boolean, instanceId?: string, retentionHours?: number) { 
        this['engine_type'] = engineType;
        this['switch_on'] = switchOn;
        this['instance_id'] = instanceId;
        this['retention_hours'] = retentionHours;
    }
    public withEngineType(engineType: string): ChangeDeadLockSwitchNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withSwitchOn(switchOn: boolean): ChangeDeadLockSwitchNewRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withInstanceId(instanceId: string): ChangeDeadLockSwitchNewRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRetentionHours(retentionHours: number): ChangeDeadLockSwitchNewRequestBody {
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