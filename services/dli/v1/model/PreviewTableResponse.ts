
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PreviewTableResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public schema?: Array<object>;
    public rows?: Array<object>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): PreviewTableResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): PreviewTableResponse {
        this['message'] = message;
        return this;
    }
    public withSchema(schema: Array<object>): PreviewTableResponse {
        this['schema'] = schema;
        return this;
    }
    public withRows(rows: Array<object>): PreviewTableResponse {
        this['rows'] = rows;
        return this;
    }
}