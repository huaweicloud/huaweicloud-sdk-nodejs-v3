import { ParameterItem } from './ParameterItem';
import { Scm } from './Scm';


export class RunJobRequestBody {
    private 'job_id'?: string;
    public parameter?: Array<ParameterItem>;
    public scm?: Scm;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): RunJobRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withParameter(parameter: Array<ParameterItem>): RunJobRequestBody {
        this['parameter'] = parameter;
        return this;
    }
    public withScm(scm: Scm): RunJobRequestBody {
        this['scm'] = scm;
        return this;
    }
}