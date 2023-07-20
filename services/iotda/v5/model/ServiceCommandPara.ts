

export class ServiceCommandPara {
    private 'para_name'?: string;
    private 'data_type'?: string;
    public required?: boolean;
    private 'enum_list'?: Array<string>;
    public min?: string;
    public max?: string;
    private 'max_length'?: number;
    public step?: number;
    public unit?: string;
    public description?: string;
    public constructor(paraName?: string, dataType?: string) { 
        this['para_name'] = paraName;
        this['data_type'] = dataType;
    }
    public withParaName(paraName: string): ServiceCommandPara {
        this['para_name'] = paraName;
        return this;
    }
    public set paraName(paraName: string  | undefined) {
        this['para_name'] = paraName;
    }
    public get paraName(): string | undefined {
        return this['para_name'];
    }
    public withDataType(dataType: string): ServiceCommandPara {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withRequired(required: boolean): ServiceCommandPara {
        this['required'] = required;
        return this;
    }
    public withEnumList(enumList: Array<string>): ServiceCommandPara {
        this['enum_list'] = enumList;
        return this;
    }
    public set enumList(enumList: Array<string>  | undefined) {
        this['enum_list'] = enumList;
    }
    public get enumList(): Array<string> | undefined {
        return this['enum_list'];
    }
    public withMin(min: string): ServiceCommandPara {
        this['min'] = min;
        return this;
    }
    public withMax(max: string): ServiceCommandPara {
        this['max'] = max;
        return this;
    }
    public withMaxLength(maxLength: number): ServiceCommandPara {
        this['max_length'] = maxLength;
        return this;
    }
    public set maxLength(maxLength: number  | undefined) {
        this['max_length'] = maxLength;
    }
    public get maxLength(): number | undefined {
        return this['max_length'];
    }
    public withStep(step: number): ServiceCommandPara {
        this['step'] = step;
        return this;
    }
    public withUnit(unit: string): ServiceCommandPara {
        this['unit'] = unit;
        return this;
    }
    public withDescription(description: string): ServiceCommandPara {
        this['description'] = description;
        return this;
    }
}