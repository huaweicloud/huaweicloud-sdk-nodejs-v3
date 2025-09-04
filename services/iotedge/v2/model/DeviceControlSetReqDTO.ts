

export class DeviceControlSetReqDTO {
    private 'control_id'?: string;
    private 'service_id'?: string;
    public priority?: number;
    private 'end_time'?: number;
    public properties?: object;
    public constructor(controlId?: string, priority?: number, properties?: object) { 
        this['control_id'] = controlId;
        this['priority'] = priority;
        this['properties'] = properties;
    }
    public withControlId(controlId: string): DeviceControlSetReqDTO {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
    public withServiceId(serviceId: string): DeviceControlSetReqDTO {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withPriority(priority: number): DeviceControlSetReqDTO {
        this['priority'] = priority;
        return this;
    }
    public withEndTime(endTime: number): DeviceControlSetReqDTO {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withProperties(properties: object): DeviceControlSetReqDTO {
        this['properties'] = properties;
        return this;
    }
}