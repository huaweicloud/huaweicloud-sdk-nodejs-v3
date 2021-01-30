

export class CreateUnscopeTokenByIdpInitiatedRequest {
    private 'X-Idp-Id': string | undefined;
    public body?: object;
    public constructor(xIdpId: any) { 
        this['X-Idp-Id'] = xIdpId;
    }
    public withXIdpId(xIdpId: string): CreateUnscopeTokenByIdpInitiatedRequest {
        this['X-Idp-Id'] = xIdpId;
        return this;
    }
    public set xIdpId(xIdpId: string | undefined) {
        this['X-Idp-Id'] = xIdpId;
    }
    public get xIdpId() {
        return this['X-Idp-Id'];
    }
    public withBody(body: object): CreateUnscopeTokenByIdpInitiatedRequest {
        this['body'] = body;
        return this;
    }
}