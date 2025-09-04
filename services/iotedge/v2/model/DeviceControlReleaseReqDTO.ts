

export class DeviceControlReleaseReqDTO {
    private 'control_id'?: string;
    private 'service_id'?: string;
    public priority?: number;
    public properties?: Array<string>;
    public constructor(controlId?: string, priority?: number, properties?: Array<string>) { 
        this['control_id'] = controlId;
        this['priority'] = priority;
        this['properties'] = properties;
    }
    public withControlId(controlId: string): DeviceControlReleaseReqDTO {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
    public withServiceId(serviceId: string): DeviceControlReleaseReqDTO {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withPriority(priority: number): DeviceControlReleaseReqDTO {
        this['priority'] = priority;
        return this;
    }
    public withProperties(properties: Array<string>): DeviceControlReleaseReqDTO {
        this['properties'] = properties;
        return this;
    }
}