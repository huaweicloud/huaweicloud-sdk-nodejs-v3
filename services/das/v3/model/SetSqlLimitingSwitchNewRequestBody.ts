

export class SetSqlLimitingSwitchNewRequestBody {
    private 'engine_type'?: string;
    private 'switch_on'?: boolean;
    public constructor(engineType?: string, switchOn?: boolean) { 
        this['engine_type'] = engineType;
        this['switch_on'] = switchOn;
    }
    public withEngineType(engineType: string): SetSqlLimitingSwitchNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withSwitchOn(switchOn: boolean): SetSqlLimitingSwitchNewRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
}