import { FlavorBrief } from './FlavorBrief';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public total?: number;
    public data?: Array<FlavorBrief>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFlavorsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<FlavorBrief>): ListFlavorsResponse {
        this['data'] = data;
        return this;
    }
}