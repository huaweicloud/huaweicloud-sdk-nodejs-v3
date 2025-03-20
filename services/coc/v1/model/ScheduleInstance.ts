import { TargetResource } from './TargetResource';


export class ScheduleInstance {
    private 'target_selection'?: ScheduleInstanceTargetSelectionEnum | string;
    private 'target_resource'?: TargetResource;
    private 'target_instances'?: string;
    private 'order_no'?: number;
    private 'batch_strategy'?: ScheduleInstanceBatchStrategyEnum | string;
    private 'sub_target_instances'?: Array<ScheduleInstance>;
    public constructor(targetSelection?: string, orderNo?: number) { 
        this['target_selection'] = targetSelection;
        this['order_no'] = orderNo;
    }
    public withTargetSelection(targetSelection: ScheduleInstanceTargetSelectionEnum | string): ScheduleInstance {
        this['target_selection'] = targetSelection;
        return this;
    }
    public set targetSelection(targetSelection: ScheduleInstanceTargetSelectionEnum | string  | undefined) {
        this['target_selection'] = targetSelection;
    }
    public get targetSelection(): ScheduleInstanceTargetSelectionEnum | string | undefined {
        return this['target_selection'];
    }
    public withTargetResource(targetResource: TargetResource): ScheduleInstance {
        this['target_resource'] = targetResource;
        return this;
    }
    public set targetResource(targetResource: TargetResource  | undefined) {
        this['target_resource'] = targetResource;
    }
    public get targetResource(): TargetResource | undefined {
        return this['target_resource'];
    }
    public withTargetInstances(targetInstances: string): ScheduleInstance {
        this['target_instances'] = targetInstances;
        return this;
    }
    public set targetInstances(targetInstances: string  | undefined) {
        this['target_instances'] = targetInstances;
    }
    public get targetInstances(): string | undefined {
        return this['target_instances'];
    }
    public withOrderNo(orderNo: number): ScheduleInstance {
        this['order_no'] = orderNo;
        return this;
    }
    public set orderNo(orderNo: number  | undefined) {
        this['order_no'] = orderNo;
    }
    public get orderNo(): number | undefined {
        return this['order_no'];
    }
    public withBatchStrategy(batchStrategy: ScheduleInstanceBatchStrategyEnum | string): ScheduleInstance {
        this['batch_strategy'] = batchStrategy;
        return this;
    }
    public set batchStrategy(batchStrategy: ScheduleInstanceBatchStrategyEnum | string  | undefined) {
        this['batch_strategy'] = batchStrategy;
    }
    public get batchStrategy(): ScheduleInstanceBatchStrategyEnum | string | undefined {
        return this['batch_strategy'];
    }
    public withSubTargetInstances(subTargetInstances: Array<ScheduleInstance>): ScheduleInstance {
        this['sub_target_instances'] = subTargetInstances;
        return this;
    }
    public set subTargetInstances(subTargetInstances: Array<ScheduleInstance>  | undefined) {
        this['sub_target_instances'] = subTargetInstances;
    }
    public get subTargetInstances(): Array<ScheduleInstance> | undefined {
        return this['sub_target_instances'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduleInstanceTargetSelectionEnum {
    ALL = 'ALL',
    MANUAL = 'MANUAL',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum ScheduleInstanceBatchStrategyEnum {
    AUTO_BATCH = 'AUTO_BATCH',
    MANUAL_BATCH = 'MANUAL_BATCH',
    NONE = 'NONE'
}
