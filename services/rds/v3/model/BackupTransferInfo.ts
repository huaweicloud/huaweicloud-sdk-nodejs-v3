

export class BackupTransferInfo {
    public id?: string;
    public name?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public status?: string;
    public size?: number;
    private 'instance_id'?: string;
    private 'file_name'?: string;
    public destination?: string;
    private 'backup_begin_time'?: number;
    private 'backup_end_time'?: number;
    private 'transfer_type'?: string;
    public prefix?: string;
    public constructor() { 
    }
    public withId(id: string): BackupTransferInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupTransferInfo {
        this['name'] = name;
        return this;
    }
    public withBeginTime(beginTime: number): BackupTransferInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): BackupTransferInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): BackupTransferInfo {
        this['status'] = status;
        return this;
    }
    public withSize(size: number): BackupTransferInfo {
        this['size'] = size;
        return this;
    }
    public withInstanceId(instanceId: string): BackupTransferInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withFileName(fileName: string): BackupTransferInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withDestination(destination: string): BackupTransferInfo {
        this['destination'] = destination;
        return this;
    }
    public withBackupBeginTime(backupBeginTime: number): BackupTransferInfo {
        this['backup_begin_time'] = backupBeginTime;
        return this;
    }
    public set backupBeginTime(backupBeginTime: number  | undefined) {
        this['backup_begin_time'] = backupBeginTime;
    }
    public get backupBeginTime(): number | undefined {
        return this['backup_begin_time'];
    }
    public withBackupEndTime(backupEndTime: number): BackupTransferInfo {
        this['backup_end_time'] = backupEndTime;
        return this;
    }
    public set backupEndTime(backupEndTime: number  | undefined) {
        this['backup_end_time'] = backupEndTime;
    }
    public get backupEndTime(): number | undefined {
        return this['backup_end_time'];
    }
    public withTransferType(transferType: string): BackupTransferInfo {
        this['transfer_type'] = transferType;
        return this;
    }
    public set transferType(transferType: string  | undefined) {
        this['transfer_type'] = transferType;
    }
    public get transferType(): string | undefined {
        return this['transfer_type'];
    }
    public withPrefix(prefix: string): BackupTransferInfo {
        this['prefix'] = prefix;
        return this;
    }
}