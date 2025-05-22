
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDataSourceResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'data_source_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateDataSourceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDataSourceId(dataSourceId: string): UpdateDataSourceResponse {
        this['data_source_id'] = dataSourceId;
        return this;
    }
    public set dataSourceId(dataSourceId: string  | undefined) {
        this['data_source_id'] = dataSourceId;
    }
    public get dataSourceId(): string | undefined {
        return this['data_source_id'];
    }
}