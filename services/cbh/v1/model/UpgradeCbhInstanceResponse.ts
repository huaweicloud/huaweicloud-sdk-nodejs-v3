
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeCbhInstanceResponse extends SdkResponse {
    public code?: number;
    public description?: string;
    private 'task_id'?: string;
    private 'order_id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): UpgradeCbhInstanceResponse {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): UpgradeCbhInstanceResponse {
        this['description'] = description;
        return this;
    }
    public withTaskId(taskId: string): UpgradeCbhInstanceResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOrderId(orderId: string): UpgradeCbhInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}