import { SparseBackupPolicy } from './SparseBackupPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSparseBackupPolicyResponse extends SdkResponse {
    public policies?: Array<SparseBackupPolicy>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<SparseBackupPolicy>): ListSparseBackupPolicyResponse {
        this['policies'] = policies;
        return this;
    }
    public withXRequestId(xRequestId: string): ListSparseBackupPolicyResponse {
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