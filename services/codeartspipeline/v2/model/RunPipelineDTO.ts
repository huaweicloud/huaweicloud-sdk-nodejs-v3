import { RunPipelineDTOSources } from './RunPipelineDTOSources';
import { RunPipelineDTOVariables } from './RunPipelineDTOVariables';


export class RunPipelineDTO {
    public sources?: Array<RunPipelineDTOSources>;
    public description?: string;
    public variables?: Array<RunPipelineDTOVariables>;
    private 'choose_jobs'?: Array<string>;
    private 'choose_stages'?: Array<string>;
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
}