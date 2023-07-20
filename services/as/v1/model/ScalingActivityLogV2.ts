import { ModifyLb } from './ModifyLb';
import { ScalingInstance } from './ScalingInstance';


export class ScalingActivityLogV2 {
    public status?: ScalingActivityLogV2StatusEnum | string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public id?: string;
    private 'instance_removed_list'?: Array<ScalingInstance>;
    private 'instance_deleted_list'?: Array<ScalingInstance>;
    private 'instance_added_list'?: Array<ScalingInstance>;
    private 'instance_failed_list'?: Array<ScalingInstance>;
    private 'instance_standby_list'?: Array<ScalingInstance>;
    private 'scaling_value'?: string;
    public description?: string;
    private 'instance_value'?: number;
    private 'desire_value'?: number;
    private 'lb_bind_success_list'?: Array<ModifyLb>;
    private 'lb_bind_failed_list'?: Array<ModifyLb>;
    private 'lb_unbind_success_list'?: Array<ModifyLb>;
    private 'lb_unbind_failed_list'?: Array<ModifyLb>;
    public type?: string;
    public constructor() { 
    }
    public withStatus(status: ScalingActivityLogV2StatusEnum | string): ScalingActivityLogV2 {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: Date): ScalingActivityLogV2 {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ScalingActivityLogV2 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withId(id: string): ScalingActivityLogV2 {
        this['id'] = id;
        return this;
    }
    public withInstanceRemovedList(instanceRemovedList: Array<ScalingInstance>): ScalingActivityLogV2 {
        this['instance_removed_list'] = instanceRemovedList;
        return this;
    }
    public set instanceRemovedList(instanceRemovedList: Array<ScalingInstance>  | undefined) {
        this['instance_removed_list'] = instanceRemovedList;
    }
    public get instanceRemovedList(): Array<ScalingInstance> | undefined {
        return this['instance_removed_list'];
    }
    public withInstanceDeletedList(instanceDeletedList: Array<ScalingInstance>): ScalingActivityLogV2 {
        this['instance_deleted_list'] = instanceDeletedList;
        return this;
    }
    public set instanceDeletedList(instanceDeletedList: Array<ScalingInstance>  | undefined) {
        this['instance_deleted_list'] = instanceDeletedList;
    }
    public get instanceDeletedList(): Array<ScalingInstance> | undefined {
        return this['instance_deleted_list'];
    }
    public withInstanceAddedList(instanceAddedList: Array<ScalingInstance>): ScalingActivityLogV2 {
        this['instance_added_list'] = instanceAddedList;
        return this;
    }
    public set instanceAddedList(instanceAddedList: Array<ScalingInstance>  | undefined) {
        this['instance_added_list'] = instanceAddedList;
    }
    public get instanceAddedList(): Array<ScalingInstance> | undefined {
        return this['instance_added_list'];
    }
    public withInstanceFailedList(instanceFailedList: Array<ScalingInstance>): ScalingActivityLogV2 {
        this['instance_failed_list'] = instanceFailedList;
        return this;
    }
    public set instanceFailedList(instanceFailedList: Array<ScalingInstance>  | undefined) {
        this['instance_failed_list'] = instanceFailedList;
    }
    public get instanceFailedList(): Array<ScalingInstance> | undefined {
        return this['instance_failed_list'];
    }
    public withInstanceStandbyList(instanceStandbyList: Array<ScalingInstance>): ScalingActivityLogV2 {
        this['instance_standby_list'] = instanceStandbyList;
        return this;
    }
    public set instanceStandbyList(instanceStandbyList: Array<ScalingInstance>  | undefined) {
        this['instance_standby_list'] = instanceStandbyList;
    }
    public get instanceStandbyList(): Array<ScalingInstance> | undefined {
        return this['instance_standby_list'];
    }
    public withScalingValue(scalingValue: string): ScalingActivityLogV2 {
        this['scaling_value'] = scalingValue;
        return this;
    }
    public set scalingValue(scalingValue: string  | undefined) {
        this['scaling_value'] = scalingValue;
    }
    public get scalingValue(): string | undefined {
        return this['scaling_value'];
    }
    public withDescription(description: string): ScalingActivityLogV2 {
        this['description'] = description;
        return this;
    }
    public withInstanceValue(instanceValue: number): ScalingActivityLogV2 {
        this['instance_value'] = instanceValue;
        return this;
    }
    public set instanceValue(instanceValue: number  | undefined) {
        this['instance_value'] = instanceValue;
    }
    public get instanceValue(): number | undefined {
        return this['instance_value'];
    }
    public withDesireValue(desireValue: number): ScalingActivityLogV2 {
        this['desire_value'] = desireValue;
        return this;
    }
    public set desireValue(desireValue: number  | undefined) {
        this['desire_value'] = desireValue;
    }
    public get desireValue(): number | undefined {
        return this['desire_value'];
    }
    public withLbBindSuccessList(lbBindSuccessList: Array<ModifyLb>): ScalingActivityLogV2 {
        this['lb_bind_success_list'] = lbBindSuccessList;
        return this;
    }
    public set lbBindSuccessList(lbBindSuccessList: Array<ModifyLb>  | undefined) {
        this['lb_bind_success_list'] = lbBindSuccessList;
    }
    public get lbBindSuccessList(): Array<ModifyLb> | undefined {
        return this['lb_bind_success_list'];
    }
    public withLbBindFailedList(lbBindFailedList: Array<ModifyLb>): ScalingActivityLogV2 {
        this['lb_bind_failed_list'] = lbBindFailedList;
        return this;
    }
    public set lbBindFailedList(lbBindFailedList: Array<ModifyLb>  | undefined) {
        this['lb_bind_failed_list'] = lbBindFailedList;
    }
    public get lbBindFailedList(): Array<ModifyLb> | undefined {
        return this['lb_bind_failed_list'];
    }
    public withLbUnbindSuccessList(lbUnbindSuccessList: Array<ModifyLb>): ScalingActivityLogV2 {
        this['lb_unbind_success_list'] = lbUnbindSuccessList;
        return this;
    }
    public set lbUnbindSuccessList(lbUnbindSuccessList: Array<ModifyLb>  | undefined) {
        this['lb_unbind_success_list'] = lbUnbindSuccessList;
    }
    public get lbUnbindSuccessList(): Array<ModifyLb> | undefined {
        return this['lb_unbind_success_list'];
    }
    public withLbUnbindFailedList(lbUnbindFailedList: Array<ModifyLb>): ScalingActivityLogV2 {
        this['lb_unbind_failed_list'] = lbUnbindFailedList;
        return this;
    }
    public set lbUnbindFailedList(lbUnbindFailedList: Array<ModifyLb>  | undefined) {
        this['lb_unbind_failed_list'] = lbUnbindFailedList;
    }
    public get lbUnbindFailedList(): Array<ModifyLb> | undefined {
        return this['lb_unbind_failed_list'];
    }
    public withType(type: string): ScalingActivityLogV2 {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingActivityLogV2StatusEnum {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    DING = 'DING'
}
