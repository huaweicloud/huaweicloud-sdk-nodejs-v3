import { JobProcessStatus } from './JobProcessStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDataTransformationResponse extends SdkResponse {
    private 'data_transformation_id'?: string;
    private 'delete_time'?: number;
    private 'process_status'?: JobProcessStatus;
    public constructor() { 
        super();
    }
    public withDataTransformationId(dataTransformationId: string): DeleteDataTransformationResponse {
        this['data_transformation_id'] = dataTransformationId;
        return this;
    }
    public set dataTransformationId(dataTransformationId: string  | undefined) {
        this['data_transformation_id'] = dataTransformationId;
    }
    public get dataTransformationId(): string | undefined {
        return this['data_transformation_id'];
    }
    public withDeleteTime(deleteTime: number): DeleteDataTransformationResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withProcessStatus(processStatus: JobProcessStatus): DeleteDataTransformationResponse {
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