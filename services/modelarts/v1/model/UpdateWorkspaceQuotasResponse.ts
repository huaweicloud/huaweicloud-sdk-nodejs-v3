import { WorkspaceQuotasUpdateResponse } from './WorkspaceQuotasUpdateResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkspaceQuotasResponse extends SdkResponse {
    public quotas?: Array<WorkspaceQuotasUpdateResponse>;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<WorkspaceQuotasUpdateResponse>): UpdateWorkspaceQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}