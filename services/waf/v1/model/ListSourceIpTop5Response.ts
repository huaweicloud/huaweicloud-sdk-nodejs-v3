import { SourceIpTopListInfoItems } from './SourceIpTopListInfoItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSourceIpTop5Response extends SdkResponse {
    public total?: number;
    public items?: Array<SourceIpTopListInfoItems>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSourceIpTop5Response {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<SourceIpTopListInfoItems>): ListSourceIpTop5Response {
        this['items'] = items;
        return this;
    }
}