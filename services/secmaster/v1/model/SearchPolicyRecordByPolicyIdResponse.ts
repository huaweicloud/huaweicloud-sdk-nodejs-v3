
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchPolicyRecordByPolicyIdResponse extends SdkResponse {
    public code?: string;
    public data?: Array<object>;
    public message?: string;
    public page?: number;
    private 'request_id'?: string;
    public size?: number;
    public success?: boolean;
    public total?: number;
    private 'content-type'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): SearchPolicyRecordByPolicyIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<object>): SearchPolicyRecordByPolicyIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): SearchPolicyRecordByPolicyIdResponse {
        this['message'] = message;
        return this;
    }
    public withPage(page: number): SearchPolicyRecordByPolicyIdResponse {
        this['page'] = page;
        return this;
    }
    public withRequestId(requestId: string): SearchPolicyRecordByPolicyIdResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSize(size: number): SearchPolicyRecordByPolicyIdResponse {
        this['size'] = size;
        return this;
    }
    public withSuccess(success: boolean): SearchPolicyRecordByPolicyIdResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): SearchPolicyRecordByPolicyIdResponse {
        this['total'] = total;
        return this;
    }
    public withContentType(contentType: string): SearchPolicyRecordByPolicyIdResponse {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
}