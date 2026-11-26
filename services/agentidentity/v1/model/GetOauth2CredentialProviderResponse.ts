import { Oauth2CredentialProvider } from './Oauth2CredentialProvider';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetOauth2CredentialProviderResponse extends SdkResponse {
    private 'credential_provider'?: Oauth2CredentialProvider;
    public constructor() { 
        super();
    }
    public withCredentialProvider(credentialProvider: Oauth2CredentialProvider): GetOauth2CredentialProviderResponse {
        this['credential_provider'] = credentialProvider;
        return this;
    }
    public set credentialProvider(credentialProvider: Oauth2CredentialProvider  | undefined) {
        this['credential_provider'] = credentialProvider;
    }
    public get credentialProvider(): Oauth2CredentialProvider | undefined {
        return this['credential_provider'];
    }
}