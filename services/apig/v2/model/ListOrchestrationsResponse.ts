import { BasePage } from './BasePage';
import { OrchestrationBaseResp } from './OrchestrationBaseResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrchestrationsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public orchestrations?: Array<OrchestrationBaseResp>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListOrchestrationsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListOrchestrationsResponse {
        this['total'] = total;
        return this;
    }
    public withOrchestrations(orchestrations: Array<OrchestrationBaseResp>): ListOrchestrationsResponse {
        this['orchestrations'] = orchestrations;
        return this;
    }
}