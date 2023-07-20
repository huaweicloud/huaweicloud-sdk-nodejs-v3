import { BackupStrategyDetail } from './BackupStrategyDetail';


export class BackupPolicy {
    private 'keep_day'?: number;
    private 'backup_strategies'?: BackupStrategyDetail;
    private 'device_name'?: string;
    private 'server_port'?: string;
    private 'backup_param'?: string;
    private 'server_ips'?: Array<string>;
    public constructor() { 
    }
    public withKeepDay(keepDay: number): BackupPolicy {
        this['keep_day'] = keepDay;
        return this;
    }
    public set keepDay(keepDay: number  | undefined) {
        this['keep_day'] = keepDay;
    }
    public get keepDay(): number | undefined {
        return this['keep_day'];
    }
    public withBackupStrategies(backupStrategies: BackupStrategyDetail): BackupPolicy {
        this['backup_strategies'] = backupStrategies;
        return this;
    }
    public set backupStrategies(backupStrategies: BackupStrategyDetail  | undefined) {
        this['backup_strategies'] = backupStrategies;
    }
    public get backupStrategies(): BackupStrategyDetail | undefined {
        return this['backup_strategies'];
    }
    public withDeviceName(deviceName: string): BackupPolicy {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withServerPort(serverPort: string): BackupPolicy {
        this['server_port'] = serverPort;
        return this;
    }
    public set serverPort(serverPort: string  | undefined) {
        this['server_port'] = serverPort;
    }
    public get serverPort(): string | undefined {
        return this['server_port'];
    }
    public withBackupParam(backupParam: string): BackupPolicy {
        this['backup_param'] = backupParam;
        return this;
    }
    public set backupParam(backupParam: string  | undefined) {
        this['backup_param'] = backupParam;
    }
    public get backupParam(): string | undefined {
        return this['backup_param'];
    }
    public withServerIps(serverIps: Array<string>): BackupPolicy {
        this['server_ips'] = serverIps;
        return this;
    }
    public set serverIps(serverIps: Array<string>  | undefined) {
        this['server_ips'] = serverIps;
    }
    public get serverIps(): Array<string> | undefined {
        return this['server_ips'];
    }
}