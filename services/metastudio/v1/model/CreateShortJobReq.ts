import { ShortJobType } from './ShortJobType';


export class CreateShortJobReq {
    private 'job_type'?: ShortJobType;
    public language?: string;
    public constructor(jobType?: ShortJobType) { 
        this['job_type'] = jobType;
    }
    public withJobType(jobType: ShortJobType): CreateShortJobReq {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ShortJobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ShortJobType | undefined {
        return this['job_type'];
    }
    public withLanguage(language: string): CreateShortJobReq {
        this['language'] = language;
        return this;
    }
}