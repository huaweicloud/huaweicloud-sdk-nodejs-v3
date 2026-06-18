import { WebHookBranchCfgDto } from './WebHookBranchCfgDto';
import { WebHookEventCfgDto } from './WebHookEventCfgDto';


export class ChangeRequestHookCfgDto {
    private 'event_cfgs'?: Array<WebHookEventCfgDto>;
    private 'project_cfgs'?: Array<WebHookBranchCfgDto>;
    private 'branch_cfgs'?: Array<WebHookBranchCfgDto>;
    public constructor() { 
    }
    public withEventCfgs(eventCfgs: Array<WebHookEventCfgDto>): ChangeRequestHookCfgDto {
        this['event_cfgs'] = eventCfgs;
        return this;
    }
    public set eventCfgs(eventCfgs: Array<WebHookEventCfgDto>  | undefined) {
        this['event_cfgs'] = eventCfgs;
    }
    public get eventCfgs(): Array<WebHookEventCfgDto> | undefined {
        return this['event_cfgs'];
    }
    public withProjectCfgs(projectCfgs: Array<WebHookBranchCfgDto>): ChangeRequestHookCfgDto {
        this['project_cfgs'] = projectCfgs;
        return this;
    }
    public set projectCfgs(projectCfgs: Array<WebHookBranchCfgDto>  | undefined) {
        this['project_cfgs'] = projectCfgs;
    }
    public get projectCfgs(): Array<WebHookBranchCfgDto> | undefined {
        return this['project_cfgs'];
    }
    public withBranchCfgs(branchCfgs: Array<WebHookBranchCfgDto>): ChangeRequestHookCfgDto {
        this['branch_cfgs'] = branchCfgs;
        return this;
    }
    public set branchCfgs(branchCfgs: Array<WebHookBranchCfgDto>  | undefined) {
        this['branch_cfgs'] = branchCfgs;
    }
    public get branchCfgs(): Array<WebHookBranchCfgDto> | undefined {
        return this['branch_cfgs'];
    }
}