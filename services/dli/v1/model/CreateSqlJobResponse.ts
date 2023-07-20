
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSqlJobResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_id'?: string;
    private 'job_type'?: CreateSqlJobResponseJobTypeEnum | string;
    public schema?: Array<object>;
    public rows?: Array<Array<string>>;
    private 'job_mode'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateSqlJobResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateSqlJobResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): CreateSqlJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: CreateSqlJobResponseJobTypeEnum | string): CreateSqlJobResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: CreateSqlJobResponseJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): CreateSqlJobResponseJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withSchema(schema: Array<object>): CreateSqlJobResponse {
        this['schema'] = schema;
        return this;
    }
    public withRows(rows: Array<Array<string>>): CreateSqlJobResponse {
        this['rows'] = rows;
        return this;
    }
    public withJobMode(jobMode: string): CreateSqlJobResponse {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: string  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): string | undefined {
        return this['job_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSqlJobResponseJobTypeEnum {
    DDL = 'DDL',
    DCL = 'DCL',
    IMPORT = 'IMPORT',
    EXPORT = 'EXPORT',
    QUERY = 'QUERY',
    INSERT = 'INSERT'
}
