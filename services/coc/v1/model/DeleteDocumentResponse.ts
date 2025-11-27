
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDocumentResponse extends SdkResponse {
    public data?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): DeleteDocumentResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): DeleteDocumentResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}