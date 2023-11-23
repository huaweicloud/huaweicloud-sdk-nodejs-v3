
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlinkSqlJobGraphResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'error_code'?: string;
    private 'stream_graph'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): CreateFlinkSqlJobGraphResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): CreateFlinkSqlJobGraphResponse {
        this['message'] = message;
        return this;
    }
    public withErrorCode(errorCode: string): CreateFlinkSqlJobGraphResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withStreamGraph(streamGraph: string): CreateFlinkSqlJobGraphResponse {
        this['stream_graph'] = streamGraph;
        return this;
    }
    public set streamGraph(streamGraph: string  | undefined) {
        this['stream_graph'] = streamGraph;
    }
    public get streamGraph(): string | undefined {
        return this['stream_graph'];
    }
}