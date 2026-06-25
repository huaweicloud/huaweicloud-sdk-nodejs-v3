
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSparseBackupPolicyResponse extends SdkResponse {
    public body?: object;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateSparseBackupPolicyResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateSparseBackupPolicyResponse {
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