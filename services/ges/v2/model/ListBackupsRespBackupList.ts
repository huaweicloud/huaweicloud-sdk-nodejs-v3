

export class ListBackupsRespBackupList {
    public id?: string;
    public name?: string;
    private 'backup_method'?: string | undefined;
    private 'graph_id'?: string | undefined;
    private 'graph_name'?: string | undefined;
    private 'graph_status'?: string | undefined;
    private 'graph_size_type_index'?: string | undefined;
    private 'data_store_version'?: string | undefined;
    public arch?: string;
    public status?: string;
    private 'start_timestamp'?: number | undefined;
    private 'start_time'?: string | undefined;
    private 'end_timestamp'?: number | undefined;
    private 'end_time'?: string | undefined;
    public size?: number;
    public duration?: number;
    public encrypted?: boolean;
    public constructor() { 
    }
    public withId(id: string): ListBackupsRespBackupList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListBackupsRespBackupList {
        this['name'] = name;
        return this;
    }
    public withBackupMethod(backupMethod: string): ListBackupsRespBackupList {
        this['backup_method'] = backupMethod;
        return this;
    }
    public set backupMethod(backupMethod: string | undefined) {
        this['backup_method'] = backupMethod;
    }
    public get backupMethod() {
        return this['backup_method'];
    }
    public withGraphId(graphId: string): ListBackupsRespBackupList {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withGraphName(graphName: string): ListBackupsRespBackupList {
        this['graph_name'] = graphName;
        return this;
    }
    public set graphName(graphName: string | undefined) {
        this['graph_name'] = graphName;
    }
    public get graphName() {
        return this['graph_name'];
    }
    public withGraphStatus(graphStatus: string): ListBackupsRespBackupList {
        this['graph_status'] = graphStatus;
        return this;
    }
    public set graphStatus(graphStatus: string | undefined) {
        this['graph_status'] = graphStatus;
    }
    public get graphStatus() {
        return this['graph_status'];
    }
    public withGraphSizeTypeIndex(graphSizeTypeIndex: string): ListBackupsRespBackupList {
        this['graph_size_type_index'] = graphSizeTypeIndex;
        return this;
    }
    public set graphSizeTypeIndex(graphSizeTypeIndex: string | undefined) {
        this['graph_size_type_index'] = graphSizeTypeIndex;
    }
    public get graphSizeTypeIndex() {
        return this['graph_size_type_index'];
    }
    public withDataStoreVersion(dataStoreVersion: string): ListBackupsRespBackupList {
        this['data_store_version'] = dataStoreVersion;
        return this;
    }
    public set dataStoreVersion(dataStoreVersion: string | undefined) {
        this['data_store_version'] = dataStoreVersion;
    }
    public get dataStoreVersion() {
        return this['data_store_version'];
    }
    public withArch(arch: string): ListBackupsRespBackupList {
        this['arch'] = arch;
        return this;
    }
    public withStatus(status: string): ListBackupsRespBackupList {
        this['status'] = status;
        return this;
    }
    public withStartTimestamp(startTimestamp: number): ListBackupsRespBackupList {
        this['start_timestamp'] = startTimestamp;
        return this;
    }
    public set startTimestamp(startTimestamp: number | undefined) {
        this['start_timestamp'] = startTimestamp;
    }
    public get startTimestamp() {
        return this['start_timestamp'];
    }
    public withStartTime(startTime: string): ListBackupsRespBackupList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTimestamp(endTimestamp: number): ListBackupsRespBackupList {
        this['end_timestamp'] = endTimestamp;
        return this;
    }
    public set endTimestamp(endTimestamp: number | undefined) {
        this['end_timestamp'] = endTimestamp;
    }
    public get endTimestamp() {
        return this['end_timestamp'];
    }
    public withEndTime(endTime: string): ListBackupsRespBackupList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withSize(size: number): ListBackupsRespBackupList {
        this['size'] = size;
        return this;
    }
    public withDuration(duration: number): ListBackupsRespBackupList {
        this['duration'] = duration;
        return this;
    }
    public withEncrypted(encrypted: boolean): ListBackupsRespBackupList {
        this['encrypted'] = encrypted;
        return this;
    }
}