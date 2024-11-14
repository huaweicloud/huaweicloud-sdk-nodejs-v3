import { ObsDataRepositoryPolicy } from './ObsDataRepositoryPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateObsTargetPolicyResponse extends SdkResponse {
    private 'target_id'?: string;
    public policy?: ObsDataRepositoryPolicy;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTargetId(targetId: string): UpdateObsTargetPolicyResponse {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withPolicy(policy: ObsDataRepositoryPolicy): UpdateObsTargetPolicyResponse {
        this['policy'] = policy;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateObsTargetPolicyResponse {
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