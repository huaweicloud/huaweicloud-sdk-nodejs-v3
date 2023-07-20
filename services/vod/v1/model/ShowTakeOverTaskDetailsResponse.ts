import { AssetDetails } from './AssetDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTakeOverTaskDetailsResponse extends SdkResponse {
    public total?: number;
    private 'task_id'?: string;
    private 'task_status'?: string;
    public assets?: Array<AssetDetails>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowTakeOverTaskDetailsResponse {
        this['total'] = total;
        return this;
    }
    public withTaskId(taskId: string): ShowTakeOverTaskDetailsResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskStatus(taskStatus: string): ShowTakeOverTaskDetailsResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withAssets(assets: Array<AssetDetails>): ShowTakeOverTaskDetailsResponse {
        this['assets'] = assets;
        return this;
    }
}