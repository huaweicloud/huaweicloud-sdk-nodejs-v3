
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTableContentResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public schema?: Array<object>;
    public rows?: Array<object>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowTableContentResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowTableContentResponse {
        this['message'] = message;
        return this;
    }
    public withSchema(schema: Array<object>): ShowTableContentResponse {
        this['schema'] = schema;
        return this;
    }
    public withRows(rows: Array<object>): ShowTableContentResponse {
        this['rows'] = rows;
        return this;
    }
}