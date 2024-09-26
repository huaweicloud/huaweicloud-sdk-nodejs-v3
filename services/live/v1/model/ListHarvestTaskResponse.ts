import { HarvestTaskCreateSucRsp } from './HarvestTaskCreateSucRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHarvestTaskResponse extends SdkResponse {
    public total?: number;
    private 'harvest_tasks'?: Array<HarvestTaskCreateSucRsp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHarvestTaskResponse {
        this['total'] = total;
        return this;
    }
    public withHarvestTasks(harvestTasks: Array<HarvestTaskCreateSucRsp>): ListHarvestTaskResponse {
        this['harvest_tasks'] = harvestTasks;
        return this;
    }
    public set harvestTasks(harvestTasks: Array<HarvestTaskCreateSucRsp>  | undefined) {
        this['harvest_tasks'] = harvestTasks;
    }
    public get harvestTasks(): Array<HarvestTaskCreateSucRsp> | undefined {
        return this['harvest_tasks'];
    }
}