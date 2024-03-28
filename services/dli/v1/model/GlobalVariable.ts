

export class GlobalVariable {
    public id?: number;
    private 'var_name'?: string;
    private 'var_value'?: string;
    private 'project_id'?: string;
    private 'user_id'?: string;
    private 'is_sensitive'?: boolean;
    private 'user_name'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withId(id: number): GlobalVariable {
        this['id'] = id;
        return this;
    }
    public withVarName(varName: string): GlobalVariable {
        this['var_name'] = varName;
        return this;
    }
    public set varName(varName: string  | undefined) {
        this['var_name'] = varName;
    }
    public get varName(): string | undefined {
        return this['var_name'];
    }
    public withVarValue(varValue: string): GlobalVariable {
        this['var_value'] = varValue;
        return this;
    }
    public set varValue(varValue: string  | undefined) {
        this['var_value'] = varValue;
    }
    public get varValue(): string | undefined {
        return this['var_value'];
    }
    public withProjectId(projectId: string): GlobalVariable {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUserId(userId: string): GlobalVariable {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withIsSensitive(isSensitive: boolean): GlobalVariable {
        this['is_sensitive'] = isSensitive;
        return this;
    }
    public set isSensitive(isSensitive: boolean  | undefined) {
        this['is_sensitive'] = isSensitive;
    }
    public get isSensitive(): boolean | undefined {
        return this['is_sensitive'];
    }
    public withUserName(userName: string): GlobalVariable {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCreateTime(createTime: number): GlobalVariable {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): GlobalVariable {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}