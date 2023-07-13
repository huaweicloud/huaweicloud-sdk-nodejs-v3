

export class ListTemplateGroupRequest {
    private 'group_id'?: Array<string> | undefined;
    private 'group_name'?: Array<string> | undefined;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withGroupId(groupId: Array<string>): ListTemplateGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: Array<string> | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withGroupName(groupName: Array<string>): ListTemplateGroupRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: Array<string> | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withPage(page: number): ListTemplateGroupRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListTemplateGroupRequest {
        this['size'] = size;
        return this;
    }
}