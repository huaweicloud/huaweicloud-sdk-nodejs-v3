import { SwitchTokenResponseAk } from './SwitchTokenResponseAk';
import { SwitchTokenResponseUser } from './SwitchTokenResponseUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchCpcsTokenResponse extends SdkResponse {
    public roles?: Array<string>;
    public ak?: SwitchTokenResponseAk;
    private 'expired_at'?: string;
    private 'issued_at'?: string;
    public user?: SwitchTokenResponseUser;
    private 'X-CPCS-Token'?: string;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<string>): SwitchCpcsTokenResponse {
        this['roles'] = roles;
        return this;
    }
    public withAk(ak: SwitchTokenResponseAk): SwitchCpcsTokenResponse {
        this['ak'] = ak;
        return this;
    }
    public withExpiredAt(expiredAt: string): SwitchCpcsTokenResponse {
        this['expired_at'] = expiredAt;
        return this;
    }
    public set expiredAt(expiredAt: string  | undefined) {
        this['expired_at'] = expiredAt;
    }
    public get expiredAt(): string | undefined {
        return this['expired_at'];
    }
    public withIssuedAt(issuedAt: string): SwitchCpcsTokenResponse {
        this['issued_at'] = issuedAt;
        return this;
    }
    public set issuedAt(issuedAt: string  | undefined) {
        this['issued_at'] = issuedAt;
    }
    public get issuedAt(): string | undefined {
        return this['issued_at'];
    }
    public withUser(user: SwitchTokenResponseUser): SwitchCpcsTokenResponse {
        this['user'] = user;
        return this;
    }
    public withXCPCSToken(xCPCSToken: string): SwitchCpcsTokenResponse {
        this['X-CPCS-Token'] = xCPCSToken;
        return this;
    }
    public set xCPCSToken(xCPCSToken: string  | undefined) {
        this['X-CPCS-Token'] = xCPCSToken;
    }
    public get xCPCSToken(): string | undefined {
        return this['X-CPCS-Token'];
    }
}