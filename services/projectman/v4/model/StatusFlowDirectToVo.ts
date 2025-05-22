

export class StatusFlowDirectToVo {
    private 'parent_name'?: string;
    private 'parent_type'?: string;
    private 'status_id'?: string;
    public name?: string;
    private 'status_type'?: string;
    public enabled?: boolean;
    private 'parent_id'?: string;
    public constructor() { 
    }
    public withParentName(parentName: string): StatusFlowDirectToVo {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
    public withParentType(parentType: string): StatusFlowDirectToVo {
        this['parent_type'] = parentType;
        return this;
    }
    public set parentType(parentType: string  | undefined) {
        this['parent_type'] = parentType;
    }
    public get parentType(): string | undefined {
        return this['parent_type'];
    }
    public withStatusId(statusId: string): StatusFlowDirectToVo {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
    public withName(name: string): StatusFlowDirectToVo {
        this['name'] = name;
        return this;
    }
    public withStatusType(statusType: string): StatusFlowDirectToVo {
        this['status_type'] = statusType;
        return this;
    }
    public set statusType(statusType: string  | undefined) {
        this['status_type'] = statusType;
    }
    public get statusType(): string | undefined {
        return this['status_type'];
    }
    public withEnabled(enabled: boolean): StatusFlowDirectToVo {
        this['enabled'] = enabled;
        return this;
    }
    public withParentId(parentId: string): StatusFlowDirectToVo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
}