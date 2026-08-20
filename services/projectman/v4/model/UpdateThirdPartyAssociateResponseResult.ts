

export class UpdateThirdPartyAssociateResponseResult {
    public fail?: Array<string>;
    public success?: Array<Array<string>>;
    public constructor() { 
    }
    public withFail(fail: Array<string>): UpdateThirdPartyAssociateResponseResult {
        this['fail'] = fail;
        return this;
    }
    public withSuccess(success: Array<Array<string>>): UpdateThirdPartyAssociateResponseResult {
        this['success'] = success;
        return this;
    }
}