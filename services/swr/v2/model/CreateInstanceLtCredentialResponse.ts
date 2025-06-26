
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceLtCredentialResponse extends SdkResponse {
    private 'auth_token'?: string;
    private 'created_at'?: string;
    private 'expire_date'?: string;
    private 'token_id'?: string;
    private 'user_id'?: string;
    public constructor() { 
        super();
    }
    public withAuthToken(authToken: string): CreateInstanceLtCredentialResponse {
        this['auth_token'] = authToken;
        return this;
    }
    public set authToken(authToken: string  | undefined) {
        this['auth_token'] = authToken;
    }
    public get authToken(): string | undefined {
        return this['auth_token'];
    }
    public withCreatedAt(createdAt: string): CreateInstanceLtCredentialResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withExpireDate(expireDate: string): CreateInstanceLtCredentialResponse {
        this['expire_date'] = expireDate;
        return this;
    }
    public set expireDate(expireDate: string  | undefined) {
        this['expire_date'] = expireDate;
    }
    public get expireDate(): string | undefined {
        return this['expire_date'];
    }
    public withTokenId(tokenId: string): CreateInstanceLtCredentialResponse {
        this['token_id'] = tokenId;
        return this;
    }
    public set tokenId(tokenId: string  | undefined) {
        this['token_id'] = tokenId;
    }
    public get tokenId(): string | undefined {
        return this['token_id'];
    }
    public withUserId(userId: string): CreateInstanceLtCredentialResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}