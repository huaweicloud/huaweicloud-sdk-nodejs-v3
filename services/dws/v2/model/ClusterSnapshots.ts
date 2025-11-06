import { Datastore } from './Datastore';
import { FineGrainedSnapshotDetail } from './FineGrainedSnapshotDetail';


export class ClusterSnapshots {
    public id?: string;
    public name?: string;
    public description?: string;
    public started?: string;
    public finished?: string;
    public size?: number;
    public status?: string;
    private 'cluster_id'?: string;
    public datastore?: Datastore;
    private 'cluster_name'?: string;
    public updated?: string;
    public type?: string;
    private 'bak_expected_start_time'?: string;
    private 'bak_keep_day'?: number;
    private 'bak_period'?: string;
    private 'db_user'?: string;
    public progress?: string;
    private 'backup_key'?: string;
    private 'prior_backup_key'?: string;
    private 'base_backup_key'?: string;
    private 'backup_device'?: string;
    private 'total_backup_size'?: number;
    private 'base_backup_name'?: string;
    private 'support_inplace_restore'?: boolean;
    private 'fine_grained_backup'?: boolean;
    private 'backup_level'?: string;
    private 'fine_grained_backup_detail'?: FineGrainedSnapshotDetail;
    private 'guest_agent_version'?: string;
    private 'cluster_status'?: string;
    private 'cluster_task_status'?: string;
    public constructor() { 
    }
    public withId(id: string): ClusterSnapshots {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ClusterSnapshots {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ClusterSnapshots {
        this['description'] = description;
        return this;
    }
    public withStarted(started: string): ClusterSnapshots {
        this['started'] = started;
        return this;
    }
    public withFinished(finished: string): ClusterSnapshots {
        this['finished'] = finished;
        return this;
    }
    public withSize(size: number): ClusterSnapshots {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): ClusterSnapshots {
        this['status'] = status;
        return this;
    }
    public withClusterId(clusterId: string): ClusterSnapshots {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDatastore(datastore: Datastore): ClusterSnapshots {
        this['datastore'] = datastore;
        return this;
    }
    public withClusterName(clusterName: string): ClusterSnapshots {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withUpdated(updated: string): ClusterSnapshots {
        this['updated'] = updated;
        return this;
    }
    public withType(type: string): ClusterSnapshots {
        this['type'] = type;
        return this;
    }
    public withBakExpectedStartTime(bakExpectedStartTime: string): ClusterSnapshots {
        this['bak_expected_start_time'] = bakExpectedStartTime;
        return this;
    }
    public set bakExpectedStartTime(bakExpectedStartTime: string  | undefined) {
        this['bak_expected_start_time'] = bakExpectedStartTime;
    }
    public get bakExpectedStartTime(): string | undefined {
        return this['bak_expected_start_time'];
    }
    public withBakKeepDay(bakKeepDay: number): ClusterSnapshots {
        this['bak_keep_day'] = bakKeepDay;
        return this;
    }
    public set bakKeepDay(bakKeepDay: number  | undefined) {
        this['bak_keep_day'] = bakKeepDay;
    }
    public get bakKeepDay(): number | undefined {
        return this['bak_keep_day'];
    }
    public withBakPeriod(bakPeriod: string): ClusterSnapshots {
        this['bak_period'] = bakPeriod;
        return this;
    }
    public set bakPeriod(bakPeriod: string  | undefined) {
        this['bak_period'] = bakPeriod;
    }
    public get bakPeriod(): string | undefined {
        return this['bak_period'];
    }
    public withDbUser(dbUser: string): ClusterSnapshots {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withProgress(progress: string): ClusterSnapshots {
        this['progress'] = progress;
        return this;
    }
    public withBackupKey(backupKey: string): ClusterSnapshots {
        this['backup_key'] = backupKey;
        return this;
    }
    public set backupKey(backupKey: string  | undefined) {
        this['backup_key'] = backupKey;
    }
    public get backupKey(): string | undefined {
        return this['backup_key'];
    }
    public withPriorBackupKey(priorBackupKey: string): ClusterSnapshots {
        this['prior_backup_key'] = priorBackupKey;
        return this;
    }
    public set priorBackupKey(priorBackupKey: string  | undefined) {
        this['prior_backup_key'] = priorBackupKey;
    }
    public get priorBackupKey(): string | undefined {
        return this['prior_backup_key'];
    }
    public withBaseBackupKey(baseBackupKey: string): ClusterSnapshots {
        this['base_backup_key'] = baseBackupKey;
        return this;
    }
    public set baseBackupKey(baseBackupKey: string  | undefined) {
        this['base_backup_key'] = baseBackupKey;
    }
    public get baseBackupKey(): string | undefined {
        return this['base_backup_key'];
    }
    public withBackupDevice(backupDevice: string): ClusterSnapshots {
        this['backup_device'] = backupDevice;
        return this;
    }
    public set backupDevice(backupDevice: string  | undefined) {
        this['backup_device'] = backupDevice;
    }
    public get backupDevice(): string | undefined {
        return this['backup_device'];
    }
    public withTotalBackupSize(totalBackupSize: number): ClusterSnapshots {
        this['total_backup_size'] = totalBackupSize;
        return this;
    }
    public set totalBackupSize(totalBackupSize: number  | undefined) {
        this['total_backup_size'] = totalBackupSize;
    }
    public get totalBackupSize(): number | undefined {
        return this['total_backup_size'];
    }
    public withBaseBackupName(baseBackupName: string): ClusterSnapshots {
        this['base_backup_name'] = baseBackupName;
        return this;
    }
    public set baseBackupName(baseBackupName: string  | undefined) {
        this['base_backup_name'] = baseBackupName;
    }
    public get baseBackupName(): string | undefined {
        return this['base_backup_name'];
    }
    public withSupportInplaceRestore(supportInplaceRestore: boolean): ClusterSnapshots {
        this['support_inplace_restore'] = supportInplaceRestore;
        return this;
    }
    public set supportInplaceRestore(supportInplaceRestore: boolean  | undefined) {
        this['support_inplace_restore'] = supportInplaceRestore;
    }
    public get supportInplaceRestore(): boolean | undefined {
        return this['support_inplace_restore'];
    }
    public withFineGrainedBackup(fineGrainedBackup: boolean): ClusterSnapshots {
        this['fine_grained_backup'] = fineGrainedBackup;
        return this;
    }
    public set fineGrainedBackup(fineGrainedBackup: boolean  | undefined) {
        this['fine_grained_backup'] = fineGrainedBackup;
    }
    public get fineGrainedBackup(): boolean | undefined {
        return this['fine_grained_backup'];
    }
    public withBackupLevel(backupLevel: string): ClusterSnapshots {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: string  | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel(): string | undefined {
        return this['backup_level'];
    }
    public withFineGrainedBackupDetail(fineGrainedBackupDetail: FineGrainedSnapshotDetail): ClusterSnapshots {
        this['fine_grained_backup_detail'] = fineGrainedBackupDetail;
        return this;
    }
    public set fineGrainedBackupDetail(fineGrainedBackupDetail: FineGrainedSnapshotDetail  | undefined) {
        this['fine_grained_backup_detail'] = fineGrainedBackupDetail;
    }
    public get fineGrainedBackupDetail(): FineGrainedSnapshotDetail | undefined {
        return this['fine_grained_backup_detail'];
    }
    public withGuestAgentVersion(guestAgentVersion: string): ClusterSnapshots {
        this['guest_agent_version'] = guestAgentVersion;
        return this;
    }
    public set guestAgentVersion(guestAgentVersion: string  | undefined) {
        this['guest_agent_version'] = guestAgentVersion;
    }
    public get guestAgentVersion(): string | undefined {
        return this['guest_agent_version'];
    }
    public withClusterStatus(clusterStatus: string): ClusterSnapshots {
        this['cluster_status'] = clusterStatus;
        return this;
    }
    public set clusterStatus(clusterStatus: string  | undefined) {
        this['cluster_status'] = clusterStatus;
    }
    public get clusterStatus(): string | undefined {
        return this['cluster_status'];
    }
    public withClusterTaskStatus(clusterTaskStatus: string): ClusterSnapshots {
        this['cluster_task_status'] = clusterTaskStatus;
        return this;
    }
    public set clusterTaskStatus(clusterTaskStatus: string  | undefined) {
        this['cluster_task_status'] = clusterTaskStatus;
    }
    public get clusterTaskStatus(): string | undefined {
        return this['cluster_task_status'];
    }
}