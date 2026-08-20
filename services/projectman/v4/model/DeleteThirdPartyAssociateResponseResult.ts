

export class DeleteThirdPartyAssociateResponseResult {
    public fail?: Array<string>;
    public success?: Array<string>;
    public constructor() { 
    }
    public withFail(fail: Array<string>): DeleteThirdPartyAssociateResponseResult {
        this['fail'] = fail;
        return this;
    }
    public withSuccess(success: Array<string>): DeleteThirdPartyAssociateResponseResult {
        this['success'] = success;
        return this;
    }
}