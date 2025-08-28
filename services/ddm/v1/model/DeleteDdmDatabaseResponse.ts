
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDdmDatabaseResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'database_name'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): DeleteDdmDatabaseResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDatabaseName(databaseName: string): DeleteDdmDatabaseResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}