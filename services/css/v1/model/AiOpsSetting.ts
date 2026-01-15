

export class AiOpsSetting {
    private 'check_type'?: string;
    private 'check_items'?: Array<string>;
    public period?: string;
    public constructor(checkType?: string, period?: string) { 
        this['check_type'] = checkType;
        this['period'] = period;
    }
    public withCheckType(checkType: string): AiOpsSetting {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCheckItems(checkItems: Array<string>): AiOpsSetting {
        this['check_items'] = checkItems;
        return this;
    }
    public set checkItems(checkItems: Array<string>  | undefined) {
        this['check_items'] = checkItems;
    }
    public get checkItems(): Array<string> | undefined {
        return this['check_items'];
    }
    public withPeriod(period: string): AiOpsSetting {
        this['period'] = period;
        return this;
    }
}