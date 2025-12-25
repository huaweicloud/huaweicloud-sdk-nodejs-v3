import { WizardDetailInfoBindingButton } from './WizardDetailInfoBindingButton';


export class WizardCreateRequestPojo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'layout_id'?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'wizard_json'?: string;
    private 'is_binding'?: boolean;
    private 'binding_button'?: Array<WizardDetailInfoBindingButton>;
    private 'boa_version'?: string;
    public constructor() { 
    }
    public withId(id: string): WizardCreateRequestPojo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WizardCreateRequestPojo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WizardCreateRequestPojo {
        this['description'] = description;
        return this;
    }
    public withLayoutId(layoutId: string): WizardCreateRequestPojo {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withProjectId(projectId: string): WizardCreateRequestPojo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): WizardCreateRequestPojo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWizardJson(wizardJson: string): WizardCreateRequestPojo {
        this['wizard_json'] = wizardJson;
        return this;
    }
    public set wizardJson(wizardJson: string  | undefined) {
        this['wizard_json'] = wizardJson;
    }
    public get wizardJson(): string | undefined {
        return this['wizard_json'];
    }
    public withIsBinding(isBinding: boolean): WizardCreateRequestPojo {
        this['is_binding'] = isBinding;
        return this;
    }
    public set isBinding(isBinding: boolean  | undefined) {
        this['is_binding'] = isBinding;
    }
    public get isBinding(): boolean | undefined {
        return this['is_binding'];
    }
    public withBindingButton(bindingButton: Array<WizardDetailInfoBindingButton>): WizardCreateRequestPojo {
        this['binding_button'] = bindingButton;
        return this;
    }
    public set bindingButton(bindingButton: Array<WizardDetailInfoBindingButton>  | undefined) {
        this['binding_button'] = bindingButton;
    }
    public get bindingButton(): Array<WizardDetailInfoBindingButton> | undefined {
        return this['binding_button'];
    }
    public withBoaVersion(boaVersion: string): WizardCreateRequestPojo {
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