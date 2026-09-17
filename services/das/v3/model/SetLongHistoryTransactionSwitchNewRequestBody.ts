

export class SetLongHistoryTransactionSwitchNewRequestBody {
    private 'switch_on'?: boolean;
    private 'engine_type'?: string;
    public threshold?: number;
    public constructor(switchOn?: boolean, engineType?: string, threshold?: number) { 
        this['switch_on'] = switchOn;
        this['engine_type'] = engineType;
        this['threshold'] = threshold;
    }
    public withSwitchOn(switchOn: boolean): SetLongHistoryTransactionSwitchNewRequestBody {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: boolean  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): boolean | undefined {
        return this['switch_on'];
    }
    public withEngineType(engineType: string): SetLongHistoryTransactionSwitchNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withThreshold(threshold: number): SetLongHistoryTransactionSwitchNewRequestBody {
        this['threshold'] = threshold;
        return this;
    }
}