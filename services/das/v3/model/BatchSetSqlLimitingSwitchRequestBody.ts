

export class BatchSetSqlLimitingSwitchRequestBody {
    private 'switch_on'?: boolean;
    private 'engine_type'?: string;
    private 'switch_type'?: string;
    private 'instance_ids'?: Array<string>;
    public constructor(switchOn?: boolean, engineType?: string, switchType?: string, instanceIds?: Array<string>) { 
        this['switch_on'] = switchOn;
        this['engine_type'] = engineType;
        this['switch_type'] = switchType;
        this['instance_ids'] = instanceIds;
    }
    public withSwitchOn(switchOn: boolean): BatchSetSqlLimitingSwitchRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withEngineType(engineType: string): BatchSetSqlLimitingSwitchRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withSwitchType(switchType: string): BatchSetSqlLimitingSwitchRequestBody {
        this['switch_type'] = switchType;
        return this;
    }
    public set switchType(switchType: string  | undefined) {
        this['switch_type'] = switchType;
    }
    public get switchType(): string | undefined {
        return this['switch_type'];
    }
    public withInstanceIds(instanceIds: Array<string>): BatchSetSqlLimitingSwitchRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
}