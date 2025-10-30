import { AutoIncrementUsageRespAutoIncrementUsageList } from './AutoIncrementUsageRespAutoIncrementUsageList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutoIncrementUsageResponse extends SdkResponse {
    public status?: string;
    public total?: number;
    private 'auto_increment_usage_list'?: Array<AutoIncrementUsageRespAutoIncrementUsageList>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListAutoIncrementUsageResponse {
        this['status'] = status;
        return this;
    }
    public withTotal(total: number): ListAutoIncrementUsageResponse {
        this['total'] = total;
        return this;
    }
    public withAutoIncrementUsageList(autoIncrementUsageList: Array<AutoIncrementUsageRespAutoIncrementUsageList>): ListAutoIncrementUsageResponse {
        this['auto_increment_usage_list'] = autoIncrementUsageList;
        return this;
    }
    public set autoIncrementUsageList(autoIncrementUsageList: Array<AutoIncrementUsageRespAutoIncrementUsageList>  | undefined) {
        this['auto_increment_usage_list'] = autoIncrementUsageList;
    }
    public get autoIncrementUsageList(): Array<AutoIncrementUsageRespAutoIncrementUsageList> | undefined {
        return this['auto_increment_usage_list'];
    }
}