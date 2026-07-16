import { WorkspaceQuotasResponse } from './WorkspaceQuotasResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkspaceQuotasResponse extends SdkResponse {
    public quotas?: Array<WorkspaceQuotasResponse>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<WorkspaceQuotasResponse>): ShowWorkspaceQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}