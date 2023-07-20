import { RecordsResponse } from './RecordsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHotKeyScanTasksResponse extends SdkResponse {
    private 'instance_id'?: string;
    public count?: number;
    public records?: Array<RecordsResponse>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ListHotKeyScanTasksResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCount(count: number): ListHotKeyScanTasksResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<RecordsResponse>): ListHotKeyScanTasksResponse {
        this['records'] = records;
        return this;
    }
}