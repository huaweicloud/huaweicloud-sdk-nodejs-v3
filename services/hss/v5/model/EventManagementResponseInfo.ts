import { EventDetailResponseInfo } from './EventDetailResponseInfo';
import { EventFileResponseInfo } from './EventFileResponseInfo';
import { EventProcessResponseInfo } from './EventProcessResponseInfo';
import { EventResourceResponseInfo } from './EventResourceResponseInfo';
import { EventUserResponseInfo } from './EventUserResponseInfo';


export class EventManagementResponseInfo {
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
    private 'operate_accept_list'?: Array<string>;
    private 'operate_detail_list'?: Array<EventDetailResponseInfo>;
    private 'forensic_info'?: object;
    private 'resource_info'?: EventResourceResponseInfo;
    private 'geo_info'?: object;
    private 'malware_info'?: object;
    private 'network_info'?: object;
    private 'app_info'?: object;
    private 'system_info'?: object;
    private 'extend_info'?: object;
    public recommendation?: string;
    public description?: string;
    private 'event_abstract'?: string;
    private 'process_info_list'?: Array<EventProcessResponseInfo>;
    private 'user_info_list'?: Array<EventUserResponseInfo>;
    private 'file_info_list'?: Array<EventFileResponseInfo>;
    private 'event_details'?: string;
    private 'tag_list'?: Array<string>;
    private 'event_count'?: number;
    private 'operate_type'?: string;
    public constructor() { 
    }
    public withEventId(eventId: string): EventManagementResponseInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventClassId(eventClassId: string): EventManagementResponseInfo {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventType(eventType: number): EventManagementResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventName(eventName: string): EventManagementResponseInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withSeverity(severity: string): EventManagementResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withContainerName(containerName: string): EventManagementResponseInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withImageName(imageName: string): EventManagementResponseInfo {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withHostName(hostName: string): EventManagementResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): EventManagementResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): EventManagementResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): EventManagementResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withOsType(osType: string): EventManagementResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withHostStatus(hostStatus: string): EventManagementResponseInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: string): EventManagementResponseInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withProtectStatus(protectStatus: string): EventManagementResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withAssetValue(assetValue: string): EventManagementResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withAttackPhase(attackPhase: string): EventManagementResponseInfo {
        this['attack_phase'] = attackPhase;
        return this;
    }
    public set attackPhase(attackPhase: string  | undefined) {
        this['attack_phase'] = attackPhase;
    }
    public get attackPhase(): string | undefined {
        return this['attack_phase'];
    }
    public withAttackTag(attackTag: string): EventManagementResponseInfo {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withOccurTime(occurTime: number): EventManagementResponseInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withHandleTime(handleTime: number): EventManagementResponseInfo {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
    public withHandleStatus(handleStatus: string): EventManagementResponseInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withHandleMethod(handleMethod: string): EventManagementResponseInfo {
        this['handle_method'] = handleMethod;
        return this;
    }
    public set handleMethod(handleMethod: string  | undefined) {
        this['handle_method'] = handleMethod;
    }
    public get handleMethod(): string | undefined {
        return this['handle_method'];
    }
    public withHandler(handler: string): EventManagementResponseInfo {
        this['handler'] = handler;
        return this;
    }
    public withOperateAcceptList(operateAcceptList: Array<string>): EventManagementResponseInfo {
        this['operate_accept_list'] = operateAcceptList;
        return this;
    }
    public set operateAcceptList(operateAcceptList: Array<string>  | undefined) {
        this['operate_accept_list'] = operateAcceptList;
    }
    public get operateAcceptList(): Array<string> | undefined {
        return this['operate_accept_list'];
    }
    public withOperateDetailList(operateDetailList: Array<EventDetailResponseInfo>): EventManagementResponseInfo {
        this['operate_detail_list'] = operateDetailList;
        return this;
    }
    public set operateDetailList(operateDetailList: Array<EventDetailResponseInfo>  | undefined) {
        this['operate_detail_list'] = operateDetailList;
    }
    public get operateDetailList(): Array<EventDetailResponseInfo> | undefined {
        return this['operate_detail_list'];
    }
    public withForensicInfo(forensicInfo: object): EventManagementResponseInfo {
        this['forensic_info'] = forensicInfo;
        return this;
    }
    public set forensicInfo(forensicInfo: object  | undefined) {
        this['forensic_info'] = forensicInfo;
    }
    public get forensicInfo(): object | undefined {
        return this['forensic_info'];
    }
    public withResourceInfo(resourceInfo: EventResourceResponseInfo): EventManagementResponseInfo {
        this['resource_info'] = resourceInfo;
        return this;
    }
    public set resourceInfo(resourceInfo: EventResourceResponseInfo  | undefined) {
        this['resource_info'] = resourceInfo;
    }
    public get resourceInfo(): EventResourceResponseInfo | undefined {
        return this['resource_info'];
    }
    public withGeoInfo(geoInfo: object): EventManagementResponseInfo {
        this['geo_info'] = geoInfo;
        return this;
    }
    public set geoInfo(geoInfo: object  | undefined) {
        this['geo_info'] = geoInfo;
    }
    public get geoInfo(): object | undefined {
        return this['geo_info'];
    }
    public withMalwareInfo(malwareInfo: object): EventManagementResponseInfo {
        this['malware_info'] = malwareInfo;
        return this;
    }
    public set malwareInfo(malwareInfo: object  | undefined) {
        this['malware_info'] = malwareInfo;
    }
    public get malwareInfo(): object | undefined {
        return this['malware_info'];
    }
    public withNetworkInfo(networkInfo: object): EventManagementResponseInfo {
        this['network_info'] = networkInfo;
        return this;
    }
    public set networkInfo(networkInfo: object  | undefined) {
        this['network_info'] = networkInfo;
    }
    public get networkInfo(): object | undefined {
        return this['network_info'];
    }
    public withAppInfo(appInfo: object): EventManagementResponseInfo {
        this['app_info'] = appInfo;
        return this;
    }
    public set appInfo(appInfo: object  | undefined) {
        this['app_info'] = appInfo;
    }
    public get appInfo(): object | undefined {
        return this['app_info'];
    }
    public withSystemInfo(systemInfo: object): EventManagementResponseInfo {
        this['system_info'] = systemInfo;
        return this;
    }
    public set systemInfo(systemInfo: object  | undefined) {
        this['system_info'] = systemInfo;
    }
    public get systemInfo(): object | undefined {
        return this['system_info'];
    }
    public withExtendInfo(extendInfo: object): EventManagementResponseInfo {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: object  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): object | undefined {
        return this['extend_info'];
    }
    public withRecommendation(recommendation: string): EventManagementResponseInfo {
        this['recommendation'] = recommendation;
        return this;
    }
    public withDescription(description: string): EventManagementResponseInfo {
        this['description'] = description;
        return this;
    }
    public withEventAbstract(eventAbstract: string): EventManagementResponseInfo {
        this['event_abstract'] = eventAbstract;
        return this;
    }
    public set eventAbstract(eventAbstract: string  | undefined) {
        this['event_abstract'] = eventAbstract;
    }
    public get eventAbstract(): string | undefined {
        return this['event_abstract'];
    }
    public withProcessInfoList(processInfoList: Array<EventProcessResponseInfo>): EventManagementResponseInfo {
        this['process_info_list'] = processInfoList;
        return this;
    }
    public set processInfoList(processInfoList: Array<EventProcessResponseInfo>  | undefined) {
        this['process_info_list'] = processInfoList;
    }
    public get processInfoList(): Array<EventProcessResponseInfo> | undefined {
        return this['process_info_list'];
    }
    public withUserInfoList(userInfoList: Array<EventUserResponseInfo>): EventManagementResponseInfo {
        this['user_info_list'] = userInfoList;
        return this;
    }
    public set userInfoList(userInfoList: Array<EventUserResponseInfo>  | undefined) {
        this['user_info_list'] = userInfoList;
    }
    public get userInfoList(): Array<EventUserResponseInfo> | undefined {
        return this['user_info_list'];
    }
    public withFileInfoList(fileInfoList: Array<EventFileResponseInfo>): EventManagementResponseInfo {
        this['file_info_list'] = fileInfoList;
        return this;
    }
    public set fileInfoList(fileInfoList: Array<EventFileResponseInfo>  | undefined) {
        this['file_info_list'] = fileInfoList;
    }
    public get fileInfoList(): Array<EventFileResponseInfo> | undefined {
        return this['file_info_list'];
    }
    public withEventDetails(eventDetails: string): EventManagementResponseInfo {
        this['event_details'] = eventDetails;
        return this;
    }
    public set eventDetails(eventDetails: string  | undefined) {
        this['event_details'] = eventDetails;
    }
    public get eventDetails(): string | undefined {
        return this['event_details'];
    }
    public withTagList(tagList: Array<string>): EventManagementResponseInfo {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<string>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<string> | undefined {
        return this['tag_list'];
    }
    public withEventCount(eventCount: number): EventManagementResponseInfo {
        this['event_count'] = eventCount;
        return this;
    }
    public set eventCount(eventCount: number  | undefined) {
        this['event_count'] = eventCount;
    }
    public get eventCount(): number | undefined {
        return this['event_count'];
    }
    public withOperateType(operateType: string): EventManagementResponseInfo {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
}