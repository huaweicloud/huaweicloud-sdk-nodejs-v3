
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterManagerAuthStateResponse extends SdkResponse {
    private 'auth_type'?: number;
    public authorized?: boolean;
    private 'expiration_time'?: string;
    public constructor() { 
        super();
    }
    public withAuthType(authType: number): ListClusterManagerAuthStateResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: number  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): number | undefined {
        return this['auth_type'];
    }
    public withAuthorized(authorized: boolean): ListClusterManagerAuthStateResponse {
        this['authorized'] = authorized;
        return this;
    }
    public withExpirationTime(expirationTime: string): ListClusterManagerAuthStateResponse {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: string  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): string | undefined {
        return this['expiration_time'];
    }
}