

export class DeleteLaunchTemplatesRequest {
    private 'launch_template_id'?: string;
    public constructor(launchTemplateId?: string) { 
        this['launch_template_id'] = launchTemplateId;
    }
    public withLaunchTemplateId(launchTemplateId: string): DeleteLaunchTemplatesRequest {
        this['launch_template_id'] = launchTemplateId;
        return this;
    }
    public set launchTemplateId(launchTemplateId: string  | undefined) {
        this['launch_template_id'] = launchTemplateId;
    }
    public get launchTemplateId(): string | undefined {
        return this['launch_template_id'];
    }
}