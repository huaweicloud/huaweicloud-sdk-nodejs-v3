

export class ListGroupMergeRequestTemplatesRequest {
    private 'group_id'?: number;
    private 'template_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListGroupMergeRequestTemplatesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withTemplateName(templateName: string): ListGroupMergeRequestTemplatesRequest {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withOffset(offset: number): ListGroupMergeRequestTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupMergeRequestTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}