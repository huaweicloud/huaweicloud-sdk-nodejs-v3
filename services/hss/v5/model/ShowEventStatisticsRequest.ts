

export class ShowEventStatisticsRequest {
    private 'enterprise_project_id'?: string;
    private 'last_days'?: number;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public category?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'container_name'?: string;
    private 'event_type'?: number;
    private 'event_types'?: Array<string>;
    private 'handle_status'?: string;
    public severity?: string;
    private 'event_class_ids'?: Array<string>;
    private 'severity_list'?: Array<string>;
    private 'attack_tag'?: string;
    private 'att_ck'?: string;
    private 'asset_value'?: string;
    private 'tag_list'?: Array<string>;
    private 'event_name'?: string;
    public source?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowEventStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLastDays(lastDays: number): ShowEventStatisticsRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
    public withBeginTime(beginTime: number): ShowEventStatisticsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ShowEventStatisticsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCategory(category: string): ShowEventStatisticsRequest {
        this['category'] = category;
        return this;
    }
    public withHostName(hostName: string): ShowEventStatisticsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ShowEventStatisticsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): ShowEventStatisticsRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ShowEventStatisticsRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withContainerName(containerName: string): ShowEventStatisticsRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withEventType(eventType: number): ShowEventStatisticsRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventTypes(eventTypes: Array<string>): ShowEventStatisticsRequest {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<string>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<string> | undefined {
        return this['event_types'];
    }
    public withHandleStatus(handleStatus: string): ShowEventStatisticsRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSeverity(severity: string): ShowEventStatisticsRequest {
        this['severity'] = severity;
        return this;
    }
    public withEventClassIds(eventClassIds: Array<string>): ShowEventStatisticsRequest {
        this['event_class_ids'] = eventClassIds;
        return this;
    }
    public set eventClassIds(eventClassIds: Array<string>  | undefined) {
        this['event_class_ids'] = eventClassIds;
    }
    public get eventClassIds(): Array<string> | undefined {
        return this['event_class_ids'];
    }
    public withSeverityList(severityList: Array<string>): ShowEventStatisticsRequest {
        this['severity_list'] = severityList;
        return this;
    }
    public set severityList(severityList: Array<string>  | undefined) {
        this['severity_list'] = severityList;
    }
    public get severityList(): Array<string> | undefined {
        return this['severity_list'];
    }
    public withAttackTag(attackTag: string): ShowEventStatisticsRequest {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withAttCk(attCk: string): ShowEventStatisticsRequest {
        this['att_ck'] = attCk;
        return this;
    }
    public set attCk(attCk: string  | undefined) {
        this['att_ck'] = attCk;
    }
    public get attCk(): string | undefined {
        return this['att_ck'];
    }
    public withAssetValue(assetValue: string): ShowEventStatisticsRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withTagList(tagList: Array<string>): ShowEventStatisticsRequest {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<string>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<string> | undefined {
        return this['tag_list'];
    }
    public withEventName(eventName: string): ShowEventStatisticsRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withSource(source: string): ShowEventStatisticsRequest {
        this['source'] = source;
        return this;
    }
}