import { DeviceDataRecord } from './DeviceDataRecord';
import { HaConfigDTO } from './HaConfigDTO';
import { LogConfigDTO } from './LogConfigDTO';
import { UpdateOfflineCacheConfigsDTO } from './UpdateOfflineCacheConfigsDTO';


export class UpdateNodeReqDTO {
    public name?: string;
    private 'storage_period'?: number;
    private 'log_configs'?: Array<LogConfigDTO>;
    private 'ha_config'?: HaConfigDTO;
    private 'hardware_model'?: string;
    private 'npu_library_path'?: string;
    private 'automatic_upgrade'?: string;
    private 'device_data_record'?: DeviceDataRecord;
    private 'metric_report'?: string;
    private 'offline_cache_configs'?: UpdateOfflineCacheConfigsDTO;
    public constructor() { 
    }
    public withName(name: string): UpdateNodeReqDTO {
        this['name'] = name;
        return this;
    }
    public withStoragePeriod(storagePeriod: number): UpdateNodeReqDTO {
        this['storage_period'] = storagePeriod;
        return this;
    }
    public set storagePeriod(storagePeriod: number  | undefined) {
        this['storage_period'] = storagePeriod;
    }
    public get storagePeriod(): number | undefined {
        return this['storage_period'];
    }
    public withLogConfigs(logConfigs: Array<LogConfigDTO>): UpdateNodeReqDTO {
        this['log_configs'] = logConfigs;
        return this;
    }
    public set logConfigs(logConfigs: Array<LogConfigDTO>  | undefined) {
        this['log_configs'] = logConfigs;
    }
    public get logConfigs(): Array<LogConfigDTO> | undefined {
        return this['log_configs'];
    }
    public withHaConfig(haConfig: HaConfigDTO): UpdateNodeReqDTO {
        this['ha_config'] = haConfig;
        return this;
    }
    public set haConfig(haConfig: HaConfigDTO  | undefined) {
        this['ha_config'] = haConfig;
    }
    public get haConfig(): HaConfigDTO | undefined {
        return this['ha_config'];
    }
    public withHardwareModel(hardwareModel: string): UpdateNodeReqDTO {
        this['hardware_model'] = hardwareModel;
        return this;
    }
    public set hardwareModel(hardwareModel: string  | undefined) {
        this['hardware_model'] = hardwareModel;
    }
    public get hardwareModel(): string | undefined {
        return this['hardware_model'];
    }
    public withNpuLibraryPath(npuLibraryPath: string): UpdateNodeReqDTO {
        this['npu_library_path'] = npuLibraryPath;
        return this;
    }
    public set npuLibraryPath(npuLibraryPath: string  | undefined) {
        this['npu_library_path'] = npuLibraryPath;
    }
    public get npuLibraryPath(): string | undefined {
        return this['npu_library_path'];
    }
    public withAutomaticUpgrade(automaticUpgrade: string): UpdateNodeReqDTO {
        this['automatic_upgrade'] = automaticUpgrade;
        return this;
    }
    public set automaticUpgrade(automaticUpgrade: string  | undefined) {
        this['automatic_upgrade'] = automaticUpgrade;
    }
    public get automaticUpgrade(): string | undefined {
        return this['automatic_upgrade'];
    }
    public withDeviceDataRecord(deviceDataRecord: DeviceDataRecord): UpdateNodeReqDTO {
        this['device_data_record'] = deviceDataRecord;
        return this;
    }
    public set deviceDataRecord(deviceDataRecord: DeviceDataRecord  | undefined) {
        this['device_data_record'] = deviceDataRecord;
    }
    public get deviceDataRecord(): DeviceDataRecord | undefined {
        return this['device_data_record'];
    }
    public withMetricReport(metricReport: string): UpdateNodeReqDTO {
        this['metric_report'] = metricReport;
        return this;
    }
    public set metricReport(metricReport: string  | undefined) {
        this['metric_report'] = metricReport;
    }
    public get metricReport(): string | undefined {
        return this['metric_report'];
    }
    public withOfflineCacheConfigs(offlineCacheConfigs: UpdateOfflineCacheConfigsDTO): UpdateNodeReqDTO {
        this['offline_cache_configs'] = offlineCacheConfigs;
        return this;
    }
    public set offlineCacheConfigs(offlineCacheConfigs: UpdateOfflineCacheConfigsDTO  | undefined) {
        this['offline_cache_configs'] = offlineCacheConfigs;
    }
    public get offlineCacheConfigs(): UpdateOfflineCacheConfigsDTO | undefined {
        return this['offline_cache_configs'];
    }
}