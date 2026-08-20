import { CreateThirdPartyAssociateDTO } from './CreateThirdPartyAssociateDTO';


export class IssuesAssociationRespResult {
    public fail?: Array<CreateThirdPartyAssociateDTO>;
    public success?: Array<CreateThirdPartyAssociateDTO>;
    public constructor() { 
    }
    public withFail(fail: Array<CreateThirdPartyAssociateDTO>): IssuesAssociationRespResult {
        this['fail'] = fail;
        return this;
    }
    public withSuccess(success: Array<CreateThirdPartyAssociateDTO>): IssuesAssociationRespResult {
        this['success'] = success;
        return this;
    }
}