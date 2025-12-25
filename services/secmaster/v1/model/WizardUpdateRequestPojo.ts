import { WizardUpdateRequestPojoBindingButton } from './WizardUpdateRequestPojoBindingButton';


export class WizardUpdateRequestPojo {
    private 'create_time'?: string;
    private 'creator_id'?: string;
    public description?: string;
    public id?: string;
    private 'wizard_json'?: string;
    public name?: string;
    private 'update_time'?: string;
    private 'layout_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'is_binding'?: boolean;
    private 'binding_button'?: Array<WizardUpdateRequestPojoBindingButton>;
    private 'boa_version'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): WizardUpdateRequestPojo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): WizardUpdateRequestPojo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withDescription(description: string): WizardUpdateRequestPojo {
        this['description'] = description;
        return this;
    }
    public withId(id: string): WizardUpdateRequestPojo {
        this['id'] = id;
        return this;
    }
    public withWizardJson(wizardJson: string): WizardUpdateRequestPojo {
        this['wizard_json'] = wizardJson;
        return this;
    }
    public set wizardJson(wizardJson: string  | undefined) {
        this['wizard_json'] = wizardJson;
    }
    public get wizardJson(): string | undefined {
        return this['wizard_json'];
    }
    public withName(name: string): WizardUpdateRequestPojo {
        this['name'] = name;
        return this;
    }
    public withUpdateTime(updateTime: string): WizardUpdateRequestPojo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withLayoutId(layoutId: string): WizardUpdateRequestPojo {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withProjectId(projectId: string): WizardUpdateRequestPojo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): WizardUpdateRequestPojo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withIsBinding(isBinding: boolean): WizardUpdateRequestPojo {
        this['is_binding'] = isBinding;
        return this;
    }
    public set isBinding(isBinding: boolean  | undefined) {
        this['is_binding'] = isBinding;
    }
    public get isBinding(): boolean | undefined {
        return this['is_binding'];
    }
    public withBindingButton(bindingButton: Array<WizardUpdateRequestPojoBindingButton>): WizardUpdateRequestPojo {
        this['binding_button'] = bindingButton;
        return this;
    }
    public set bindingButton(bindingButton: Array<WizardUpdateRequestPojoBindingButton>  | undefined) {
        this['binding_button'] = bindingButton;
    }
    public get bindingButton(): Array<WizardUpdateRequestPojoBindingButton> | undefined {
        return this['binding_button'];
    }
    public withBoaVersion(boaVersion: string): WizardUpdateRequestPojo {
        this['boa_version'] = boaVersion;
        return this;
    }
    public set boaVersion(boaVersion: string  | undefined) {
        this['boa_version'] = boaVersion;
    }
    public get boaVersion(): string | undefined {
        return this['boa_version'];
    }
}