
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRegisterDefenderPluginResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'total_count'?: number;
    private 'accepted_count'?: number;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): BatchRegisterDefenderPluginResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTotalCount(totalCount: number): BatchRegisterDefenderPluginResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withAcceptedCount(acceptedCount: number): BatchRegisterDefenderPluginResponse {
        this['accepted_count'] = acceptedCount;
        return this;
    }
    public set acceptedCount(acceptedCount: number  | undefined) {
        this['accepted_count'] = acceptedCount;
    }
    public get acceptedCount(): number | undefined {
        return this['accepted_count'];
    }
}