

export class ListSecurityEventsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'last_days'?: number;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'private_ip'?: string;
    private 'container_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'event_types'?: Array<number>;
    private 'handle_status'?: string;
    public severity?: string;
    public category?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'event_class_ids'?: Array<string>;
    public constructor(region?: string, category?: string) { 
        this['region'] = region;
        this['category'] = category;
    }
    public withRegion(region: string): ListSecurityEventsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSecurityEventsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLastDays(lastDays: number): ListSecurityEventsRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
    public withHostName(hostName: string): ListSecurityEventsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListSecurityEventsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): ListSecurityEventsRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withContainerName(containerName: string): ListSecurityEventsRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withOffset(offset: number): ListSecurityEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecurityEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEventTypes(eventTypes: Array<number>): ListSecurityEventsRequest {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<number>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<number> | undefined {
        return this['event_types'];
    }
    public withHandleStatus(handleStatus: string): ListSecurityEventsRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSeverity(severity: string): ListSecurityEventsRequest {
        this['severity'] = severity;
        return this;
    }
    public withCategory(category: string): ListSecurityEventsRequest {
        this['category'] = category;
        return this;
    }
    public withBeginTime(beginTime: string): ListSecurityEventsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListSecurityEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withEventClassIds(eventClassIds: Array<string>): ListSecurityEventsRequest {
        this['event_class_ids'] = eventClassIds;
        return this;
    }
    public set eventClassIds(eventClassIds: Array<string>  | undefined) {
        this['event_class_ids'] = eventClassIds;
    }
    public get eventClassIds(): Array<string> | undefined {
        return this['event_class_ids'];
    }
}