

export class SwitchoverTestRecord {
    public id?: string;
    private 'tenant_id'?: string;
    private 'resource_id'?: string;
    private 'resource_type'?: SwitchoverTestRecordResourceTypeEnum | string;
    public operation?: SwitchoverTestRecordOperationEnum | string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    private 'operate_status'?: SwitchoverTestRecordOperateStatusEnum | string;
    public constructor() { 
    }
    public withId(id: string): SwitchoverTestRecord {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): SwitchoverTestRecord {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withResourceId(resourceId: string): SwitchoverTestRecord {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: SwitchoverTestRecordResourceTypeEnum | string): SwitchoverTestRecord {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: SwitchoverTestRecordResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): SwitchoverTestRecordResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withOperation(operation: SwitchoverTestRecordOperationEnum | string): SwitchoverTestRecord {
        this['operation'] = operation;
        return this;
    }
    public withStartTime(startTime: Date): SwitchoverTestRecord {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): SwitchoverTestRecord {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withOperateStatus(operateStatus: SwitchoverTestRecordOperateStatusEnum | string): SwitchoverTestRecord {
        this['operate_status'] = operateStatus;
        return this;
    }
    public set operateStatus(operateStatus: SwitchoverTestRecordOperateStatusEnum | string  | undefined) {
        this['operate_status'] = operateStatus;
    }
    public get operateStatus(): SwitchoverTestRecordOperateStatusEnum | string | undefined {
        return this['operate_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchoverTestRecordResourceTypeEnum {
    VIRTUAL_INTERFACE = 'virtual_interface'
}
/**
    * @export
    * @enum {string}
    */
export enum SwitchoverTestRecordOperationEnum {
    SHUTDOWN = 'shutdown',
    UNDO_SHUTDOWN = 'undo_shutdown'
}
/**
    * @export
    * @enum {string}
    */
export enum SwitchoverTestRecordOperateStatusEnum {
    STARTING = 'STARTING',
    INPROGRESS = 'INPROGRESS',
    COMPLETE = 'COMPLETE',
    ERROR = 'ERROR'
}
