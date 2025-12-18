import { BackupNodeInfoResult } from './BackupNodeInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationResponse extends SdkResponse {
    private 'rate_limit'?: number;
    private 'prefetch_block'?: number;
    private 'file_split_size'?: number;
    private 'enable_standby_backup'?: boolean;
    private 'close_compression'?: boolean;
    private 'default_backup_media_type'?: string;
    private 'default_backup_method'?: string;
    private 'backup_parallel_degree'?: number;
    private 'backup_node_info'?: BackupNodeInfoResult;
    public constructor() { 
        super();
    }
    public withRateLimit(rateLimit: number): ShowConfigurationResponse {
        this['rate_limit'] = rateLimit;
        return this;
    }
    public set rateLimit(rateLimit: number  | undefined) {
        this['rate_limit'] = rateLimit;
    }
    public get rateLimit(): number | undefined {
        return this['rate_limit'];
    }
    public withPrefetchBlock(prefetchBlock: number): ShowConfigurationResponse {
        this['prefetch_block'] = prefetchBlock;
        return this;
    }
    public set prefetchBlock(prefetchBlock: number  | undefined) {
        this['prefetch_block'] = prefetchBlock;
    }
    public get prefetchBlock(): number | undefined {
        return this['prefetch_block'];
    }
    public withFileSplitSize(fileSplitSize: number): ShowConfigurationResponse {
        this['file_split_size'] = fileSplitSize;
        return this;
    }
    public set fileSplitSize(fileSplitSize: number  | undefined) {
        this['file_split_size'] = fileSplitSize;
    }
    public get fileSplitSize(): number | undefined {
        return this['file_split_size'];
    }
    public withEnableStandbyBackup(enableStandbyBackup: boolean): ShowConfigurationResponse {
        this['enable_standby_backup'] = enableStandbyBackup;
        return this;
    }
    public set enableStandbyBackup(enableStandbyBackup: boolean  | undefined) {
        this['enable_standby_backup'] = enableStandbyBackup;
    }
    public get enableStandbyBackup(): boolean | undefined {
        return this['enable_standby_backup'];
    }
    public withCloseCompression(closeCompression: boolean): ShowConfigurationResponse {
        this['close_compression'] = closeCompression;
        return this;
    }
    public set closeCompression(closeCompression: boolean  | undefined) {
        this['close_compression'] = closeCompression;
    }
    public get closeCompression(): boolean | undefined {
        return this['close_compression'];
    }
    public withDefaultBackupMediaType(defaultBackupMediaType: string): ShowConfigurationResponse {
        this['default_backup_media_type'] = defaultBackupMediaType;
        return this;
    }
    public set defaultBackupMediaType(defaultBackupMediaType: string  | undefined) {
        this['default_backup_media_type'] = defaultBackupMediaType;
    }
    public get defaultBackupMediaType(): string | undefined {
        return this['default_backup_media_type'];
    }
    public withDefaultBackupMethod(defaultBackupMethod: string): ShowConfigurationResponse {
        this['default_backup_method'] = defaultBackupMethod;
        return this;
    }
    public set defaultBackupMethod(defaultBackupMethod: string  | undefined) {
        this['default_backup_method'] = defaultBackupMethod;
    }
    public get defaultBackupMethod(): string | undefined {
        return this['default_backup_method'];
    }
    public withBackupParallelDegree(backupParallelDegree: number): ShowConfigurationResponse {
        this['backup_parallel_degree'] = backupParallelDegree;
        return this;
    }
    public set backupParallelDegree(backupParallelDegree: number  | undefined) {
        this['backup_parallel_degree'] = backupParallelDegree;
    }
    public get backupParallelDegree(): number | undefined {
        return this['backup_parallel_degree'];
    }
    public withBackupNodeInfo(backupNodeInfo: BackupNodeInfoResult): ShowConfigurationResponse {
        this['backup_node_info'] = backupNodeInfo;
        return this;
    }
    public set backupNodeInfo(backupNodeInfo: BackupNodeInfoResult  | undefined) {
        this['backup_node_info'] = backupNodeInfo;
    }
    public get backupNodeInfo(): BackupNodeInfoResult | undefined {
        return this['backup_node_info'];
    }
}