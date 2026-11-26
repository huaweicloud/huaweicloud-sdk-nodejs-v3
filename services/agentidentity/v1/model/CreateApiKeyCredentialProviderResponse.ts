import { ApiKeyCredentialProvider } from './ApiKeyCredentialProvider';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApiKeyCredentialProviderResponse extends SdkResponse {
    private 'credential_provider'?: ApiKeyCredentialProvider;
    public constructor() { 
        super();
    }
    public withCredentialProvider(credentialProvider: ApiKeyCredentialProvider): CreateApiKeyCredentialProviderResponse {
        this['credential_provider'] = credentialProvider;
        return this;
    }
    public set credentialProvider(credentialProvider: ApiKeyCredentialProvider  | undefined) {
        this['credential_provider'] = credentialProvider;
    }
    public get credentialProvider(): ApiKeyCredentialProvider | undefined {
        return this['credential_provider'];
    }
}