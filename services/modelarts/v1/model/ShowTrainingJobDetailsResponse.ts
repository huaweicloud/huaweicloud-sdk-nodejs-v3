import { JobAlgorithmResponse } from './JobAlgorithmResponse';
import { JobEndpointsResp } from './JobEndpointsResp';
import { JobMetadataResponse } from './JobMetadataResponse';
import { MasJobConfig } from './MasJobConfig';
import { SpecResponse } from './SpecResponse';
import { Status } from './Status';
import { TaskResponse } from './TaskResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingJobDetailsResponse extends SdkResponse {
    public kind?: string;
    public metadata?: JobMetadataResponse;
    public status?: Status;
    public algorithm?: JobAlgorithmResponse;
    public tasks?: Array<TaskResponse>;
    public spec?: SpecResponse;
    public endpoints?: JobEndpointsResp;
    private 'ftjob_config'?: MasJobConfig;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowTrainingJobDetailsResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: JobMetadataResponse): ShowTrainingJobDetailsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withStatus(status: Status): ShowTrainingJobDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withAlgorithm(algorithm: JobAlgorithmResponse): ShowTrainingJobDetailsResponse {
        this['algorithm'] = algorithm;
        return this;
    }
    public withTasks(tasks: Array<TaskResponse>): ShowTrainingJobDetailsResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withSpec(spec: SpecResponse): ShowTrainingJobDetailsResponse {
        this['spec'] = spec;
        return this;
    }
    public withEndpoints(endpoints: JobEndpointsResp): ShowTrainingJobDetailsResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withFtjobConfig(ftjobConfig: MasJobConfig): ShowTrainingJobDetailsResponse {
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