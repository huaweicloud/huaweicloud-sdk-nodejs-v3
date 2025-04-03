import { InstanceAccesslog } from './InstanceAccesslog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataServiceInstanceAccesslogsResponse extends SdkResponse {
    private 'number'?: number;
    public records?: Array<InstanceAccesslog>;
    public constructor() { 
        super();
    }
    public withModelNumber(modelNumber: number): ListDataServiceInstanceAccesslogsResponse {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withRecords(records: Array<InstanceAccesslog>): ListDataServiceInstanceAccesslogsResponse {
        this['records'] = records;
        return this;
    }
}