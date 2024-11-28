
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAddAccountsResponse extends SdkResponse {
    private 'is_all_legal_count'?: boolean;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withIsAllLegalCount(isAllLegalCount: boolean): BatchAddAccountsResponse {
        this['is_all_legal_count'] = isAllLegalCount;
        return this;
    }
    public set isAllLegalCount(isAllLegalCount: boolean  | undefined) {
        this['is_all_legal_count'] = isAllLegalCount;
    }
    public get isAllLegalCount(): boolean | undefined {
        return this['is_all_legal_count'];
    }
    public withXRequestId(xRequestId: string): BatchAddAccountsResponse {
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