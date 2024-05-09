
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportFlinkJobsResponse extends SdkResponse {
    private 'is_success'?: string;
    public message?: string;
    private 'zip_file'?: Array<string>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: string): ExportFlinkJobsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ExportFlinkJobsResponse {
        this['message'] = message;
        return this;
    }
    public withZipFile(zipFile: Array<string>): ExportFlinkJobsResponse {
        this['zip_file'] = zipFile;
        return this;
    }
    public set zipFile(zipFile: Array<string>  | undefined) {
        this['zip_file'] = zipFile;
    }
    public get zipFile(): Array<string> | undefined {
        return this['zip_file'];
    }
}