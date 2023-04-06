import { BackupStrategyDetail } from './BackupStrategyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotPolicyResponse extends SdkResponse {
    private 'keep_day'?: string | undefined;
    private 'backup_strategies'?: Array<BackupStrategyDetail> | undefined;
    private 'device_name'?: string | undefined;
    private 'server_ips'?: Array<string> | undefined;
    private 'server_port'?: string | undefined;
    private 'backup_param'?: string | undefined;
    public constructor() { 
        super();
    }
    public withKeepDay(keepDay: string): ListSnapshotPolicyResponse {
        this['keep_day'] = keepDay;
        return this;
    }
    public set keepDay(keepDay: string | undefined) {
        this['keep_day'] = keepDay;
    }
    public get keepDay() {
        return this['keep_day'];
    }
    public withBackupStrategies(backupStrategies: Array<BackupStrategyDetail>): ListSnapshotPolicyResponse {
        this['backup_strategies'] = backupStrategies;
        return this;
    }
    public set backupStrategies(backupStrategies: Array<BackupStrategyDetail> | undefined) {
        this['backup_strategies'] = backupStrategies;
    }
    public get backupStrategies() {
        return this['backup_strategies'];
    }
    public withDeviceName(deviceName: string): ListSnapshotPolicyResponse {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName() {
        return this['device_name'];
    }
    public withServerIps(serverIps: Array<string>): ListSnapshotPolicyResponse {
        this['server_ips'] = serverIps;
        return this;
    }
    public set serverIps(serverIps: Array<string> | undefined) {
        this['server_ips'] = serverIps;
    }
    public get serverIps() {
        return this['server_ips'];
    }
    public withServerPort(serverPort: string): ListSnapshotPolicyResponse {
        this['server_port'] = serverPort;
        return this;
    }
    public set serverPort(serverPort: string | undefined) {
        this['server_port'] = serverPort;
    }
    public get serverPort() {
        return this['server_port'];
    }
    public withBackupParam(backupParam: string): ListSnapshotPolicyResponse {
        this['backup_param'] = backupParam;
        return this;
    }
    public set backupParam(backupParam: string | undefined) {
        this['backup_param'] = backupParam;
    }
    public get backupParam() {
        return this['backup_param'];
    }
}