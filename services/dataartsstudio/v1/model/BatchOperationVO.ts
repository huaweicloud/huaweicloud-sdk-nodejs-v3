

export class BatchOperationVO {
    public id?: number;
    private 'tenant_id'?: string;
    private 'group_id'?: number;
    private 'biz_name'?: string;
    private 'biz_id'?: number;
    private 'operation_status'?: BatchOperationVOOperationStatusEnum | string;
    private 'operation_type'?: string;
    private 'biz_info'?: string;
    private 'create_by'?: string;
    public remark?: string;
    public total?: number;
    public success?: number;
    public failed?: number;
    public rate?: string;
    public logs?: string;
    public groups?: Array<BatchOperationVO>;
    public constructor() { 
    }
    public withId(id: number): BatchOperationVO {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): BatchOperationVO {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withGroupId(groupId: number): BatchOperationVO {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withBizName(bizName: string): BatchOperationVO {
        this['biz_name'] = bizName;
        return this;
    }
    public set bizName(bizName: string  | undefined) {
        this['biz_name'] = bizName;
    }
    public get bizName(): string | undefined {
        return this['biz_name'];
    }
    public withBizId(bizId: number): BatchOperationVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: number  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): number | undefined {
        return this['biz_id'];
    }
    public withOperationStatus(operationStatus: BatchOperationVOOperationStatusEnum | string): BatchOperationVO {
        this['operation_status'] = operationStatus;
        return this;
    }
    public set operationStatus(operationStatus: BatchOperationVOOperationStatusEnum | string  | undefined) {
        this['operation_status'] = operationStatus;
    }
    public get operationStatus(): BatchOperationVOOperationStatusEnum | string | undefined {
        return this['operation_status'];
    }
    public withOperationType(operationType: string): BatchOperationVO {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withBizInfo(bizInfo: string): BatchOperationVO {
        this['biz_info'] = bizInfo;
        return this;
    }
    public set bizInfo(bizInfo: string  | undefined) {
        this['biz_info'] = bizInfo;
    }
    public get bizInfo(): string | undefined {
        return this['biz_info'];
    }
    public withCreateBy(createBy: string): BatchOperationVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withRemark(remark: string): BatchOperationVO {
        this['remark'] = remark;
        return this;
    }
    public withTotal(total: number): BatchOperationVO {
        this['total'] = total;
        return this;
    }
    public withSuccess(success: number): BatchOperationVO {
        this['success'] = success;
        return this;
    }
    public withFailed(failed: number): BatchOperationVO {
        this['failed'] = failed;
        return this;
    }
    public withRate(rate: string): BatchOperationVO {
        this['rate'] = rate;
        return this;
    }
    public withLogs(logs: string): BatchOperationVO {
        this['logs'] = logs;
        return this;
    }
    public withGroups(groups: Array<BatchOperationVO>): BatchOperationVO {
        this['groups'] = groups;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchOperationVOOperationStatusEnum {
    RUNNING = 'RUNNING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
