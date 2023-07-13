import { ProxyTokenDTO } from './ProxyTokenDTO';
import { UserInfo } from './UserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTokenResponse extends SdkResponse {
    public accessToken?: string;
    public tokenIp?: string;
    public validPeriod?: number;
    public expireTime?: number;
    public createTime?: number;
    public user?: UserInfo;
    public clientType?: number;
    public forceLoginInd?: number;
    public firstLogin?: boolean;
    public pwdExpired?: boolean;
    public daysPwdAvailable?: number;
    public proxyToken?: ProxyTokenDTO;
    public delayDelete?: boolean;
    public tokenType?: number;
    public refreshToken?: string;
    public refreshValidPeriod?: number;
    public refreshExpireTime?: number;
    public refreshCreateTime?: number;
    public constructor() { 
        super();
    }
    public withAccessToken(accessToken: string): UpdateTokenResponse {
        this['accessToken'] = accessToken;
        return this;
    }
    public withTokenIp(tokenIp: string): UpdateTokenResponse {
        this['tokenIp'] = tokenIp;
        return this;
    }
    public withValidPeriod(validPeriod: number): UpdateTokenResponse {
        this['validPeriod'] = validPeriod;
        return this;
    }
    public withExpireTime(expireTime: number): UpdateTokenResponse {
        this['expireTime'] = expireTime;
        return this;
    }
    public withCreateTime(createTime: number): UpdateTokenResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withUser(user: UserInfo): UpdateTokenResponse {
        this['user'] = user;
        return this;
    }
    public withClientType(clientType: number): UpdateTokenResponse {
        this['clientType'] = clientType;
        return this;
    }
    public withForceLoginInd(forceLoginInd: number): UpdateTokenResponse {
        this['forceLoginInd'] = forceLoginInd;
        return this;
    }
    public withFirstLogin(firstLogin: boolean): UpdateTokenResponse {
        this['firstLogin'] = firstLogin;
        return this;
    }
    public withPwdExpired(pwdExpired: boolean): UpdateTokenResponse {
        this['pwdExpired'] = pwdExpired;
        return this;
    }
    public withDaysPwdAvailable(daysPwdAvailable: number): UpdateTokenResponse {
        this['daysPwdAvailable'] = daysPwdAvailable;
        return this;
    }
    public withProxyToken(proxyToken: ProxyTokenDTO): UpdateTokenResponse {
        this['proxyToken'] = proxyToken;
        return this;
    }
    public withDelayDelete(delayDelete: boolean): UpdateTokenResponse {
        this['delayDelete'] = delayDelete;
        return this;
    }
    public withTokenType(tokenType: number): UpdateTokenResponse {
        this['tokenType'] = tokenType;
        return this;
    }
    public withRefreshToken(refreshToken: string): UpdateTokenResponse {
        this['refreshToken'] = refreshToken;
        return this;
    }
    public withRefreshValidPeriod(refreshValidPeriod: number): UpdateTokenResponse {
        this['refreshValidPeriod'] = refreshValidPeriod;
        return this;
    }
    public withRefreshExpireTime(refreshExpireTime: number): UpdateTokenResponse {
        this['refreshExpireTime'] = refreshExpireTime;
        return this;
    }
    public withRefreshCreateTime(refreshCreateTime: number): UpdateTokenResponse {
        this['refreshCreateTime'] = refreshCreateTime;
        return this;
    }
}