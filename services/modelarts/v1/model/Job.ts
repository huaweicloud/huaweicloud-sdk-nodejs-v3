import { JobAlgorithm } from './JobAlgorithm';
import { JobEndpointsReq } from './JobEndpointsReq';
import { JobMetadata } from './JobMetadata';
import { MasJobConfig } from './MasJobConfig';
import { Spec } from './Spec';
import { Task } from './Task';


export class Job {
    public kind?: string;
    public metadata?: JobMetadata;
    public algorithm?: JobAlgorithm;
    public tasks?: Array<Task>;
    public spec?: Spec;
    public endpoints?: JobEndpointsReq;
    private 'train_type'?: string;
    private 'ftjob_config'?: MasJobConfig;
    public constructor(kind?: string, metadata?: JobMetadata) { 
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withKind(kind: string): Job {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: JobMetadata): Job {
        this['metadata'] = metadata;
        return this;
    }
    public withAlgorithm(algorithm: JobAlgorithm): Job {
        this['algorithm'] = algorithm;
        return this;
    }
    public withTasks(tasks: Array<Task>): Job {
        this['tasks'] = tasks;
        return this;
    }
    public withSpec(spec: Spec): Job {
        this['spec'] = spec;
        return this;
    }
    public withEndpoints(endpoints: JobEndpointsReq): Job {
        this['endpoints'] = endpoints;
        return this;
    }
    public withTrainType(trainType: string): Job {
        this['train_type'] = trainType;
        return this;
    }
    public set trainType(trainType: string  | undefined) {
        this['train_type'] = trainType;
    }
    public get trainType(): string | undefined {
        return this['train_type'];
    }
    public withFtjobConfig(ftjobConfig: MasJobConfig): Job {
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