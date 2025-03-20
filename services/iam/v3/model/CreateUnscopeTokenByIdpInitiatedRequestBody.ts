

export class CreateUnscopeTokenByIdpInitiatedRequestBody {
    private 'SAMLResponse'?: string;
    public constructor(sAMLResponse?: string) { 
        this['SAMLResponse'] = sAMLResponse;
    }
    public withSAMLResponse(sAMLResponse: string): CreateUnscopeTokenByIdpInitiatedRequestBody {
        this['SAMLResponse'] = sAMLResponse;
        return this;
    }
    public set sAMLResponse(sAMLResponse: string  | undefined) {
        this['SAMLResponse'] = sAMLResponse;
    }
    public get sAMLResponse(): string | undefined {
        return this['SAMLResponse'];
    }
}