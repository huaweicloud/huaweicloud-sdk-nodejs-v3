import { DataTransformationItem } from './DataTransformationItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataTransformationsResponse extends SdkResponse {
    public count?: number;
    public records?: Array<DataTransformationItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListDataTransformationsResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<DataTransformationItem>): ListDataTransformationsResponse {
        this['records'] = records;
        return this;
    }
}