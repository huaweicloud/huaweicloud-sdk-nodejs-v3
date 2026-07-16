import { JobAlgorithmResponse } from './JobAlgorithmResponse';
import { JobEndpointsResp } from './JobEndpointsResp';
import { JobMetadataResponse } from './JobMetadataResponse';
import { MasJobConfig } from './MasJobConfig';
import { SpecResponse } from './SpecResponse';
import { Status } from './Status';
import { TaskResponse } from './TaskResponse';


export class JobResponse {
    public kind?: string;
    public metadata?: JobMetadataResponse;
    public status?: Status;
    public algorithm?: JobAlgorithmResponse;
    public tasks?: Array<TaskResponse>;
    public spec?: SpecResponse;
    public endpoints?: JobEndpointsResp;
    private 'ftjob_config'?: MasJobConfig;
    public constructor(kind?: string, metadata?: JobMetadataResponse) { 
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withKind(kind: string): JobResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: JobMetadataResponse): JobResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withStatus(status: Status): JobResponse {
        this['status'] = status;
        return this;
    }
    public withAlgorithm(algorithm: JobAlgorithmResponse): JobResponse {
        this['algorithm'] = algorithm;
        return this;
    }
    public withTasks(tasks: Array<TaskResponse>): JobResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withSpec(spec: SpecResponse): JobResponse {
        this['spec'] = spec;
        return this;
    }
    public withEndpoints(endpoints: JobEndpointsResp): JobResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withFtjobConfig(ftjobConfig: MasJobConfig): JobResponse {
        this['ftjob_config'] = ftjobConfig;
        return this;
    }
    public set ftjobConfig(ftjobConfig: MasJobConfig  | undefined) {
        this['ftjob_config'] = ftjobConfig;
    }
    public get ftjobConfig(): MasJobConfig | undefined {
        return this['ftjob_config'];
    }
}