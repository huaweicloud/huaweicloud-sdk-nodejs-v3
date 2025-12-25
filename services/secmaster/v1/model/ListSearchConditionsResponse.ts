import { ListSearchConditionsDetail } from './ListSearchConditionsDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSearchConditionsResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ListSearchConditionsDetail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSearchConditionsResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ListSearchConditionsDetail>): ListSearchConditionsResponse {
        this['records'] = records;
        return this;
    }
}