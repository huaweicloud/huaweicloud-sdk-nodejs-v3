import { BasePathDTO } from './BasePathDTO';
import { DeviceAuthInfoDisplayDTO } from './DeviceAuthInfoDisplayDTO';
import { DeviceDataRecord } from './DeviceDataRecord';
import { HaConfigDTO } from './HaConfigDTO';
import { LogConfigDTO } from './LogConfigDTO';
import { Nic } from './Nic';
import { OfflineCacheConfigsDTO } from './OfflineCacheConfigsDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEdgeNodeResponse extends SdkResponse {
    private 'log_configs'?: Array<LogConfigDTO>;
    private 'ha_config'?: HaConfigDTO;
    private 'edge_node_id'?: string;
    private 'instance_id'?: string;
    private 'product_id'?: string;
    private 'product_name'?: string;
    private 'space_id'?: string;
    private 'resource_spec_types'?: Array<string>;
    private 'resource_ids'?: Array<string>;
    public ips?: Array<string>;
    public name?: string;
    public state?: string;
    private 'software_version'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'os_name'?: string;
    public arch?: string;
    private 'host_name'?: string;
    public nics?: Array<Nic>;
    public specification?: string;
    private 'ai_card_type'?: string;
    private 'npu_library_path'?: string;
    private 'container_version'?: string;
    public type?: string;
    private 'security_level'?: string;
    private 'reliability_level'?: string;
    private 'storage_period'?: number;
    private 'base_path'?: BasePathDTO;
    private 'hardware_model'?: string;
    private 'offline_cache_configs'?: OfflineCacheConfigsDTO;
    private 'device_auth_info'?: DeviceAuthInfoDisplayDTO;
    private 'device_data_format'?: string;
    private 'automatic_upgrade'?: string;
    private 'device_data_record'?: DeviceDataRecord;
    private 'metric_report'?: string;
    public constructor() { 
        super();
    }
    public withLogConfigs(logConfigs: Array<LogConfigDTO>): UpdateEdgeNodeResponse {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<LogConfigDTO>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<LogConfigDTO> | undefined {
        return this['log_configs'];
    }
    public withHaConfig(haConfig: HaConfigDTO): UpdateEdgeNodeResponse {
        this['ha_config'] = haConfig;
        return this;
    }
    public set haConfig(haConfig: HaConfigDTO  | undefined) {
        this['ha_config'] = haConfig;
    }
    public get haConfig(): HaConfigDTO | undefined {
        return this['ha_config'];
    }
    public withEdgeNodeId(edgeNodeId: string): UpdateEdgeNodeResponse {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withInstanceId(instanceId: string): UpdateEdgeNodeResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProductId(productId: string): UpdateEdgeNodeResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductName(productName: string): UpdateEdgeNodeResponse {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withSpaceId(spaceId: string): UpdateEdgeNodeResponse {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withResourceSpecTypes(resourceSpecTypes: Array<string>): UpdateEdgeNodeResponse {
        this['resource_spec_types'] = resourceSpecTypes;
        return this;
    }
    public set resourceSpecTypes(resourceSpecTypes: Array<string>  | undefined) {
        this['resource_spec_types'] = resourceSpecTypes;
    }
    public get resourceSpecTypes(): Array<string> | undefined {
        return this['resource_spec_types'];
    }
    public withResourceIds(resourceIds: Array<string>): UpdateEdgeNodeResponse {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withIps(ips: Array<string>): UpdateEdgeNodeResponse {
        this['ips'] = ips;
        return this;
    }
    public withName(name: string): UpdateEdgeNodeResponse {
        this['name'] = name;
        return this;
    }
    public withState(state: string): UpdateEdgeNodeResponse {
        this['state'] = state;
        return this;
    }
    public withSoftwareVersion(softwareVersion: string): UpdateEdgeNodeResponse {
        this['software_version'] = softwareVersion;
        return this;
    }
    public set softwareVersion(softwareVersion: string  | undefined) {
        this['software_version'] = softwareVersion;
    }
    public get softwareVersion(): string | undefined {
        return this['software_version'];
    }
    public withCreateTime(createTime: string): UpdateEdgeNodeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateEdgeNodeResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withOsName(osName: string): UpdateEdgeNodeResponse {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withArch(arch: string): UpdateEdgeNodeResponse {
        this['arch'] = arch;
        return this;
    }
    public withHostName(hostName: string): UpdateEdgeNodeResponse {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withNics(nics: Array<Nic>): UpdateEdgeNodeResponse {
        this['nics'] = nics;
        return this;
    }
    public withSpecification(specification: string): UpdateEdgeNodeResponse {
        this['specification'] = specification;
        return this;
    }
    public withAiCardType(aiCardType: string): UpdateEdgeNodeResponse {
        this['ai_card_type'] = aiCardType;
        return this;
    }
    public set aiCardType(aiCardType: string  | undefined) {
        this['ai_card_type'] = aiCardType;
    }
    public get aiCardType(): string | undefined {
        return this['ai_card_type'];
    }
    public withNpuLibraryPath(npuLibraryPath: string): UpdateEdgeNodeResponse {
        this['npu_library_path'] = npuLibraryPath;
        return this;
    }
    public set npuLibraryPath(npuLibraryPath: string  | undefined) {
        this['npu_library_path'] = npuLibraryPath;
    }
    public get npuLibraryPath(): string | undefined {
        return this['npu_library_path'];
    }
    public withContainerVersion(containerVersion: string): UpdateEdgeNodeResponse {
        this['container_version'] = containerVersion;
        return this;
    }
    public set containerVersion(containerVersion: string  | undefined) {
        this['container_version'] = containerVersion;
    }
    public get containerVersion(): string | undefined {
        return this['container_version'];
    }
    public withType(type: string): UpdateEdgeNodeResponse {
        this['type'] = type;
        return this;
    }
    public withSecurityLevel(securityLevel: string): UpdateEdgeNodeResponse {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security_level'];
    }
    public withReliabilityLevel(reliabilityLevel: string): UpdateEdgeNodeResponse {
        this['reliability_level'] = reliabilityLevel;
        return this;
    }
    public set reliabilityLevel(reliabilityLevel: string  | undefined) {
        this['reliability_level'] = reliabilityLevel;
    }
    public get reliabilityLevel(): string | undefined {
        return this['reliability_level'];
    }
    public withStoragePeriod(storagePeriod: number): UpdateEdgeNodeResponse {
        this['storage_period'] = storagePeriod;
        return this;
    }
    public set storagePeriod(storagePeriod: number  | undefined) {
        this['storage_period'] = storagePeriod;
    }
    public get storagePeriod(): number | undefined {
        return this['storage_period'];
    }
    public withBasePath(basePath: BasePathDTO): UpdateEdgeNodeResponse {
        this['base_path'] = basePath;
        return this;
    }
    public set basePath(basePath: BasePathDTO  | undefined) {
        this['base_path'] = basePath;
    }
    public get basePath(): BasePathDTO | undefined {
        return this['base_path'];
    }
    public withHardwareModel(hardwareModel: string): UpdateEdgeNodeResponse {
        this['hardware_model'] = hardwareModel;
        return this;
    }
    public set hardwareModel(hardwareModel: string  | undefined) {
        this['hardware_model'] = hardwareModel;
    }
    public get hardwareModel(): string | undefined {
        return this['hardware_model'];
    }
    public withOfflineCacheConfigs(offlineCacheConfigs: OfflineCacheConfigsDTO): UpdateEdgeNodeResponse {
        this['offline_cache_configs'] = offlineCacheConfigs;
        return this;
    }
    public set offlineCacheConfigs(offlineCacheConfigs: OfflineCacheConfigsDTO  | undefined) {
        this['offline_cache_configs'] = offlineCacheConfigs;
    }
    public get offlineCacheConfigs(): OfflineCacheConfigsDTO | undefined {
        return this['offline_cache_configs'];
    }
    public withDeviceAuthInfo(deviceAuthInfo: DeviceAuthInfoDisplayDTO): UpdateEdgeNodeResponse {
        this['device_auth_info'] = deviceAuthInfo;
        return this;
    }
    public set deviceAuthInfo(deviceAuthInfo: DeviceAuthInfoDisplayDTO  | undefined) {
        this['device_auth_info'] = deviceAuthInfo;
    }
    public get deviceAuthInfo(): DeviceAuthInfoDisplayDTO | undefined {
        return this['device_auth_info'];
    }
    public withDeviceDataFormat(deviceDataFormat: string): UpdateEdgeNodeResponse {
        this['device_data_format'] = deviceDataFormat;
        return this;
    }
    public set deviceDataFormat(deviceDataFormat: string  | undefined) {
        this['device_data_format'] = deviceDataFormat;
    }
    public get deviceDataFormat(): string | undefined {
        return this['device_data_format'];
    }
    public withAutomaticUpgrade(automaticUpgrade: string): UpdateEdgeNodeResponse {
        this['automatic_upgrade'] = automaticUpgrade;
        return this;
    }
    public set automaticUpgrade(automaticUpgrade: string  | undefined) {
        this['automatic_upgrade'] = automaticUpgrade;
    }
    public get automaticUpgrade(): string | undefined {
        return this['automatic_upgrade'];
    }
    public withDeviceDataRecord(deviceDataRecord: DeviceDataRecord): UpdateEdgeNodeResponse {
        this['device_data_record'] = deviceDataRecord;
        return this;
    }
    public set deviceDataRecord(deviceDataRecord: DeviceDataRecord  | undefined) {
        this['device_data_record'] = deviceDataRecord;
    }
    public get deviceDataRecord(): DeviceDataRecord | undefined {
        return this['device_data_record'];
    }
    public withMetricReport(metricReport: string): UpdateEdgeNodeResponse {
        this['metric_report'] = metricReport;
        return this;
    }
    public set metricReport(metricReport: string  | undefined) {
        this['metric_report'] = metricReport;
    }
    public get metricReport(): string | undefined {
        return this['metric_report'];
    }
}