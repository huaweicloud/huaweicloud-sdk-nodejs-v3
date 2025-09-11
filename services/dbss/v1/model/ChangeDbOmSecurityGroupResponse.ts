
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeDbOmSecurityGroupResponse extends SdkResponse {
    public code?: number;
    public description?: string;
    private 'order_id'?: string;
    private 'task_id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: number): ChangeDbOmSecurityGroupResponse {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): ChangeDbOmSecurityGroupResponse {
        this['description'] = description;
        return this;
    }
    public withOrderId(orderId: string): ChangeDbOmSecurityGroupResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withTaskId(taskId: string): ChangeDbOmSecurityGroupResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}