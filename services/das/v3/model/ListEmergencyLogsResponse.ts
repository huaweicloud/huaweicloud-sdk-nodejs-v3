
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEmergencyLogsResponse extends SdkResponse {
    public total?: number;
    public data?: Array<object>;
    private 'object_type'?: string;
    private 'collect_date'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEmergencyLogsResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<object>): ListEmergencyLogsResponse {
        this['data'] = data;
        return this;
    }
    public withObjectType(objectType: string): ListEmergencyLogsResponse {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withCollectDate(collectDate: string): ListEmergencyLogsResponse {
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