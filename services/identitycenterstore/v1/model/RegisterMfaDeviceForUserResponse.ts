
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RegisterMfaDeviceForUserResponse extends SdkResponse {
    private 'identity_store_id'?: string;
    private 'user_id'?: string;
    private 'work_flow'?: string;
    private 'redirect_url'?: string;
    public constructor() { 
        super();
    }
    public withIdentityStoreId(identityStoreId: string): RegisterMfaDeviceForUserResponse {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserId(userId: string): RegisterMfaDeviceForUserResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withWorkFlow(workFlow: string): RegisterMfaDeviceForUserResponse {
        this['work_flow'] = workFlow;
        return this;
    }
    public set workFlow(workFlow: string  | undefined) {
        this['work_flow'] = workFlow;
    }
    public get workFlow(): string | undefined {
        return this['work_flow'];
    }
    public withRedirectUrl(redirectUrl: string): RegisterMfaDeviceForUserResponse {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string  | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl(): string | undefined {
        return this['redirect_url'];
    }
}