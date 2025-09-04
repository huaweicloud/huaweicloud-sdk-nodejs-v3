

export class ActiveControlRspDTO {
    private 'control_type'?: string;
    private 'control_id'?: string;
    public priority?: number;
    public value?: object;
    private 'end_time'?: number;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withControlType(controlType: string): ActiveControlRspDTO {
        this['control_type'] = controlType;
        return this;
    }
    public set controlType(controlType: string  | undefined) {
        this['control_type'] = controlType;
    }
    public get controlType(): string | undefined {
        return this['control_type'];
    }
    public withControlId(controlId: string): ActiveControlRspDTO {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
    public withPriority(priority: number): ActiveControlRspDTO {
        this['priority'] = priority;
        return this;
    }
    public withValue(value: object): ActiveControlRspDTO {
        this['value'] = value;
        return this;
    }
    public withEndTime(endTime: number): ActiveControlRspDTO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCreateTime(createTime: number): ActiveControlRspDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}