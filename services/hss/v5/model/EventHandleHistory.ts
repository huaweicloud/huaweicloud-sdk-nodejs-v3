

export class EventHandleHistory {
    private 'event_type'?: number;
    private 'host_name'?: string;
    private 'event_abstract'?: string;
    private 'attack_tag'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'asset_value'?: string;
    private 'occur_time'?: number;
    private 'handle_status'?: string;
    public notes?: string;
    private 'event_class_id'?: string;
    private 'event_name'?: string;
    private 'handle_time'?: number;
    private 'operate_type'?: string;
    public severity?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withEventType(eventType: number): EventHandleHistory {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withHostName(hostName: string): EventHandleHistory {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withEventAbstract(eventAbstract: string): EventHandleHistory {
        this['event_abstract'] = eventAbstract;
        return this;
    }
    public set eventAbstract(eventAbstract: string  | undefined) {
        this['event_abstract'] = eventAbstract;
    }
    public get eventAbstract(): string | undefined {
        return this['event_abstract'];
    }
    public withAttackTag(attackTag: string): EventHandleHistory {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withPrivateIp(privateIp: string): EventHandleHistory {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): EventHandleHistory {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withAssetValue(assetValue: string): EventHandleHistory {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withOccurTime(occurTime: number): EventHandleHistory {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withHandleStatus(handleStatus: string): EventHandleHistory {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withNotes(notes: string): EventHandleHistory {
        this['notes'] = notes;
        return this;
    }
    public withEventClassId(eventClassId: string): EventHandleHistory {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventName(eventName: string): EventHandleHistory {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withHandleTime(handleTime: number): EventHandleHistory {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
    public withOperateType(operateType: string): EventHandleHistory {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withSeverity(severity: string): EventHandleHistory {
        this['severity'] = severity;
        return this;
    }
    public withUserName(userName: string): EventHandleHistory {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}