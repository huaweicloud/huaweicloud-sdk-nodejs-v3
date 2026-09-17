

export class SetSlowLogSwitchNewRequestBody {
    private 'switch_on'?: boolean;
    private 'engine_type'?: string;
    private 'retention_hours'?: number;
    public constructor(switchOn?: boolean, engineType?: string, retentionHours?: number) { 
        this['switch_on'] = switchOn;
        this['engine_type'] = engineType;
        this['retention_hours'] = retentionHours;
    }
    public withSwitchOn(switchOn: boolean): SetSlowLogSwitchNewRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withEngineType(engineType: string): SetSlowLogSwitchNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withRetentionHours(retentionHours: number): SetSlowLogSwitchNewRequestBody {
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