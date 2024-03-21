

export class IsolateEventResponseInfo {
    private 'event_id'?: string;
    private 'event_class_id'?: string;
    private 'event_type'?: number;
    private 'event_name'?: string;
    public severity?: string;
    private 'container_name'?: string;
    private 'image_name'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'os_type'?: string;
    private 'host_status'?: string;
    private 'agent_status'?: string;
    private 'protect_status'?: string;
    private 'asset_value'?: string;
    private 'attack_phase'?: string;
    private 'attack_tag'?: string;
    private 'occur_time'?: number;
    private 'handle_time'?: number;
    private 'handle_status'?: string;
    private 'handle_method'?: string;
    public handler?: string;
    public recommendation?: string;
    public description?: string;
    private 'event_abstract'?: string;
    private 'event_count'?: number;
    public constructor() { 
    }
    public withEventId(eventId: string): IsolateEventResponseInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventClassId(eventClassId: string): IsolateEventResponseInfo {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventType(eventType: number): IsolateEventResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventName(eventName: string): IsolateEventResponseInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withSeverity(severity: string): IsolateEventResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withContainerName(containerName: string): IsolateEventResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withImageName(imageName: string): IsolateEventResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withHostName(hostName: string): IsolateEventResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): IsolateEventResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): IsolateEventResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): IsolateEventResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withOsType(osType: string): IsolateEventResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withHostStatus(hostStatus: string): IsolateEventResponseInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: string): IsolateEventResponseInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withProtectStatus(protectStatus: string): IsolateEventResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withAssetValue(assetValue: string): IsolateEventResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withAttackPhase(attackPhase: string): IsolateEventResponseInfo {
        this['attack_phase'] = attackPhase;
        return this;
    }
    public set attackPhase(attackPhase: string  | undefined) {
        this['attack_phase'] = attackPhase;
    }
    public get attackPhase(): string | undefined {
        return this['attack_phase'];
    }
    public withAttackTag(attackTag: string): IsolateEventResponseInfo {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withOccurTime(occurTime: number): IsolateEventResponseInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withHandleTime(handleTime: number): IsolateEventResponseInfo {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
    public withHandleStatus(handleStatus: string): IsolateEventResponseInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withHandleMethod(handleMethod: string): IsolateEventResponseInfo {
        this['handle_method'] = handleMethod;
        return this;
    }
    public set handleMethod(handleMethod: string  | undefined) {
        this['handle_method'] = handleMethod;
    }
    public get handleMethod(): string | undefined {
        return this['handle_method'];
    }
    public withHandler(handler: string): IsolateEventResponseInfo {
        this['handler'] = handler;
        return this;
    }
    public withRecommendation(recommendation: string): IsolateEventResponseInfo {
        this['recommendation'] = recommendation;
        return this;
    }
    public withDescription(description: string): IsolateEventResponseInfo {
        this['description'] = description;
        return this;
    }
    public withEventAbstract(eventAbstract: string): IsolateEventResponseInfo {
        this['event_abstract'] = eventAbstract;
        return this;
    }
    public set eventAbstract(eventAbstract: string  | undefined) {
        this['event_abstract'] = eventAbstract;
    }
    public get eventAbstract(): string | undefined {
        return this['event_abstract'];
    }
    public withEventCount(eventCount: number): IsolateEventResponseInfo {
        this['event_count'] = eventCount;
        return this;
    }
    public set eventCount(eventCount: number  | undefined) {
        this['event_count'] = eventCount;
    }
    public get eventCount(): number | undefined {
        return this['event_count'];
    }
}