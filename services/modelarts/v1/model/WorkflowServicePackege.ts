import { WorkflowPoolOrder } from './WorkflowPoolOrder';


export class WorkflowServicePackege {
    private 'package_id'?: string;
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
    public constructor() { 
    }
    public withPackageId(packageId: string): WorkflowServicePackege {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withStatus(status: string): WorkflowServicePackege {
        this['status'] = status;
        return this;
    }
    public withPoolId(poolId: string): WorkflowServicePackege {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withServiceId(serviceId: string): WorkflowServicePackege {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withWorkflowId(workflowId: string): WorkflowServicePackege {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withOrder(order: WorkflowPoolOrder): WorkflowServicePackege {
        this['order'] = order;
        return this;
    }
    public withConsumeLimit(consumeLimit: number): WorkflowServicePackege {
        this['consume_limit'] = consumeLimit;
        return this;
    }
    public set consumeLimit(consumeLimit: number  | undefined) {
        this['consume_limit'] = consumeLimit;
    }
    public get consumeLimit(): number | undefined {
        return this['consume_limit'];
    }
    public withCurrentConsume(currentConsume: number): WorkflowServicePackege {
        this['current_consume'] = currentConsume;
        return this;
    }
    public set currentConsume(currentConsume: number  | undefined) {
        this['current_consume'] = currentConsume;
    }
    public get currentConsume(): number | undefined {
        return this['current_consume'];
    }
    public withCurrentDate(currentDate: string): WorkflowServicePackege {
        this['current_date'] = currentDate;
        return this;
    }
    public set currentDate(currentDate: string  | undefined) {
        this['current_date'] = currentDate;
    }
    public get currentDate(): string | undefined {
        return this['current_date'];
    }
    public withLimitEnable(limitEnable: boolean): WorkflowServicePackege {
        this['limit_enable'] = limitEnable;
        return this;
    }
    public set limitEnable(limitEnable: boolean  | undefined) {
        this['limit_enable'] = limitEnable;
    }
    public get limitEnable(): boolean | undefined {
        return this['limit_enable'];
    }
    public withCreatedAt(createdAt: string): WorkflowServicePackege {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}