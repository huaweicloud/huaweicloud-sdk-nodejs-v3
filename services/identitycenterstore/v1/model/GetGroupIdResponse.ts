
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetGroupIdResponse extends SdkResponse {
    private 'group_id'?: string;
    private 'identity_store_id'?: string;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): GetGroupIdResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIdentityStoreId(identityStoreId: string): GetGroupIdResponse {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
}