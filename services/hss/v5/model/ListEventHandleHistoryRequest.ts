

export class ListEventHandleHistoryRequest {
    private 'enterprise_project_id'?: string;
    public severity?: string;
    private 'attack_tag'?: string;
    private 'asset_value'?: string;
    private 'event_class_ids'?: Array<string>;
    private 'event_name'?: string;
    private 'event_type'?: number;
    private 'host_name'?: string;
    private 'handle_status'?: string;
    private 'host_ip'?: string;
    public limit?: number;
    public offset?: number;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEventHandleHistoryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSeverity(severity: string): ListEventHandleHistoryRequest {
        this['severity'] = severity;
        return this;
    }
    public withAttackTag(attackTag: string): ListEventHandleHistoryRequest {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withAssetValue(assetValue: string): ListEventHandleHistoryRequest {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withEventClassIds(eventClassIds: Array<string>): ListEventHandleHistoryRequest {
        this['event_class_ids'] = eventClassIds;
        return this;
    }
    public set eventClassIds(eventClassIds: Array<string>  | undefined) {
        this['event_class_ids'] = eventClassIds;
    }
    public get eventClassIds(): Array<string> | undefined {
        return this['event_class_ids'];
    }
    public withEventName(eventName: string): ListEventHandleHistoryRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventType(eventType: number): ListEventHandleHistoryRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withHostName(hostName: string): ListEventHandleHistoryRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHandleStatus(handleStatus: string): ListEventHandleHistoryRequest {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withHostIp(hostIp: string): ListEventHandleHistoryRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withLimit(limit: number): ListEventHandleHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEventHandleHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withPublicIp(publicIp: string): ListEventHandleHistoryRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): ListEventHandleHistoryRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withSortDir(sortDir: string): ListEventHandleHistoryRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListEventHandleHistoryRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
}