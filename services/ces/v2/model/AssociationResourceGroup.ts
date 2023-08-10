import { TemplateApplicationType } from './TemplateApplicationType';


export class AssociationResourceGroup {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'template_application_type'?: TemplateApplicationType;
    public constructor(groupId?: string, groupName?: string, templateApplicationType?: TemplateApplicationType) { 
        this['group_id'] = groupId;
        this['group_name'] = groupName;
        this['template_application_type'] = templateApplicationType;
    }
    public withGroupId(groupId: string): AssociationResourceGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): AssociationResourceGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withTemplateApplicationType(templateApplicationType: TemplateApplicationType): AssociationResourceGroup {
        this['template_application_type'] = templateApplicationType;
        return this;
    }
    public set templateApplicationType(templateApplicationType: TemplateApplicationType  | undefined) {
        this['template_application_type'] = templateApplicationType;
    }
    public get templateApplicationType(): TemplateApplicationType | undefined {
        return this['template_application_type'];
    }
}