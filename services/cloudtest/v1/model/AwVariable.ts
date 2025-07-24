

export class AwVariable {
    private 'by_order'?: number;
    public currentPermission?: string;
    public description?: string;
    public dynamicParam?: string;
    public dynamicParamFlag?: boolean;
    public functionParams?: string;
    private 'function_arg'?: string;
    private 'function_type'?: AwVariableFunctionTypeEnum | string;
    public isSensitiveInfo?: boolean;
    public isSensitiveModified?: boolean;
    private 'is_out_put'?: boolean;
    public name?: string;
    private 'node_id'?: string;
    private 'node_type'?: number;
    public oldName?: string;
    private 'parent_node_id'?: string;
    public property?: string;
    public regex?: string;
    public sensitiveInfoSetterTime?: string;
    public sensitiveInfoSetterUser?: string;
    public type?: string;
    public variableType?: number;
    public constructor() { 
    }
    public withByOrder(byOrder: number): AwVariable {
        this['by_order'] = byOrder;
        return this;
    }
    public set byOrder(byOrder: number  | undefined) {
        this['by_order'] = byOrder;
    }
    public get byOrder(): number | undefined {
        return this['by_order'];
    }
    public withCurrentPermission(currentPermission: string): AwVariable {
        this['currentPermission'] = currentPermission;
        return this;
    }
    public withDescription(description: string): AwVariable {
        this['description'] = description;
        return this;
    }
    public withDynamicParam(dynamicParam: string): AwVariable {
        this['dynamicParam'] = dynamicParam;
        return this;
    }
    public withDynamicParamFlag(dynamicParamFlag: boolean): AwVariable {
        this['dynamicParamFlag'] = dynamicParamFlag;
        return this;
    }
    public withFunctionParams(functionParams: string): AwVariable {
        this['functionParams'] = functionParams;
        return this;
    }
    public withFunctionArg(functionArg: string): AwVariable {
        this['function_arg'] = functionArg;
        return this;
    }
    public set functionArg(functionArg: string  | undefined) {
        this['function_arg'] = functionArg;
    }
    public get functionArg(): string | undefined {
        return this['function_arg'];
    }
    public withFunctionType(functionType: AwVariableFunctionTypeEnum | string): AwVariable {
        this['function_type'] = functionType;
        return this;
    }
    public set functionType(functionType: AwVariableFunctionTypeEnum | string  | undefined) {
        this['function_type'] = functionType;
    }
    public get functionType(): AwVariableFunctionTypeEnum | string | undefined {
        return this['function_type'];
    }
    public withIsSensitiveInfo(isSensitiveInfo: boolean): AwVariable {
        this['isSensitiveInfo'] = isSensitiveInfo;
        return this;
    }
    public withIsSensitiveModified(isSensitiveModified: boolean): AwVariable {
        this['isSensitiveModified'] = isSensitiveModified;
        return this;
    }
    public withIsOutPut(isOutPut: boolean): AwVariable {
        this['is_out_put'] = isOutPut;
        return this;
    }
    public set isOutPut(isOutPut: boolean  | undefined) {
        this['is_out_put'] = isOutPut;
    }
    public get isOutPut(): boolean | undefined {
        return this['is_out_put'];
    }
    public withName(name: string): AwVariable {
        this['name'] = name;
        return this;
    }
    public withNodeId(nodeId: string): AwVariable {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeType(nodeType: number): AwVariable {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: number  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): number | undefined {
        return this['node_type'];
    }
    public withOldName(oldName: string): AwVariable {
        this['oldName'] = oldName;
        return this;
    }
    public withParentNodeId(parentNodeId: string): AwVariable {
        this['parent_node_id'] = parentNodeId;
        return this;
    }
    public set parentNodeId(parentNodeId: string  | undefined) {
        this['parent_node_id'] = parentNodeId;
    }
    public get parentNodeId(): string | undefined {
        return this['parent_node_id'];
    }
    public withProperty(property: string): AwVariable {
        this['property'] = property;
        return this;
    }
    public withRegex(regex: string): AwVariable {
        this['regex'] = regex;
        return this;
    }
    public withSensitiveInfoSetterTime(sensitiveInfoSetterTime: string): AwVariable {
        this['sensitiveInfoSetterTime'] = sensitiveInfoSetterTime;
        return this;
    }
    public withSensitiveInfoSetterUser(sensitiveInfoSetterUser: string): AwVariable {
        this['sensitiveInfoSetterUser'] = sensitiveInfoSetterUser;
        return this;
    }
    public withType(type: string): AwVariable {
        this['type'] = type;
        return this;
    }
    public withVariableType(variableType: number): AwVariable {
        this['variableType'] = variableType;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AwVariableFunctionTypeEnum {
    REGEX = 'REGEX',
    SUBSTRING = 'SUBSTRING'
}
