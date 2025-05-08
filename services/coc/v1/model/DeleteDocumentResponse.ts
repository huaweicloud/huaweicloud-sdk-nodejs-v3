
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDocumentResponse extends SdkResponse {
    public body?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteDocumentResponse {
        this['body'] = body;
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