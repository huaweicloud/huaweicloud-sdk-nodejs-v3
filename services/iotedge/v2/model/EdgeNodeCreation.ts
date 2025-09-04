import { BasePathDTO } from './BasePathDTO';
import { DeviceAuthInfoDTO } from './DeviceAuthInfoDTO';
import { DeviceDataRecord } from './DeviceDataRecord';
import { EdgeAppInstanceDTO } from './EdgeAppInstanceDTO';
import { LogConfigDTO } from './LogConfigDTO';
import { OfflineCacheConfigsDTO } from './OfflineCacheConfigsDTO';


export class EdgeNodeCreation {
    private 'edge_node_id'?: string;
    public name?: string;
    public type?: string;
    private 'verify_code'?: string;
    private 'time_out'?: number;
    public arch?: string;
    private 'os_type'?: string;
    private 'instance_id'?: string;
    private 'space_id'?: string;
    private 'resource_ids'?: Array<string>;
    private 'security_level'?: string;
    private 'reliability_level'?: string;
    private 'storage_period'?: number;
    private 'ai_card_type'?: string;
    private 'npu_library_path'?: string;
    private 'base_path'?: BasePathDTO;
    private 'log_configs'?: Array<LogConfigDTO>;
    public apps?: Array<EdgeAppInstanceDTO>;
    private 'network_access_point'?: string;
    private 'hardware_model'?: string;
    private 'offline_cache_configs'?: OfflineCacheConfigsDTO;
    private 'device_auth_info'?: DeviceAuthInfoDTO;
    private 'device_data_format'?: string;
    private 'automatic_upgrade'?: string;
    private 'device_data_record'?: DeviceDataRecord;
    private 'metric_report'?: string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withEdgeNodeId(edgeNodeId: string): EdgeNodeCreation {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withName(name: string): EdgeNodeCreation {
        this['name'] = name;
        return this;
    }
    public withType(type: string): EdgeNodeCreation {
        this['type'] = type;
        return this;
    }
    public withVerifyCode(verifyCode: string): EdgeNodeCreation {
        this['verify_code'] = verifyCode;
        return this;
    }
    public set verifyCode(verifyCode: string  | undefined) {
        this['verify_code'] = verifyCode;
    }
    public get verifyCode(): string | undefined {
        return this['verify_code'];
    }
    public withTimeOut(timeOut: number): EdgeNodeCreation {
        this['time_out'] = timeOut;
        return this;
    }
    public set timeOut(timeOut: number  | undefined) {
        this['time_out'] = timeOut;
    }
    public get timeOut(): number | undefined {
        return this['time_out'];
    }
    public withArch(arch: string): EdgeNodeCreation {
        this['arch'] = arch;
        return this;
    }
    public withOsType(osType: string): EdgeNodeCreation {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withInstanceId(instanceId: string): EdgeNodeCreation {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSpaceId(spaceId: string): EdgeNodeCreation {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withResourceIds(resourceIds: Array<string>): EdgeNodeCreation {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withSecurityLevel(securityLevel: string): EdgeNodeCreation {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security_level'];
    }
    public withReliabilityLevel(reliabilityLevel: string): EdgeNodeCreation {
        this['reliability_level'] = reliabilityLevel;
        return this;
    }
    public set reliabilityLevel(reliabilityLevel: string  | undefined) {
        this['reliability_level'] = reliabilityLevel;
    }
    public get reliabilityLevel(): string | undefined {
        return this['reliability_level'];
    }
    public withStoragePeriod(storagePeriod: number): EdgeNodeCreation {
        this['storage_period'] = storagePeriod;
        return this;
    }
    public set storagePeriod(storagePeriod: number  | undefined) {
        this['storage_period'] = storagePeriod;
    }
    public get storagePeriod(): number | undefined {
        return this['storage_period'];
    }
    public withAiCardType(aiCardType: string): EdgeNodeCreation {
        this['ai_card_type'] = aiCardType;
        return this;
    }
    public set aiCardType(aiCardType: string  | undefined) {
        this['ai_card_type'] = aiCardType;
    }
    public get aiCardType(): string | undefined {
        return this['ai_card_type'];
    }
    public withNpuLibraryPath(npuLibraryPath: string): EdgeNodeCreation {
        this['npu_library_path'] = npuLibraryPath;
        return this;
    }
    public set npuLibraryPath(npuLibraryPath: string  | undefined) {
        this['npu_library_path'] = npuLibraryPath;
    }
    public get npuLibraryPath(): string | undefined {
        return this['npu_library_path'];
    }
    public withBasePath(basePath: BasePathDTO): EdgeNodeCreation {
        this['base_path'] = basePath;
        return this;
    }
    public set basePath(basePath: BasePathDTO  | undefined) {
        this['base_path'] = basePath;
    }
    public get basePath(): BasePathDTO | undefined {
        return this['base_path'];
    }
    public withLogConfigs(logConfigs: Array<LogConfigDTO>): EdgeNodeCreation {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<LogConfigDTO>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<LogConfigDTO> | undefined {
        return this['log_configs'];
    }
    public withApps(apps: Array<EdgeAppInstanceDTO>): EdgeNodeCreation {
        this['apps'] = apps;
        return this;
    }
    public withNetworkAccessPoint(networkAccessPoint: string): EdgeNodeCreation {
        this['network_access_point'] = networkAccessPoint;
        return this;
    }
    public set networkAccessPoint(networkAccessPoint: string  | undefined) {
        this['network_access_point'] = networkAccessPoint;
    }
    public get networkAccessPoint(): string | undefined {
        return this['network_access_point'];
    }
    public withHardwareModel(hardwareModel: string): EdgeNodeCreation {
        this['hardware_model'] = hardwareModel;
        return this;
    }
    public set hardwareModel(hardwareModel: string  | undefined) {
        this['hardware_model'] = hardwareModel;
    }
    public get hardwareModel(): string | undefined {
        return this['hardware_model'];
    }
    public withOfflineCacheConfigs(offlineCacheConfigs: OfflineCacheConfigsDTO): EdgeNodeCreation {
        this['offline_cache_configs'] = offlineCacheConfigs;
        return this;
    }
    public set offlineCacheConfigs(offlineCacheConfigs: OfflineCacheConfigsDTO  | undefined) {
        this['offline_cache_configs'] = offlineCacheConfigs;
    }
    public get offlineCacheConfigs(): OfflineCacheConfigsDTO | undefined {
        return this['offline_cache_configs'];
    }
    public withDeviceAuthInfo(deviceAuthInfo: DeviceAuthInfoDTO): EdgeNodeCreation {
        this['device_auth_info'] = deviceAuthInfo;
        return this;
    }
    public set deviceAuthInfo(deviceAuthInfo: DeviceAuthInfoDTO  | undefined) {
        this['device_auth_info'] = deviceAuthInfo;
    }
    public get deviceAuthInfo(): DeviceAuthInfoDTO | undefined {
        return this['device_auth_info'];
    }
    public withDeviceDataFormat(deviceDataFormat: string): EdgeNodeCreation {
        this['device_data_format'] = deviceDataFormat;
        return this;
    }
    public set deviceDataFormat(deviceDataFormat: string  | undefined) {
        this['device_data_format'] = deviceDataFormat;
    }
    public get deviceDataFormat(): string | undefined {
        return this['device_data_format'];
    }
    public withAutomaticUpgrade(automaticUpgrade: string): EdgeNodeCreation {
        this['automatic_upgrade'] = automaticUpgrade;
        return this;
    }
    public set automaticUpgrade(automaticUpgrade: string  | undefined) {
        this['automatic_upgrade'] = automaticUpgrade;
    }
    public get automaticUpgrade(): string | undefined {
        return this['automatic_upgrade'];
    }
    public withDeviceDataRecord(deviceDataRecord: DeviceDataRecord): EdgeNodeCreation {
        this['device_data_record'] = deviceDataRecord;
        return this;
    }
    public set deviceDataRecord(deviceDataRecord: DeviceDataRecord  | undefined) {
        this['device_data_record'] = deviceDataRecord;
    }
    public get deviceDataRecord(): DeviceDataRecord | undefined {
        return this['device_data_record'];
    }
    public withMetricReport(metricReport: string): EdgeNodeCreation {
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