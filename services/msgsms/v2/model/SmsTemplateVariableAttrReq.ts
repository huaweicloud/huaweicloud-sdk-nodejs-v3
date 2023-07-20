

export class SmsTemplateVariableAttrReq {
    private 'variable_desc'?: string;
    private 'variable_index'?: number;
    private 'variable_type'?: string;
    public constructor(variableIndex?: number, variableType?: string) { 
        this['variable_index'] = variableIndex;
        this['variable_type'] = variableType;
    }
    public withVariableDesc(variableDesc: string): SmsTemplateVariableAttrReq {
        this['variable_desc'] = variableDesc;
        return this;
    }
    public set variableDesc(variableDesc: string  | undefined) {
        this['variable_desc'] = variableDesc;
    }
    public get variableDesc(): string | undefined {
        return this['variable_desc'];
    }
    public withVariableIndex(variableIndex: number): SmsTemplateVariableAttrReq {
        this['variable_index'] = variableIndex;
        return this;
    }
    public set variableIndex(variableIndex: number  | undefined) {
        this['variable_index'] = variableIndex;
    }
    public get variableIndex(): number | undefined {
        return this['variable_index'];
    }
    public withVariableType(variableType: string): SmsTemplateVariableAttrReq {
        this['variable_type'] = variableType;
        return this;
    }
    public set variableType(variableType: string  | undefined) {
        this['variable_type'] = variableType;
    }
    public get variableType(): string | undefined {
        return this['variable_type'];
    }
}