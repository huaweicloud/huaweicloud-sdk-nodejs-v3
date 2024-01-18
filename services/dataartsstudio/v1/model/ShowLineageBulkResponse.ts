import { TableLineageInfo } from './TableLineageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLineageBulkResponse extends SdkResponse {
    public total?: number;
    public data?: Array<TableLineageInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowLineageBulkResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<TableLineageInfo>): ShowLineageBulkResponse {
        this['data'] = data;
        return this;
    }
}