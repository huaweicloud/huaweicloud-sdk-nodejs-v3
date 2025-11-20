

export class ListBlackHoleEventRecordItem {
    private 'project_id'?: string;
    private 'tenant_name'?: string;
    public vip?: string;
    private 'vip_id'?: string;
    private 'instance_id'?: string;
    private 'event_type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(projectId?: string, tenantName?: string, vip?: string, vipId?: string, instanceId?: string, eventType?: string, startTime?: number) { 
        this['project_id'] = projectId;
        this['tenant_name'] = tenantName;
        this['vip'] = vip;
        this['vip_id'] = vipId;
        this['instance_id'] = instanceId;
        this['event_type'] = eventType;
        this['start_time'] = startTime;
    }
    public withProjectId(projectId: string): ListBlackHoleEventRecordItem {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTenantName(tenantName: string): ListBlackHoleEventRecordItem {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withVip(vip: string): ListBlackHoleEventRecordItem {
        this['vip'] = vip;
        return this;
    }
    public withVipId(vipId: string): ListBlackHoleEventRecordItem {
        this['vip_id'] = vipId;
        return this;
    }
    public set vipId(vipId: string  | undefined) {
        this['vip_id'] = vipId;
    }
    public get vipId(): string | undefined {
        return this['vip_id'];
    }
    public withInstanceId(instanceId: string): ListBlackHoleEventRecordItem {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEventType(eventType: string): ListBlackHoleEventRecordItem {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withStartTime(startTime: number): ListBlackHoleEventRecordItem {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListBlackHoleEventRecordItem {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}