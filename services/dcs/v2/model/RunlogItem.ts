

export class RunlogItem {
    public id?: string;
    private 'file_name'?: string | undefined;
    private 'group_name'?: string | undefined;
    private 'replication_ip'?: string | undefined;
    public status?: string;
    public time?: string;
    private 'backup_id'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): RunlogItem {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): RunlogItem {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withGroupName(groupName: string): RunlogItem {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withReplicationIp(replicationIp: string): RunlogItem {
        this['replication_ip'] = replicationIp;
        return this;
    }
    public set replicationIp(replicationIp: string | undefined) {
        this['replication_ip'] = replicationIp;
    }
    public get replicationIp() {
        return this['replication_ip'];
    }
    public withStatus(status: string): RunlogItem {
        this['status'] = status;
        return this;
    }
    public withTime(time: string): RunlogItem {
        this['time'] = time;
        return this;
    }
    public withBackupId(backupId: string): RunlogItem {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
}