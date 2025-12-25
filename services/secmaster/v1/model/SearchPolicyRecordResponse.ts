
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchPolicyRecordResponse extends SdkResponse {
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
    public withCode(code: string): SearchPolicyRecordResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<object>): SearchPolicyRecordResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): SearchPolicyRecordResponse {
        this['message'] = message;
        return this;
    }
    public withPage(page: number): SearchPolicyRecordResponse {
        this['page'] = page;
        return this;
    }
    public withRequestId(requestId: string): SearchPolicyRecordResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSize(size: number): SearchPolicyRecordResponse {
        this['size'] = size;
        return this;
    }
    public withSuccess(success: boolean): SearchPolicyRecordResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): SearchPolicyRecordResponse {
        this['total'] = total;
        return this;
    }
    public withContentType(contentType: string): SearchPolicyRecordResponse {
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