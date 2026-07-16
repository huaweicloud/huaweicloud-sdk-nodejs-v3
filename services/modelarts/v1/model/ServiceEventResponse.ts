

export class ServiceEventResponse {
    public id?: string;
    private 'service_id'?: string;
    private 'service_version_id'?: string;
    private 'event_count'?: number;
    private 'event_type'?: string;
    private 'event_info'?: string;
    private 'event_info_cn'?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    public constructor() { 
    }
    public withId(id: string): ServiceEventResponse {
        this['id'] = id;
        return this;
    }
    public withServiceId(serviceId: string): ServiceEventResponse {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withServiceVersionId(serviceVersionId: string): ServiceEventResponse {
        this['service_version_id'] = serviceVersionId;
        return this;
    }
    public set serviceVersionId(serviceVersionId: string  | undefined) {
        this['service_version_id'] = serviceVersionId;
    }
    public get serviceVersionId(): string | undefined {
        return this['service_version_id'];
    }
    public withEventCount(eventCount: number): ServiceEventResponse {
        this['event_count'] = eventCount;
        return this;
    }
    public set eventCount(eventCount: number  | undefined) {
        this['event_count'] = eventCount;
    }
    public get eventCount(): number | undefined {
        return this['event_count'];
    }
    public withEventType(eventType: string): ServiceEventResponse {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withEventInfo(eventInfo: string): ServiceEventResponse {
        this['event_info'] = eventInfo;
        return this;
    }
    public set eventInfo(eventInfo: string  | undefined) {
        this['event_info'] = eventInfo;
    }
    public get eventInfo(): string | undefined {
        return this['event_info'];
    }
    public withEventInfoCn(eventInfoCn: string): ServiceEventResponse {
        this['event_info_cn'] = eventInfoCn;
        return this;
    }
    public set eventInfoCn(eventInfoCn: string  | undefined) {
        this['event_info_cn'] = eventInfoCn;
    }
    public get eventInfoCn(): string | undefined {
        return this['event_info_cn'];
    }
    public withCreateAt(createAt: number): ServiceEventResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): ServiceEventResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}