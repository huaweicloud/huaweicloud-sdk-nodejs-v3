

export class ApiTemplateVariable {
    public id?: number;
    private 'user_name'?: string | undefined;
    private 'temp_name'?: string | undefined;
    private 'variable_index'?: number | undefined;
    private 'variable_type'?: string | undefined;
    private 'variable_length'?: number | undefined;
    private 'variable_desc'?: string | undefined;
    public constructor() { 
    }
    public withId(id: number): ApiTemplateVariable {
        this['id'] = id;
        return this;
    }
    public withUserName(userName: string): ApiTemplateVariable {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withTempName(tempName: string): ApiTemplateVariable {
        this['temp_name'] = tempName;
        return this;
    }
    public set tempName(tempName: string | undefined) {
        this['temp_name'] = tempName;
    }
    public get tempName() {
        return this['temp_name'];
    }
    public withVariableIndex(variableIndex: number): ApiTemplateVariable {
        this['variable_index'] = variableIndex;
        return this;
    }
    public set variableIndex(variableIndex: number | undefined) {
        this['variable_index'] = variableIndex;
    }
    public get variableIndex() {
        return this['variable_index'];
    }
    public withVariableType(variableType: string): ApiTemplateVariable {
        this['variable_type'] = variableType;
        return this;
    }
    public set variableType(variableType: string | undefined) {
        this['variable_type'] = variableType;
    }
    public get variableType() {
        return this['variable_type'];
    }
    public withVariableLength(variableLength: number): ApiTemplateVariable {
        this['variable_length'] = variableLength;
        return this;
    }
    public set variableLength(variableLength: number | undefined) {
        this['variable_length'] = variableLength;
    }
    public get variableLength() {
        return this['variable_length'];
    }
    public withVariableDesc(variableDesc: string): ApiTemplateVariable {
        this['variable_desc'] = variableDesc;
        return this;
    }
    public set variableDesc(variableDesc: string | undefined) {
        this['variable_desc'] = variableDesc;
    }
    public get variableDesc() {
        return this['variable_desc'];
    }
}