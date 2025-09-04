

export class ChangeFullDeadLockSwitchRequestBody {
    private 'switch_on'?: boolean;
    private 'engine_type'?: string;
    public constructor(switchOn?: boolean, engineType?: string) { 
        this['switch_on'] = switchOn;
        this['engine_type'] = engineType;
    }
    public withSwitchOn(switchOn: boolean): ChangeFullDeadLockSwitchRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withEngineType(engineType: string): ChangeFullDeadLockSwitchRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
}