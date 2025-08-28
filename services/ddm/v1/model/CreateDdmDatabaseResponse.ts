
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDdmDatabaseResponse extends SdkResponse {
    public name?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateDdmDatabaseResponse {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: string): CreateDdmDatabaseResponse {
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