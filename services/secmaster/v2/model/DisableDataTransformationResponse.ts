import { JobProcessStatus } from './JobProcessStatus';
import { JobStatus } from './JobStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisableDataTransformationResponse extends SdkResponse {
    private 'data_transformation_id'?: string;
    public status?: JobStatus;
    private 'process_status'?: JobProcessStatus;
    public constructor() { 
        super();
    }
    public withDataTransformationId(dataTransformationId: string): DisableDataTransformationResponse {
        this['data_transformation_id'] = dataTransformationId;
        return this;
    }
    public set dataTransformationId(dataTransformationId: string  | undefined) {
        this['data_transformation_id'] = dataTransformationId;
    }
    public get dataTransformationId(): string | undefined {
        return this['data_transformation_id'];
    }
    public withStatus(status: JobStatus): DisableDataTransformationResponse {
        this['status'] = status;
        return this;
    }
    public withProcessStatus(processStatus: JobProcessStatus): DisableDataTransformationResponse {
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