import { ProxyTokenDTO } from './ProxyTokenDTO';
import { UserInfo } from './UserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckTokenResponse extends SdkResponse {
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
    public withAccessToken(accessToken: string): CheckTokenResponse {
        this['accessToken'] = accessToken;
        return this;
    }
    public withTokenIp(tokenIp: string): CheckTokenResponse {
        this['tokenIp'] = tokenIp;
        return this;
    }
    public withValidPeriod(validPeriod: number): CheckTokenResponse {
        this['validPeriod'] = validPeriod;
        return this;
    }
    public withExpireTime(expireTime: number): CheckTokenResponse {
        this['expireTime'] = expireTime;
        return this;
    }
    public withCreateTime(createTime: number): CheckTokenResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withUser(user: UserInfo): CheckTokenResponse {
        this['user'] = user;
        return this;
    }
    public withClientType(clientType: number): CheckTokenResponse {
        this['clientType'] = clientType;
        return this;
    }
    public withForceLoginInd(forceLoginInd: number): CheckTokenResponse {
        this['forceLoginInd'] = forceLoginInd;
        return this;
    }
    public withFirstLogin(firstLogin: boolean): CheckTokenResponse {
        this['firstLogin'] = firstLogin;
        return this;
    }
    public withPwdExpired(pwdExpired: boolean): CheckTokenResponse {
        this['pwdExpired'] = pwdExpired;
        return this;
    }
    public withDaysPwdAvailable(daysPwdAvailable: number): CheckTokenResponse {
        this['daysPwdAvailable'] = daysPwdAvailable;
        return this;
    }
    public withProxyToken(proxyToken: ProxyTokenDTO): CheckTokenResponse {
        this['proxyToken'] = proxyToken;
        return this;
    }
    public withDelayDelete(delayDelete: boolean): CheckTokenResponse {
        this['delayDelete'] = delayDelete;
        return this;
    }
    public withTokenType(tokenType: number): CheckTokenResponse {
        this['tokenType'] = tokenType;
        return this;
    }
    public withRefreshToken(refreshToken: string): CheckTokenResponse {
        this['refreshToken'] = refreshToken;
        return this;
    }
    public withRefreshValidPeriod(refreshValidPeriod: number): CheckTokenResponse {
        this['refreshValidPeriod'] = refreshValidPeriod;
        return this;
    }
    public withRefreshExpireTime(refreshExpireTime: number): CheckTokenResponse {
        this['refreshExpireTime'] = refreshExpireTime;
        return this;
    }
    public withRefreshCreateTime(refreshCreateTime: number): CheckTokenResponse {
        this['refreshCreateTime'] = refreshCreateTime;
        return this;
    }
}