import { UpdateWorkspaceQuotasReqQuotas } from './UpdateWorkspaceQuotasReqQuotas';


export class UpdateWorkspaceQuotasReq {
    public quotas?: Array<UpdateWorkspaceQuotasReqQuotas>;
    public constructor(quotas?: Array<UpdateWorkspaceQuotasReqQuotas>) { 
        this['quotas'] = quotas;
    }
    public withQuotas(quotas: Array<UpdateWorkspaceQuotasReqQuotas>): UpdateWorkspaceQuotasReq {
        this['quotas'] = quotas;
        return this;
    }
}