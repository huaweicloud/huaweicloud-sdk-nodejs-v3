
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSsoConfigResponse extends SdkResponse {
    public enableSSO?: boolean;
    public domain?: string;
    public authorizeUrl?: string;
    public getTokenUrl?: string;
    public clientId?: string;
    public clientSecret?: string;
    public scope?: string;
    public accFieldName?: string;
    public getUserInfoUrl?: string;
    public oauth2ServerType?: number;
    public pcSchemaUrl?: string;
    public androidSchemaUrl?: string;
    public iosSchemaUrl?: string;
    public thirdName?: string;
    public thirdEmail?: string;
    public thirdMobile?: string;
    public thirdAccessToken?: string;
    public thirdHeadImgUrl?: string;
    public constructor() { 
        super();
    }
    public withEnableSSO(enableSSO: boolean): ShowSsoConfigResponse {
        this['enableSSO'] = enableSSO;
        return this;
    }
    public withDomain(domain: string): ShowSsoConfigResponse {
        this['domain'] = domain;
        return this;
    }
    public withAuthorizeUrl(authorizeUrl: string): ShowSsoConfigResponse {
        this['authorizeUrl'] = authorizeUrl;
        return this;
    }
    public withGetTokenUrl(getTokenUrl: string): ShowSsoConfigResponse {
        this['getTokenUrl'] = getTokenUrl;
        return this;
    }
    public withClientId(clientId: string): ShowSsoConfigResponse {
        this['clientId'] = clientId;
        return this;
    }
    public withClientSecret(clientSecret: string): ShowSsoConfigResponse {
        this['clientSecret'] = clientSecret;
        return this;
    }
    public withScope(scope: string): ShowSsoConfigResponse {
        this['scope'] = scope;
        return this;
    }
    public withAccFieldName(accFieldName: string): ShowSsoConfigResponse {
        this['accFieldName'] = accFieldName;
        return this;
    }
    public withGetUserInfoUrl(getUserInfoUrl: string): ShowSsoConfigResponse {
        this['getUserInfoUrl'] = getUserInfoUrl;
        return this;
    }
    public withOauth2ServerType(oauth2ServerType: number): ShowSsoConfigResponse {
        this['oauth2ServerType'] = oauth2ServerType;
        return this;
    }
    public withPcSchemaUrl(pcSchemaUrl: string): ShowSsoConfigResponse {
        this['pcSchemaUrl'] = pcSchemaUrl;
        return this;
    }
    public withAndroidSchemaUrl(androidSchemaUrl: string): ShowSsoConfigResponse {
        this['androidSchemaUrl'] = androidSchemaUrl;
        return this;
    }
    public withIosSchemaUrl(iosSchemaUrl: string): ShowSsoConfigResponse {
        this['iosSchemaUrl'] = iosSchemaUrl;
        return this;
    }
    public withThirdName(thirdName: string): ShowSsoConfigResponse {
        this['thirdName'] = thirdName;
        return this;
    }
    public withThirdEmail(thirdEmail: string): ShowSsoConfigResponse {
        this['thirdEmail'] = thirdEmail;
        return this;
    }
    public withThirdMobile(thirdMobile: string): ShowSsoConfigResponse {
        this['thirdMobile'] = thirdMobile;
        return this;
    }
    public withThirdAccessToken(thirdAccessToken: string): ShowSsoConfigResponse {
        this['thirdAccessToken'] = thirdAccessToken;
        return this;
    }
    public withThirdHeadImgUrl(thirdHeadImgUrl: string): ShowSsoConfigResponse {
        this['thirdHeadImgUrl'] = thirdHeadImgUrl;
        return this;
    }
}