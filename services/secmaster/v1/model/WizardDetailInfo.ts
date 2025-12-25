import { WizardDetailInfoBindingButton } from './WizardDetailInfoBindingButton';


export class WizardDetailInfo {
    private 'create_time'?: string;
    private 'creator_id'?: string;
    public description?: string;
    private 'en_description'?: string;
    public id?: string;
    private 'wizard_json'?: string;
    public name?: string;
    private 'en_name'?: string;
    private 'update_time'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'is_binding'?: boolean;
    private 'binding_button'?: Array<WizardDetailInfoBindingButton>;
    private 'is_built_in'?: boolean;
    private 'boa_version'?: string;
    public version?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): WizardDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): WizardDetailInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withDescription(description: string): WizardDetailInfo {
        this['description'] = description;
        return this;
    }
    public withEnDescription(enDescription: string): WizardDetailInfo {
        this['en_description'] = enDescription;
        return this;
    }
    public set enDescription(enDescription: string  | undefined) {
        this['en_description'] = enDescription;
    }
    public get enDescription(): string | undefined {
        return this['en_description'];
    }
    public withId(id: string): WizardDetailInfo {
        this['id'] = id;
        return this;
    }
    public withWizardJson(wizardJson: string): WizardDetailInfo {
        this['wizard_json'] = wizardJson;
        return this;
    }
    public set wizardJson(wizardJson: string  | undefined) {
        this['wizard_json'] = wizardJson;
    }
    public get wizardJson(): string | undefined {
        return this['wizard_json'];
    }
    public withName(name: string): WizardDetailInfo {
        this['name'] = name;
        return this;
    }
    public withEnName(enName: string): WizardDetailInfo {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withUpdateTime(updateTime: string): WizardDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withProjectId(projectId: string): WizardDetailInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): WizardDetailInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withIsBinding(isBinding: boolean): WizardDetailInfo {
        this['is_binding'] = isBinding;
        return this;
    }
    public set isBinding(isBinding: boolean  | undefined) {
        this['is_binding'] = isBinding;
    }
    public get isBinding(): boolean | undefined {
        return this['is_binding'];
    }
    public withBindingButton(bindingButton: Array<WizardDetailInfoBindingButton>): WizardDetailInfo {
        this['binding_button'] = bindingButton;
        return this;
    }
    public set bindingButton(bindingButton: Array<WizardDetailInfoBindingButton>  | undefined) {
        this['binding_button'] = bindingButton;
    }
    public get bindingButton(): Array<WizardDetailInfoBindingButton> | undefined {
        return this['binding_button'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): WizardDetailInfo {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withBoaVersion(boaVersion: string): WizardDetailInfo {
        this['boa_version'] = boaVersion;
        return this;
    }
    public set boaVersion(boaVersion: string  | undefined) {
        this['boa_version'] = boaVersion;
    }
    public get boaVersion(): string | undefined {
        return this['boa_version'];
    }
    public withVersion(version: string): WizardDetailInfo {
        this['version'] = version;
        return this;
    }
}