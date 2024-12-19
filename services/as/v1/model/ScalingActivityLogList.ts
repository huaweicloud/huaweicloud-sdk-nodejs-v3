

export class ScalingActivityLogList {
    public status?: ScalingActivityLogListStatusEnum | string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public id?: string;
    private 'instance_removed_list'?: string;
    private 'instance_deleted_list'?: string;
    private 'instance_added_list'?: string;
    private 'scaling_value'?: number;
    public description?: string;
    private 'instance_value'?: number;
    private 'desire_value'?: number;
    public constructor() { 
    }
    public withStatus(status: ScalingActivityLogListStatusEnum | string): ScalingActivityLogList {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: Date): ScalingActivityLogList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ScalingActivityLogList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withId(id: string): ScalingActivityLogList {
        this['id'] = id;
        return this;
    }
    public withInstanceRemovedList(instanceRemovedList: string): ScalingActivityLogList {
        this['instance_removed_list'] = instanceRemovedList;
        return this;
    }
    public set instanceRemovedList(instanceRemovedList: string  | undefined) {
        this['instance_removed_list'] = instanceRemovedList;
    }
    public get instanceRemovedList(): string | undefined {
        return this['instance_removed_list'];
    }
    public withInstanceDeletedList(instanceDeletedList: string): ScalingActivityLogList {
        this['instance_deleted_list'] = instanceDeletedList;
        return this;
    }
    public set instanceDeletedList(instanceDeletedList: string  | undefined) {
        this['instance_deleted_list'] = instanceDeletedList;
    }
    public get instanceDeletedList(): string | undefined {
        return this['instance_deleted_list'];
    }
    public withInstanceAddedList(instanceAddedList: string): ScalingActivityLogList {
        this['instance_added_list'] = instanceAddedList;
        return this;
    }
    public set instanceAddedList(instanceAddedList: string  | undefined) {
        this['instance_added_list'] = instanceAddedList;
    }
    public get instanceAddedList(): string | undefined {
        return this['instance_added_list'];
    }
    public withScalingValue(scalingValue: number): ScalingActivityLogList {
        this['scaling_value'] = scalingValue;
        return this;
    }
    public set scalingValue(scalingValue: number  | undefined) {
        this['scaling_value'] = scalingValue;
    }
    public get scalingValue(): number | undefined {
        return this['scaling_value'];
    }
    public withDescription(description: string): ScalingActivityLogList {
        this['description'] = description;
        return this;
    }
    public withInstanceValue(instanceValue: number): ScalingActivityLogList {
        this['instance_value'] = instanceValue;
        return this;
    }
    public set instanceValue(instanceValue: number  | undefined) {
        this['instance_value'] = instanceValue;
    }
    public get instanceValue(): number | undefined {
        return this['instance_value'];
    }
    public withDesireValue(desireValue: number): ScalingActivityLogList {
        this['desire_value'] = desireValue;
        return this;
    }
    public set desireValue(desireValue: number  | undefined) {
        this['desire_value'] = desireValue;
    }
    public get desireValue(): number | undefined {
        return this['desire_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingActivityLogListStatusEnum {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    DOING = 'DOING'
}
