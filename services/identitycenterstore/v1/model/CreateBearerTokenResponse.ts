
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBearerTokenResponse extends SdkResponse {
    private 'creation_time'?: number;
    private 'expiration_time'?: number;
    public token?: string;
    private 'token_id'?: string;
    public constructor() { 
        super();
    }
    public withCreationTime(creationTime: number): CreateBearerTokenResponse {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withExpirationTime(expirationTime: number): CreateBearerTokenResponse {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): number | undefined {
        return this['expiration_time'];
    }
    public withToken(token: string): CreateBearerTokenResponse {
        this['token'] = token;
        return this;
    }
    public withTokenId(tokenId: string): CreateBearerTokenResponse {
        this['token_id'] = tokenId;
        return this;
    }
    public set tokenId(tokenId: string  | undefined) {
        this['token_id'] = tokenId;
    }
    public get tokenId(): string | undefined {
        return this['token_id'];
    }
}