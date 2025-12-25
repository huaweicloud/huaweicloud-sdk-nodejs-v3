import { ListComponentTemplate } from './ListComponentTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentTemplateResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ListComponentTemplate>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListComponentTemplateResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ListComponentTemplate>): ListComponentTemplateResponse {
        this['records'] = records;
        return this;
    }
}