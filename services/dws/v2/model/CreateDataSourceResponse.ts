
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDataSourceResponse extends SdkResponse {
    public id?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateDataSourceResponse {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: string): CreateDataSourceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}