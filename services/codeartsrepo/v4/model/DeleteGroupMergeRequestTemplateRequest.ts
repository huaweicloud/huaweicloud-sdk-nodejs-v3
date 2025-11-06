

export class DeleteGroupMergeRequestTemplateRequest {
    private 'group_id'?: number;
    private 'template_id'?: number;
    public constructor(groupId?: number, templateId?: number) { 
        this['group_id'] = groupId;
        this['template_id'] = templateId;
    }
    public withGroupId(groupId: number): DeleteGroupMergeRequestTemplateRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withTemplateId(templateId: number): DeleteGroupMergeRequestTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
}