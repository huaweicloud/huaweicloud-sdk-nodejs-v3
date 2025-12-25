import { JobProcessStatus } from './JobProcessStatus';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableDataTransformationResponse extends SdkResponse {
    private 'data_transformation_id'?: string;
    public status?: JobStatus;
    private 'process_status'?: JobProcessStatus;
    public constructor() { 
        super();
    }
    public withDataTransformationId(dataTransformationId: string): EnableDataTransformationResponse {
        this['data_transformation_id'] = dataTransformationId;
        return this;
    }
    public set dataTransformationId(dataTransformationId: string  | undefined) {
        this['data_transformation_id'] = dataTransformationId;
    }
    public get dataTransformationId(): string | undefined {
        return this['data_transformation_id'];
    }
    public withStatus(status: JobStatus): EnableDataTransformationResponse {
        this['status'] = status;
        return this;
    }
    public withProcessStatus(processStatus: JobProcessStatus): EnableDataTransformationResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: JobProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): JobProcessStatus | undefined {
        return this['process_status'];
    }
}