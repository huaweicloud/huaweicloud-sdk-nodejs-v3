import { OfflineKeyAnalysisRecord } from './OfflineKeyAnalysisRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOfflineKeyAnalysisTaskResponse extends SdkResponse {
    private 'instance_id'?: string;
    public total?: number;
    public records?: Array<OfflineKeyAnalysisRecord>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ListOfflineKeyAnalysisTaskResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTotal(total: number): ListOfflineKeyAnalysisTaskResponse {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<OfflineKeyAnalysisRecord>): ListOfflineKeyAnalysisTaskResponse {
        this['records'] = records;
        return this;
    }
}