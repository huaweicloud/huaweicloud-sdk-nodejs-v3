import { StsCredentialProvider } from './StsCredentialProvider';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStsCredentialProviderResponse extends SdkResponse {
    private 'credential_provider'?: StsCredentialProvider;
    public constructor() { 
        super();
    }
    public withCredentialProvider(credentialProvider: StsCredentialProvider): UpdateStsCredentialProviderResponse {
        this['credential_provider'] = credentialProvider;
        return this;
    }
    public set credentialProvider(credentialProvider: StsCredentialProvider  | undefined) {
        this['credential_provider'] = credentialProvider;
    }
    public get credentialProvider(): StsCredentialProvider | undefined {
        return this['credential_provider'];
    }
}