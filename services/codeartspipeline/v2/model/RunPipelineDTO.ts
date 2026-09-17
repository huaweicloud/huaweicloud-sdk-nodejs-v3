import { RunPipelineDTOSources } from './RunPipelineDTOSources';
import { RunPipelineDTOVariables } from './RunPipelineDTOVariables';


export class RunPipelineDTO {
    public sources?: Array<RunPipelineDTOSources>;
    public description?: string;
    public variables?: Array<RunPipelineDTOVariables>;
    private 'choose_jobs'?: Array<string>;
    private 'choose_stages'?: Array<string>;
    private 'sub_hook'?: boolean;
    private 'execution_plan_id'?: string;
    public constructor() { 
    }
    public withSources(sources: Array<RunPipelineDTOSources>): RunPipelineDTO {
        this['sources'] = sources;
        return this;
    }
    public withDescription(description: string): RunPipelineDTO {
        this['description'] = description;
        return this;
    }
    public withVariables(variables: Array<RunPipelineDTOVariables>): RunPipelineDTO {
        this['variables'] = variables;
        return this;
    }
    public withChooseJobs(chooseJobs: Array<string>): RunPipelineDTO {
        this['choose_jobs'] = chooseJobs;
        return this;
    }
    public set chooseJobs(chooseJobs: Array<string>  | undefined) {
        this['choose_jobs'] = chooseJobs;
    }
    public get chooseJobs(): Array<string> | undefined {
        return this['choose_jobs'];
    }
    public withChooseStages(chooseStages: Array<string>): RunPipelineDTO {
        this['choose_stages'] = chooseStages;
        return this;
    }
    public set chooseStages(chooseStages: Array<string>  | undefined) {
        this['choose_stages'] = chooseStages;
    }
    public get chooseStages(): Array<string> | undefined {
        return this['choose_stages'];
    }
    public withSubHook(subHook: boolean): RunPipelineDTO {
        this['sub_hook'] = subHook;
        return this;
    }
    public set subHook(subHook: boolean  | undefined) {
        this['sub_hook'] = subHook;
    }
    public get subHook(): boolean | undefined {
        return this['sub_hook'];
    }
    public withExecutionPlanId(executionPlanId: string): RunPipelineDTO {
        this['execution_plan_id'] = executionPlanId;
        return this;
    }
    public set executionPlanId(executionPlanId: string  | undefined) {
        this['execution_plan_id'] = executionPlanId;
    }
    public get executionPlanId(): string | undefined {
        return this['execution_plan_id'];
    }
}