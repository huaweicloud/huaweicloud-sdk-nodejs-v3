
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PreviewJobResultResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_id'?: string;
    private 'job_type'?: PreviewJobResultResponseJobTypeEnum | string;
    private 'row_count'?: number;
    private 'input_size'?: number;
    public schema?: Array<object>;
    public rows?: Array<Array<string>>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): PreviewJobResultResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): PreviewJobResultResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): PreviewJobResultResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: PreviewJobResultResponseJobTypeEnum | string): PreviewJobResultResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: PreviewJobResultResponseJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): PreviewJobResultResponseJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withRowCount(rowCount: number): PreviewJobResultResponse {
        this['row_count'] = rowCount;
        return this;
    }
    public set rowCount(rowCount: number  | undefined) {
        this['row_count'] = rowCount;
    }
    public get rowCount(): number | undefined {
        return this['row_count'];
    }
    public withInputSize(inputSize: number): PreviewJobResultResponse {
        this['input_size'] = inputSize;
        return this;
    }
    public set inputSize(inputSize: number  | undefined) {
        this['input_size'] = inputSize;
    }
    public get inputSize(): number | undefined {
        return this['input_size'];
    }
    public withSchema(schema: Array<object>): PreviewJobResultResponse {
        this['schema'] = schema;
        return this;
    }
    public withRows(rows: Array<Array<string>>): PreviewJobResultResponse {
        this['rows'] = rows;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PreviewJobResultResponseJobTypeEnum {
    DDL = 'DDL',
    DCL = 'DCL',
    IMPORT = 'IMPORT',
    EXPORT = 'EXPORT',
    QUERY = 'QUERY',
    INSERT = 'INSERT'
}
