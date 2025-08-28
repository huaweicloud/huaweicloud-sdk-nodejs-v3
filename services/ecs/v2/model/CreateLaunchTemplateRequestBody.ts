import { LaunchTemplateOption } from './LaunchTemplateOption';


export class CreateLaunchTemplateRequestBody {
    private 'launch_template'?: LaunchTemplateOption;
    private 'dry_run'?: boolean;
    public constructor(launchTemplate?: LaunchTemplateOption) { 
        this['launch_template'] = launchTemplate;
    }
    public withLaunchTemplate(launchTemplate: LaunchTemplateOption): CreateLaunchTemplateRequestBody {
        this['launch_template'] = launchTemplate;
        return this;
    }
    public set launchTemplate(launchTemplate: LaunchTemplateOption  | undefined) {
        this['launch_template'] = launchTemplate;
    }
    public get launchTemplate(): LaunchTemplateOption | undefined {
        return this['launch_template'];
    }
    public withDryRun(dryRun: boolean): CreateLaunchTemplateRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
}