import { WorkflowPoolOrder } from './WorkflowPoolOrder';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWorkflowPurchasePoolResponse extends SdkResponse {
    public status?: string;
    private 'pool_id'?: string;
    private 'service_id'?: string;
    private 'workflow_id'?: string;
    public order?: WorkflowPoolOrder;
    private 'consume_limit'?: number;
    private 'current_consume'?: number;
    private 'current_date'?: string;
    private 'limit_enable'?: boolean;
    private 'created_at'?: string;
    private 'package_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateWorkflowPurchasePoolResponse {
        this['status'] = status;
        return this;
    }
    public withPoolId(poolId: string): CreateWorkflowPurchasePoolResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withServiceId(serviceId: string): CreateWorkflowPurchasePoolResponse {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withWorkflowId(workflowId: string): CreateWorkflowPurchasePoolResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withOrder(order: WorkflowPoolOrder): CreateWorkflowPurchasePoolResponse {
        this['order'] = order;
        return this;
    }
    public withConsumeLimit(consumeLimit: number): CreateWorkflowPurchasePoolResponse {
        this['consume_limit'] = consumeLimit;
        return this;
    }
    public set consumeLimit(consumeLimit: number  | undefined) {
        this['consume_limit'] = consumeLimit;
    }
    public get consumeLimit(): number | undefined {
        return this['consume_limit'];
    }
    public withCurrentConsume(currentConsume: number): CreateWorkflowPurchasePoolResponse {
        this['current_consume'] = currentConsume;
        return this;
    }
    public set currentConsume(currentConsume: number  | undefined) {
        this['current_consume'] = currentConsume;
    }
    public get currentConsume(): number | undefined {
        return this['current_consume'];
    }
    public withCurrentDate(currentDate: string): CreateWorkflowPurchasePoolResponse {
        this['current_date'] = currentDate;
        return this;
    }
    public set currentDate(currentDate: string  | undefined) {
        this['current_date'] = currentDate;
    }
    public get currentDate(): string | undefined {
        return this['current_date'];
    }
    public withLimitEnable(limitEnable: boolean): CreateWorkflowPurchasePoolResponse {
        this['limit_enable'] = limitEnable;
        return this;
    }
    public set limitEnable(limitEnable: boolean  | undefined) {
        this['limit_enable'] = limitEnable;
    }
    public get limitEnable(): boolean | undefined {
        return this['limit_enable'];
    }
    public withCreatedAt(createdAt: string): CreateWorkflowPurchasePoolResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withPackageId(packageId: string): CreateWorkflowPurchasePoolResponse {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
}