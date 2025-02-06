
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGroupMembershipResponse extends SdkResponse {
    private 'identity_store_id'?: string;
    private 'membership_id'?: string;
    public constructor() { 
        super();
    }
    public withIdentityStoreId(identityStoreId: string): CreateGroupMembershipResponse {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withMembershipId(membershipId: string): CreateGroupMembershipResponse {
        this['membership_id'] = membershipId;
        return this;
    }
    public set membershipId(membershipId: string  | undefined) {
        this['membership_id'] = membershipId;
    }
    public get membershipId(): string | undefined {
        return this['membership_id'];
    }
}