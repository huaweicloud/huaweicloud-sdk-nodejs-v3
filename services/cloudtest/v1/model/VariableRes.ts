

export class VariableRes {
    private 'by_order'?: number;
    public category?: string;
    private 'create_time'?: string;
    private 'create_time_stamp'?: number;
    private 'create_time_string'?: string;
    private 'create_user'?: string;
    public currentPermission?: string;
    public description?: string;
    public dynamicParamFlag?: boolean;
    public functionParams?: string;
    public groupId?: string;
    public id?: string;
    public isSensitiveInfo?: boolean;
    public isSensitiveModified?: boolean;
    public locked?: number;
    public name?: string;
    private 'node_id'?: string;
    private 'node_type'?: number;
    private 'parent_id'?: string;
    private 'parent_node_id'?: string;
    public property?: string;
    public region?: string;
    public sensitiveInfoSetterTime?: string;
    public sensitiveInfoSetterUser?: string;
    public sourceId?: string;
    public type?: string;
    private 'update_time'?: string;
    private 'update_time_stamp'?: number;
    private 'update_time_string'?: string;
    private 'update_user'?: string;
    public variableType?: number;
    public constructor() { 
    }
    public withByOrder(byOrder: number): VariableRes {
        this['by_order'] = byOrder;
        return this;
    }
    public set byOrder(byOrder: number  | undefined) {
        this['by_order'] = byOrder;
    }
    public get byOrder(): number | undefined {
        return this['by_order'];
    }
    public withCategory(category: string): VariableRes {
        this['category'] = category;
        return this;
    }
    public withCreateTime(createTime: string): VariableRes {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreateTimeStamp(createTimeStamp: number): VariableRes {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: number  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): number | undefined {
        return this['create_time_stamp'];
    }
    public withCreateTimeString(createTimeString: string): VariableRes {
        this['create_time_string'] = createTimeString;
        return this;
    }
    public set createTimeString(createTimeString: string  | undefined) {
        this['create_time_string'] = createTimeString;
    }
    public get createTimeString(): string | undefined {
        return this['create_time_string'];
    }
    public withCreateUser(createUser: string): VariableRes {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCurrentPermission(currentPermission: string): VariableRes {
        this['currentPermission'] = currentPermission;
        return this;
    }
    public withDescription(description: string): VariableRes {
        this['description'] = description;
        return this;
    }
    public withDynamicParamFlag(dynamicParamFlag: boolean): VariableRes {
        this['dynamicParamFlag'] = dynamicParamFlag;
        return this;
    }
    public withFunctionParams(functionParams: string): VariableRes {
        this['functionParams'] = functionParams;
        return this;
    }
    public withGroupId(groupId: string): VariableRes {
        this['groupId'] = groupId;
        return this;
    }
    public withId(id: string): VariableRes {
        this['id'] = id;
        return this;
    }
    public withIsSensitiveInfo(isSensitiveInfo: boolean): VariableRes {
        this['isSensitiveInfo'] = isSensitiveInfo;
        return this;
    }
    public withIsSensitiveModified(isSensitiveModified: boolean): VariableRes {
        this['isSensitiveModified'] = isSensitiveModified;
        return this;
    }
    public withLocked(locked: number): VariableRes {
        this['locked'] = locked;
        return this;
    }
    public withName(name: string): VariableRes {
        this['name'] = name;
        return this;
    }
    public withNodeId(nodeId: string): VariableRes {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeType(nodeType: number): VariableRes {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: number  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): number | undefined {
        return this['node_type'];
    }
    public withParentId(parentId: string): VariableRes {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withParentNodeId(parentNodeId: string): VariableRes {
        this['parent_node_id'] = parentNodeId;
        return this;
    }
    public set parentNodeId(parentNodeId: string  | undefined) {
        this['parent_node_id'] = parentNodeId;
    }
    public get parentNodeId(): string | undefined {
        return this['parent_node_id'];
    }
    public withProperty(property: string): VariableRes {
        this['property'] = property;
        return this;
    }
    public withRegion(region: string): VariableRes {
        this['region'] = region;
        return this;
    }
    public withSensitiveInfoSetterTime(sensitiveInfoSetterTime: string): VariableRes {
        this['sensitiveInfoSetterTime'] = sensitiveInfoSetterTime;
        return this;
    }
    public withSensitiveInfoSetterUser(sensitiveInfoSetterUser: string): VariableRes {
        this['sensitiveInfoSetterUser'] = sensitiveInfoSetterUser;
        return this;
    }
    public withSourceId(sourceId: string): VariableRes {
        this['sourceId'] = sourceId;
        return this;
    }
    public withType(type: string): VariableRes {
        this['type'] = type;
        return this;
    }
    public withUpdateTime(updateTime: string): VariableRes {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUpdateTimeStamp(updateTimeStamp: number): VariableRes {
        this['update_time_stamp'] = updateTimeStamp;
        return this;
    }
    public set updateTimeStamp(updateTimeStamp: number  | undefined) {
        this['update_time_stamp'] = updateTimeStamp;
    }
    public get updateTimeStamp(): number | undefined {
        return this['update_time_stamp'];
    }
    public withUpdateTimeString(updateTimeString: string): VariableRes {
        this['update_time_string'] = updateTimeString;
        return this;
    }
    public set updateTimeString(updateTimeString: string  | undefined) {
        this['update_time_string'] = updateTimeString;
    }
    public get updateTimeString(): string | undefined {
        return this['update_time_string'];
    }
    public withUpdateUser(updateUser: string): VariableRes {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withVariableType(variableType: number): VariableRes {
        this['variableType'] = variableType;
        return this;
    }
}