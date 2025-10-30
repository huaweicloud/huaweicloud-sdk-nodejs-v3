

export class EventForensicInfoRegistryForensic {
    private 'reg_key'?: string;
    private 'reg_value'?: string;
    private 'reg_new_key'?: string;
    private 'reg_op_type'?: string;
    public constructor() { 
    }
    public withRegKey(regKey: string): EventForensicInfoRegistryForensic {
        this['reg_key'] = regKey;
        return this;
    }
    public set regKey(regKey: string  | undefined) {
        this['reg_key'] = regKey;
    }
    public get regKey(): string | undefined {
        return this['reg_key'];
    }
    public withRegValue(regValue: string): EventForensicInfoRegistryForensic {
        this['reg_value'] = regValue;
        return this;
    }
    public set regValue(regValue: string  | undefined) {
        this['reg_value'] = regValue;
    }
    public get regValue(): string | undefined {
        return this['reg_value'];
    }
    public withRegNewKey(regNewKey: string): EventForensicInfoRegistryForensic {
        this['reg_new_key'] = regNewKey;
        return this;
    }
    public set regNewKey(regNewKey: string  | undefined) {
        this['reg_new_key'] = regNewKey;
    }
    public get regNewKey(): string | undefined {
        return this['reg_new_key'];
    }
    public withRegOpType(regOpType: string): EventForensicInfoRegistryForensic {
        this['reg_op_type'] = regOpType;
        return this;
    }
    public set regOpType(regOpType: string  | undefined) {
        this['reg_op_type'] = regOpType;
    }
    public get regOpType(): string | undefined {
        return this['reg_op_type'];
    }
}