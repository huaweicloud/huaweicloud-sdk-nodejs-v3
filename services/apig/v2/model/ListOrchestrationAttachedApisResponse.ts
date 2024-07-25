import { BasePage } from './BasePage';
import { OrchestrationApiInfo } from './OrchestrationApiInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrchestrationAttachedApisResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<OrchestrationApiInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListOrchestrationAttachedApisResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListOrchestrationAttachedApisResponse {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<OrchestrationApiInfo>): ListOrchestrationAttachedApisResponse {
        this['apis'] = apis;
        return this;
    }
}