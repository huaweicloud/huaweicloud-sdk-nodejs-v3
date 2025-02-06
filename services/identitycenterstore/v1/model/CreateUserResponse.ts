
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserResponse extends SdkResponse {
    private 'identity_store_id'?: string;
    private 'user_id'?: string;
    public password?: string;
    public constructor() { 
        super();
    }
    public withIdentityStoreId(identityStoreId: string): CreateUserResponse {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserId(userId: string): CreateUserResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withPassword(password: string): CreateUserResponse {
        this['password'] = password;
        return this;
    }
}