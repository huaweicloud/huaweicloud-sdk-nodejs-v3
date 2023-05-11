

export class SmsTemplateVariableAttrReq {
    private 'variable_desc'?: string | undefined;
    private 'variable_index': number | undefined;
    private 'variable_type': string | undefined;
    public constructor(variableIndex?: any, variableType?: any) { 
        this['variable_index'] = variableIndex;
        this['variable_type'] = variableType;
    }
    public withVariableDesc(variableDesc: string): SmsTemplateVariableAttrReq {
        this['variable_desc'] = variableDesc;
        return this;
    }
    public set variableDesc(variableDesc: string | undefined) {
        this['variable_desc'] = variableDesc;
    }
    public get variableDesc() {
        return this['variable_desc'];
    }
    public withVariableIndex(variableIndex: number): SmsTemplateVariableAttrReq {
        this['variable_index'] = variableIndex;
        return this;
    }
    public set variableIndex(variableIndex: number | undefined) {
        this['variable_index'] = variableIndex;
    }
    public get variableIndex() {
        return this['variable_index'];
    }
    public withVariableType(variableType: string): SmsTemplateVariableAttrReq {
        this['variable_type'] = variableType;
        return this;
    }
    public set variableType(variableType: string | undefined) {
        this['variable_type'] = variableType;
    }
    public get variableType() {
        return this['variable_type'];
    }
}