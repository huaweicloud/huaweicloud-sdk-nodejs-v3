

export class AuthorizeConfigInfoRequestBody {
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
    public constructor(enableSSO?: boolean) { 
        this['enableSSO'] = enableSSO;
    }
    public withEnableSSO(enableSSO: boolean): AuthorizeConfigInfoRequestBody {
        this['enableSSO'] = enableSSO;
        return this;
    }
    public withDomain(domain: string): AuthorizeConfigInfoRequestBody {
        this['domain'] = domain;
        return this;
    }
    public withAuthorizeUrl(authorizeUrl: string): AuthorizeConfigInfoRequestBody {
        this['authorizeUrl'] = authorizeUrl;
        return this;
    }
    public withGetTokenUrl(getTokenUrl: string): AuthorizeConfigInfoRequestBody {
        this['getTokenUrl'] = getTokenUrl;
        return this;
    }
    public withClientId(clientId: string): AuthorizeConfigInfoRequestBody {
        this['clientId'] = clientId;
        return this;
    }
    public withClientSecret(clientSecret: string): AuthorizeConfigInfoRequestBody {
        this['clientSecret'] = clientSecret;
        return this;
    }
    public withScope(scope: string): AuthorizeConfigInfoRequestBody {
        this['scope'] = scope;
        return this;
    }
    public withAccFieldName(accFieldName: string): AuthorizeConfigInfoRequestBody {
        this['accFieldName'] = accFieldName;
        return this;
    }
    public withGetUserInfoUrl(getUserInfoUrl: string): AuthorizeConfigInfoRequestBody {
        this['getUserInfoUrl'] = getUserInfoUrl;
        return this;
    }
    public withOauth2ServerType(oauth2ServerType: number): AuthorizeConfigInfoRequestBody {
        this['oauth2ServerType'] = oauth2ServerType;
        return this;
    }
    public withPcSchemaUrl(pcSchemaUrl: string): AuthorizeConfigInfoRequestBody {
        this['pcSchemaUrl'] = pcSchemaUrl;
        return this;
    }
    public withAndroidSchemaUrl(androidSchemaUrl: string): AuthorizeConfigInfoRequestBody {
        this['androidSchemaUrl'] = androidSchemaUrl;
        return this;
    }
    public withIosSchemaUrl(iosSchemaUrl: string): AuthorizeConfigInfoRequestBody {
        this['iosSchemaUrl'] = iosSchemaUrl;
        return this;
    }
    public withThirdName(thirdName: string): AuthorizeConfigInfoRequestBody {
        this['thirdName'] = thirdName;
        return this;
    }
    public withThirdEmail(thirdEmail: string): AuthorizeConfigInfoRequestBody {
        this['thirdEmail'] = thirdEmail;
        return this;
    }
    public withThirdMobile(thirdMobile: string): AuthorizeConfigInfoRequestBody {
        this['thirdMobile'] = thirdMobile;
        return this;
    }
    public withThirdAccessToken(thirdAccessToken: string): AuthorizeConfigInfoRequestBody {
        this['thirdAccessToken'] = thirdAccessToken;
        return this;
    }
    public withThirdHeadImgUrl(thirdHeadImgUrl: string): AuthorizeConfigInfoRequestBody {
        this['thirdHeadImgUrl'] = thirdHeadImgUrl;
        return this;
    }
}