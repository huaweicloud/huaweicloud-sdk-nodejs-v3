import { DDSEmergencyLogInfo } from './DDSEmergencyLogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceEmergencyLogsResponse extends SdkResponse {
    public total?: number;
    public data?: Array<DDSEmergencyLogInfo>;
    private 'object_type'?: string;
    private 'collect_date'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceEmergencyLogsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<DDSEmergencyLogInfo>): ListInstanceEmergencyLogsResponse {
        this['data'] = data;
        return this;
    }
    public withObjectType(objectType: string): ListInstanceEmergencyLogsResponse {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withCollectDate(collectDate: string): ListInstanceEmergencyLogsResponse {
        this['collect_date'] = collectDate;
        return this;
    }
    public set collectDate(collectDate: string  | undefined) {
        this['collect_date'] = collectDate;
    }
    public get collectDate(): string | undefined {
        return this['collect_date'];
    }
}