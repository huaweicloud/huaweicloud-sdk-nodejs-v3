
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateShortJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'data_uploading_url'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateShortJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDataUploadingUrl(dataUploadingUrl: string): CreateShortJobResponse {
        this['data_uploading_url'] = dataUploadingUrl;
        return this;
    }
    public set dataUploadingUrl(dataUploadingUrl: string  | undefined) {
        this['data_uploading_url'] = dataUploadingUrl;
    }
    public get dataUploadingUrl(): string | undefined {
        return this['data_uploading_url'];
    }
}