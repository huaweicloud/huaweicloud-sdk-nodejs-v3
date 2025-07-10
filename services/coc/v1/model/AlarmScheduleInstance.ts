

export class AlarmScheduleInstance {
    private 'target_selection'?: AlarmScheduleInstanceTargetSelectionEnum | string;
    private 'target_instances'?: string;
    private 'order_no'?: number;
    private 'batch_strategy'?: AlarmScheduleInstanceBatchStrategyEnum | string;
    private 'sub_target_instances'?: Array<AlarmScheduleInstance>;
    public constructor(targetSelection?: string, orderNo?: number) { 
        this['target_selection'] = targetSelection;
        this['order_no'] = orderNo;
    }
    public withTargetSelection(targetSelection: AlarmScheduleInstanceTargetSelectionEnum | string): AlarmScheduleInstance {
        this['target_selection'] = targetSelection;
        return this;
    }
    public set targetSelection(targetSelection: AlarmScheduleInstanceTargetSelectionEnum | string  | undefined) {
        this['target_selection'] = targetSelection;
    }
    public get targetSelection(): AlarmScheduleInstanceTargetSelectionEnum | string | undefined {
        return this['target_selection'];
    }
    public withTargetInstances(targetInstances: string): AlarmScheduleInstance {
        this['target_instances'] = targetInstances;
        return this;
    }
    public set targetInstances(targetInstances: string  | undefined) {
        this['target_instances'] = targetInstances;
    }
    public get targetInstances(): string | undefined {
        return this['target_instances'];
    }
    public withOrderNo(orderNo: number): AlarmScheduleInstance {
        this['order_no'] = orderNo;
        return this;
    }
    public set orderNo(orderNo: number  | undefined) {
        this['order_no'] = orderNo;
    }
    public get orderNo(): number | undefined {
        return this['order_no'];
    }
    public withBatchStrategy(batchStrategy: AlarmScheduleInstanceBatchStrategyEnum | string): AlarmScheduleInstance {
        this['batch_strategy'] = batchStrategy;
        return this;
    }
    public set batchStrategy(batchStrategy: AlarmScheduleInstanceBatchStrategyEnum | string  | undefined) {
        this['batch_strategy'] = batchStrategy;
    }
    public get batchStrategy(): AlarmScheduleInstanceBatchStrategyEnum | string | undefined {
        return this['batch_strategy'];
    }
    public withSubTargetInstances(subTargetInstances: Array<AlarmScheduleInstance>): AlarmScheduleInstance {
        this['sub_target_instances'] = subTargetInstances;
        return this;
    }
    public set subTargetInstances(subTargetInstances: Array<AlarmScheduleInstance>  | undefined) {
        this['sub_target_instances'] = subTargetInstances;
    }
    public get subTargetInstances(): Array<AlarmScheduleInstance> | undefined {
        return this['sub_target_instances'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmScheduleInstanceTargetSelectionEnum {
    ALL = 'ALL',
    MANUAL = 'MANUAL',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum AlarmScheduleInstanceBatchStrategyEnum {
    AUTO_BATCH = 'AUTO_BATCH',
    MANUAL_BATCH = 'MANUAL_BATCH',
    NONE = 'NONE'
}
