
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetCallerIdentityResponse extends SdkResponse {
    private 'account_id'?: string;
    private 'principal_urn'?: string;
    private 'principal_id'?: string;
    public constructor() { 
        super();
    }
    public withAccountId(accountId: string): GetCallerIdentityResponse {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withPrincipalUrn(principalUrn: string): GetCallerIdentityResponse {
        this['principal_urn'] = principalUrn;
        return this;
    }
    public set principalUrn(principalUrn: string  | undefined) {
        this['principal_urn'] = principalUrn;
    }
    public get principalUrn(): string | undefined {
        return this['principal_urn'];
    }
    public withPrincipalId(principalId: string): GetCallerIdentityResponse {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
}