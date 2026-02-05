
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchModifyReadWriteStrategyResponse extends SdkResponse {
    public success?: boolean;
    private 'request_id'?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): BatchModifyReadWriteStrategyResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): BatchModifyReadWriteStrategyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withData(data: object): BatchModifyReadWriteStrategyResponse {
        this['data'] = data;
        return this;
    }
}