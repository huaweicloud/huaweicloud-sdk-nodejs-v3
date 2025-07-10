import { JobPipelineInfoParamsItems } from './JobPipelineInfoParamsItems';


export class JobPipelineInfoParameters {
    public region?: string;
    public language?: string;
    public name?: string;
    public params?: Array<JobPipelineInfoParamsItems>;
    public constructor() { 
    }
    public withRegion(region: string): JobPipelineInfoParameters {
        this['region'] = region;
        return this;
    }
    public withLanguage(language: string): JobPipelineInfoParameters {
        this['language'] = language;
        return this;
    }
    public withName(name: string): JobPipelineInfoParameters {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<JobPipelineInfoParamsItems>): JobPipelineInfoParameters {
        this['params'] = params;
        return this;
    }
}