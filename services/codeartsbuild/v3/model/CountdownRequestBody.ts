

export class CountdownRequestBody {
    private 'service_type'?: string;
    private 'resource_id'?: string;
    private 'reminder_day'?: string;
    public constructor(serviceType?: string, resourceId?: string, reminderDay?: string) { 
        this['service_type'] = serviceType;
        this['resource_id'] = resourceId;
        this['reminder_day'] = reminderDay;
    }
    public withServiceType(serviceType: string): CountdownRequestBody {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withResourceId(resourceId: string): CountdownRequestBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withReminderDay(reminderDay: string): CountdownRequestBody {
        this['reminder_day'] = reminderDay;
        return this;
    }
    public set reminderDay(reminderDay: string  | undefined) {
        this['reminder_day'] = reminderDay;
    }
    public get reminderDay(): string | undefined {
        return this['reminder_day'];
    }
}