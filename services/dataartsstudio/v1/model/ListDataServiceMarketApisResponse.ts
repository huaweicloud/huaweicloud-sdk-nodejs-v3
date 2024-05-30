import { AdvancedMallApiDTO } from './AdvancedMallApiDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataServiceMarketApisResponse extends SdkResponse {
    public total?: number;
    public apis?: Array<AdvancedMallApiDTO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDataServiceMarketApisResponse {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<AdvancedMallApiDTO>): ListDataServiceMarketApisResponse {
        this['apis'] = apis;
        return this;
    }
}