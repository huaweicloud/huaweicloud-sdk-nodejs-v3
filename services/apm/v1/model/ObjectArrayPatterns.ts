

export class ObjectArrayPatterns {
    public key?: string;
    public type?: string;
    private 'max_length'?: number;
    private 'max_value'?: number;
    private 'min_value'?: number;
    public nullable?: boolean;
    public hint?: string;
    public constructor() { 
    }
    public withKey(key: string): ObjectArrayPatterns {
        this['key'] = key;
        return this;
    }
    public withType(type: string): ObjectArrayPatterns {
        this['type'] = type;
        return this;
    }
    public withMaxLength(maxLength: number): ObjectArrayPatterns {
        this['max_length'] = maxLength;
        return this;
    }
    public set maxLength(maxLength: number  | undefined) {
        this['max_length'] = maxLength;
    }
    public get maxLength(): number | undefined {
        return this['max_length'];
    }
    public withMaxValue(maxValue: number): ObjectArrayPatterns {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: number  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): number | undefined {
        return this['max_value'];
    }
    public withMinValue(minValue: number): ObjectArrayPatterns {
        this['min_value'] = minValue;
        return this;
    }
    public set minValue(minValue: number  | undefined) {
        this['min_value'] = minValue;
    }
    public get minValue(): number | undefined {
        return this['min_value'];
    }
    public withNullable(nullable: boolean): ObjectArrayPatterns {
        this['nullable'] = nullable;
        return this;
    }
    public withHint(hint: string): ObjectArrayPatterns {
        this['hint'] = hint;
        return this;
    }
}