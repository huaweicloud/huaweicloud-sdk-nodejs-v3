

export class ExportEventRequestRequest {
    private 'enterprise_project_id'?: string;
    private 'last_days'?: number;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'private_ip'?: string;
    private 'container_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'export_size'?: number;
    private 'event_type'?: number;
    private 'event_types'?: Array<number>;
    private 'handle_status'?: string;
    public severity?: string;
    public category?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'event_class_ids'?: Array<string>;
    private 'severity_list'?: Array<string>;
    private 'attack_tag'?: string;
    private 'asset_value'?: string;
    private 'tag_list'?: Array<string>;
    private 'att_ck'?: string;
    private 'event_name'?: string;
    private 'event_id_list'?: Array<string>;
    private 'auto_block'?: boolean;
    private 'cluster_id'?: string;
    private 'event_id'?: string;
    private 'public_ip'?: string;
    public body?: Array<Array<string>>;
    public constructor(category?: string, eventId?: string) { 
        this['category'] = category;
        this['event_id'] = eventId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportEventRequestRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLastDays(lastDays: number): ExportEventRequestRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
    public withHostName(hostName: string): ExportEventRequestRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ExportEventRequestRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): ExportEventRequestRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withContainerName(containerName: string): ExportEventRequestRequest {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withOffset(offset: number): ExportEventRequestRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ExportEventRequestRequest {
        this['limit'] = limit;
        return this;
    }
    public withExportSize(exportSize: number): ExportEventRequestRequest {
        this['export_size'] = exportSize;
        return this;
    }
    public set exportSize(exportSize: number  | undefined) {
        this['export_size'] = exportSize;
    }
    public get exportSize(): number | undefined {
        return this['export_size'];
    }
    public withEventType(eventType: number): ExportEventRequestRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventTypes(eventTypes: Array<number>): ExportEventRequestRequest {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<number>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<number> | undefined {
        return this['event_types'];
    }
    public withHandleStatus(handleStatus: string): ExportEventRequestRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withSeverity(severity: string): ExportEventRequestRequest {
        this['severity'] = severity;
        return this;
    }
    public withCategory(category: string): ExportEventRequestRequest {
        this['category'] = category;
        return this;
    }
    public withBeginTime(beginTime: number): ExportEventRequestRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ExportEventRequestRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withEventClassIds(eventClassIds: Array<string>): ExportEventRequestRequest {
        this['event_class_ids'] = eventClassIds;
        return this;
    }
    public set eventClassIds(eventClassIds: Array<string>  | undefined) {
        this['event_class_ids'] = eventClassIds;
    }
    public get eventClassIds(): Array<string> | undefined {
        return this['event_class_ids'];
    }
    public withSeverityList(severityList: Array<string>): ExportEventRequestRequest {
        this['severity_list'] = severityList;
        return this;
    }
    public set severityList(severityList: Array<string>  | undefined) {
        this['severity_list'] = severityList;
    }
    public get severityList(): Array<string> | undefined {
        return this['severity_list'];
    }
    public withAttackTag(attackTag: string): ExportEventRequestRequest {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withAssetValue(assetValue: string): ExportEventRequestRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withTagList(tagList: Array<string>): ExportEventRequestRequest {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<string>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<string> | undefined {
        return this['tag_list'];
    }
    public withAttCk(attCk: string): ExportEventRequestRequest {
        this['att_ck'] = attCk;
        return this;
    }
    public set attCk(attCk: string  | undefined) {
        this['att_ck'] = attCk;
    }
    public get attCk(): string | undefined {
        return this['att_ck'];
    }
    public withEventName(eventName: string): ExportEventRequestRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventIdList(eventIdList: Array<string>): ExportEventRequestRequest {
        this['event_id_list'] = eventIdList;
        return this;
    }
    public set eventIdList(eventIdList: Array<string>  | undefined) {
        this['event_id_list'] = eventIdList;
    }
    public get eventIdList(): Array<string> | undefined {
        return this['event_id_list'];
    }
    public withAutoBlock(autoBlock: boolean): ExportEventRequestRequest {
        this['auto_block'] = autoBlock;
        return this;
    }
    public set autoBlock(autoBlock: boolean  | undefined) {
        this['auto_block'] = autoBlock;
    }
    public get autoBlock(): boolean | undefined {
        return this['auto_block'];
    }
    public withClusterId(clusterId: string): ExportEventRequestRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withEventId(eventId: string): ExportEventRequestRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withPublicIp(publicIp: string): ExportEventRequestRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withBody(body: Array<Array<string>>): ExportEventRequestRequest {
        this['body'] = body;
        return this;
    }
}