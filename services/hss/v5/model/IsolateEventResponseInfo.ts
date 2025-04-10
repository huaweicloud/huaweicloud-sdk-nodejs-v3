import { EventDetailResponseInfo } from './EventDetailResponseInfo';


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
    private 'recent_time'?: number;
    private 'handle_time'?: number;
    private 'handle_status'?: string;
    private 'handle_method'?: string;
    public handler?: string;
    public memo?: string;
    private 'operate_accept_list'?: Array<string>;
    private 'operate_detail_list'?: Array<EventDetailResponseInfo>;
    private 'forensic_info'?: object;
    private 'resource_info'?: object;
    private 'geo_info'?: object;
    private 'network_info'?: object;
    private 'app_info'?: object;
    private 'system_info'?: object;
    private 'malware_info'?: object;
    private 'extend_info'?: object;
    public recommendation?: string;
    private 'att_ck'?: string;
    private 'event_details'?: string;
    public confidence?: number;
    private 'process_info_list'?: object;
    private 'user_info_list'?: object;
    private 'file_info_list'?: object;
    private 'registry_info_list'?: object;
    private 'cluster_info'?: object;
    private 'tag_list'?: Array<string>;
    public description?: string;
    private 'event_abstract'?: string;
    private 'event_count'?: number;
    private 'cluster_id'?: string;
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
    public withRecentTime(recentTime: number): IsolateEventResponseInfo {
        this['recent_time'] = recentTime;
        return this;
    }
    public set recentTime(recentTime: number  | undefined) {
        this['recent_time'] = recentTime;
    }
    public get recentTime(): number | undefined {
        return this['recent_time'];
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
    public withMemo(memo: string): IsolateEventResponseInfo {
        this['memo'] = memo;
        return this;
    }
    public withOperateAcceptList(operateAcceptList: Array<string>): IsolateEventResponseInfo {
        this['operate_accept_list'] = operateAcceptList;
        return this;
    }
    public set operateAcceptList(operateAcceptList: Array<string>  | undefined) {
        this['operate_accept_list'] = operateAcceptList;
    }
    public get operateAcceptList(): Array<string> | undefined {
        return this['operate_accept_list'];
    }
    public withOperateDetailList(operateDetailList: Array<EventDetailResponseInfo>): IsolateEventResponseInfo {
        this['operate_detail_list'] = operateDetailList;
        return this;
    }
    public set operateDetailList(operateDetailList: Array<EventDetailResponseInfo>  | undefined) {
        this['operate_detail_list'] = operateDetailList;
    }
    public get operateDetailList(): Array<EventDetailResponseInfo> | undefined {
        return this['operate_detail_list'];
    }
    public withForensicInfo(forensicInfo: object): IsolateEventResponseInfo {
        this['forensic_info'] = forensicInfo;
        return this;
    }
    public set forensicInfo(forensicInfo: object  | undefined) {
        this['forensic_info'] = forensicInfo;
    }
    public get forensicInfo(): object | undefined {
        return this['forensic_info'];
    }
    public withResourceInfo(resourceInfo: object): IsolateEventResponseInfo {
        this['resource_info'] = resourceInfo;
        return this;
    }
    public set resourceInfo(resourceInfo: object  | undefined) {
        this['resource_info'] = resourceInfo;
    }
    public get resourceInfo(): object | undefined {
        return this['resource_info'];
    }
    public withGeoInfo(geoInfo: object): IsolateEventResponseInfo {
        this['geo_info'] = geoInfo;
        return this;
    }
    public set geoInfo(geoInfo: object  | undefined) {
        this['geo_info'] = geoInfo;
    }
    public get geoInfo(): object | undefined {
        return this['geo_info'];
    }
    public withNetworkInfo(networkInfo: object): IsolateEventResponseInfo {
        this['network_info'] = networkInfo;
        return this;
    }
    public set networkInfo(networkInfo: object  | undefined) {
        this['network_info'] = networkInfo;
    }
    public get networkInfo(): object | undefined {
        return this['network_info'];
    }
    public withAppInfo(appInfo: object): IsolateEventResponseInfo {
        this['app_info'] = appInfo;
        return this;
    }
    public set appInfo(appInfo: object  | undefined) {
        this['app_info'] = appInfo;
    }
    public get appInfo(): object | undefined {
        return this['app_info'];
    }
    public withSystemInfo(systemInfo: object): IsolateEventResponseInfo {
        this['system_info'] = systemInfo;
        return this;
    }
    public set systemInfo(systemInfo: object  | undefined) {
        this['system_info'] = systemInfo;
    }
    public get systemInfo(): object | undefined {
        return this['system_info'];
    }
    public withMalwareInfo(malwareInfo: object): IsolateEventResponseInfo {
        this['malware_info'] = malwareInfo;
        return this;
    }
    public set malwareInfo(malwareInfo: object  | undefined) {
        this['malware_info'] = malwareInfo;
    }
    public get malwareInfo(): object | undefined {
        return this['malware_info'];
    }
    public withExtendInfo(extendInfo: object): IsolateEventResponseInfo {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: object  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): object | undefined {
        return this['extend_info'];
    }
    public withRecommendation(recommendation: string): IsolateEventResponseInfo {
        this['recommendation'] = recommendation;
        return this;
    }
    public withAttCk(attCk: string): IsolateEventResponseInfo {
        this['att_ck'] = attCk;
        return this;
    }
    public set attCk(attCk: string  | undefined) {
        this['att_ck'] = attCk;
    }
    public get attCk(): string | undefined {
        return this['att_ck'];
    }
    public withEventDetails(eventDetails: string): IsolateEventResponseInfo {
        this['event_details'] = eventDetails;
        return this;
    }
    public set eventDetails(eventDetails: string  | undefined) {
        this['event_details'] = eventDetails;
    }
    public get eventDetails(): string | undefined {
        return this['event_details'];
    }
    public withConfidence(confidence: number): IsolateEventResponseInfo {
        this['confidence'] = confidence;
        return this;
    }
    public withProcessInfoList(processInfoList: object): IsolateEventResponseInfo {
        this['process_info_list'] = processInfoList;
        return this;
    }
    public set processInfoList(processInfoList: object  | undefined) {
        this['process_info_list'] = processInfoList;
    }
    public get processInfoList(): object | undefined {
        return this['process_info_list'];
    }
    public withUserInfoList(userInfoList: object): IsolateEventResponseInfo {
        this['user_info_list'] = userInfoList;
        return this;
    }
    public set userInfoList(userInfoList: object  | undefined) {
        this['user_info_list'] = userInfoList;
    }
    public get userInfoList(): object | undefined {
        return this['user_info_list'];
    }
    public withFileInfoList(fileInfoList: object): IsolateEventResponseInfo {
        this['file_info_list'] = fileInfoList;
        return this;
    }
    public set fileInfoList(fileInfoList: object  | undefined) {
        this['file_info_list'] = fileInfoList;
    }
    public get fileInfoList(): object | undefined {
        return this['file_info_list'];
    }
    public withRegistryInfoList(registryInfoList: object): IsolateEventResponseInfo {
        this['registry_info_list'] = registryInfoList;
        return this;
    }
    public set registryInfoList(registryInfoList: object  | undefined) {
        this['registry_info_list'] = registryInfoList;
    }
    public get registryInfoList(): object | undefined {
        return this['registry_info_list'];
    }
    public withClusterInfo(clusterInfo: object): IsolateEventResponseInfo {
        this['cluster_info'] = clusterInfo;
        return this;
    }
    public set clusterInfo(clusterInfo: object  | undefined) {
        this['cluster_info'] = clusterInfo;
    }
    public get clusterInfo(): object | undefined {
        return this['cluster_info'];
    }
    public withTagList(tagList: Array<string>): IsolateEventResponseInfo {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<string>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<string> | undefined {
        return this['tag_list'];
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
    public withClusterId(clusterId: string): IsolateEventResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}