

export class CheckPoint {
    public comparison?: string;
    public description?: string;
    private 'function_arg'?: string;
    private 'function_type'?: CheckPointFunctionTypeEnum | string;
    public property?: string;
    public value?: string;
    public constructor() { 
    }
    public withComparison(comparison: string): CheckPoint {
        this['comparison'] = comparison;
        return this;
    }
    public withDescription(description: string): CheckPoint {
        this['description'] = description;
        return this;
    }
    public withFunctionArg(functionArg: string): CheckPoint {
        this['function_arg'] = functionArg;
        return this;
    }
    public set functionArg(functionArg: string  | undefined) {
        this['function_arg'] = functionArg;
    }
    public get functionArg(): string | undefined {
        return this['function_arg'];
    }
    public withFunctionType(functionType: CheckPointFunctionTypeEnum | string): CheckPoint {
        this['function_type'] = functionType;
        return this;
    }
    public set functionType(functionType: CheckPointFunctionTypeEnum | string  | undefined) {
        this['function_type'] = functionType;
    }
    public get functionType(): CheckPointFunctionTypeEnum | string | undefined {
        return this['function_type'];
    }
    public withProperty(property: string): CheckPoint {
        this['property'] = property;
        return this;
    }
    public withValue(value: string): CheckPoint {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckPointFunctionTypeEnum {
    REGEX = 'REGEX',
    SUBSTRING = 'SUBSTRING'
}
