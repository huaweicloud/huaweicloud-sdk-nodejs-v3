import { Datastore } from './Datastore';
import { FineGrainedSnapshotDetail } from './FineGrainedSnapshotDetail';


export class SnapshotDetail {
    public id: string;
    public name: string;
    public description: string;
    public started: string;
    public finished: string;
    public size: number;
    public status: string;
    public type: string;
    private 'cluster_id': string | undefined;
    public datastore?: Datastore;
    private 'cluster_name'?: string | undefined;
    private 'bak_expected_start_time'?: string | undefined;
    private 'bak_keep_day'?: number | undefined;
    private 'bak_period'?: string | undefined;
    private 'db_user'?: string | undefined;
    public progress?: string;
    private 'backup_key'?: string | undefined;
    private 'prior_backup_key'?: string | undefined;
    private 'base_backup_key'?: string | undefined;
    private 'backup_device'?: string | undefined;
    private 'total_backup_size'?: number | undefined;
    private 'base_backup_name'?: string | undefined;
    private 'support_inplace_restore'?: boolean | undefined;
    private 'fine_grained_backup'?: boolean | undefined;
    private 'backup_level'?: string | undefined;
    private 'fine_grained_backup_detail'?: FineGrainedSnapshotDetail | undefined;
    private 'guest_agent_version'?: string | undefined;
    private 'cluster_status'?: string | undefined;
    public constructor(id?: any, name?: any, description?: any, started?: any, finished?: any, size?: any, status?: any, type?: any, clusterId?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['started'] = started;
        this['finished'] = finished;
        this['size'] = size;
        this['status'] = status;
        this['type'] = type;
        this['cluster_id'] = clusterId;
    }
    public withId(id: string): SnapshotDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SnapshotDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SnapshotDetail {
        this['description'] = description;
        return this;
    }
    public withStarted(started: string): SnapshotDetail {
        this['started'] = started;
        return this;
    }
    public withFinished(finished: string): SnapshotDetail {
        this['finished'] = finished;
        return this;
    }
    public withSize(size: number): SnapshotDetail {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): SnapshotDetail {
        this['status'] = status;
        return this;
    }
    public withType(type: string): SnapshotDetail {
        this['type'] = type;
        return this;
    }
    public withClusterId(clusterId: string): SnapshotDetail {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withDatastore(datastore: Datastore): SnapshotDetail {
        this['datastore'] = datastore;
        return this;
    }
    public withClusterName(clusterName: string): SnapshotDetail {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName() {
        return this['cluster_name'];
    }
    public withBakExpectedStartTime(bakExpectedStartTime: string): SnapshotDetail {
        this['bak_expected_start_time'] = bakExpectedStartTime;
        return this;
    }
    public set bakExpectedStartTime(bakExpectedStartTime: string | undefined) {
        this['bak_expected_start_time'] = bakExpectedStartTime;
    }
    public get bakExpectedStartTime() {
        return this['bak_expected_start_time'];
    }
    public withBakKeepDay(bakKeepDay: number): SnapshotDetail {
        this['bak_keep_day'] = bakKeepDay;
        return this;
    }
    public set bakKeepDay(bakKeepDay: number | undefined) {
        this['bak_keep_day'] = bakKeepDay;
    }
    public get bakKeepDay() {
        return this['bak_keep_day'];
    }
    public withBakPeriod(bakPeriod: string): SnapshotDetail {
        this['bak_period'] = bakPeriod;
        return this;
    }
    public set bakPeriod(bakPeriod: string | undefined) {
        this['bak_period'] = bakPeriod;
    }
    public get bakPeriod() {
        return this['bak_period'];
    }
    public withDbUser(dbUser: string): SnapshotDetail {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser() {
        return this['db_user'];
    }
    public withProgress(progress: string): SnapshotDetail {
        this['progress'] = progress;
        return this;
    }
    public withBackupKey(backupKey: string): SnapshotDetail {
        this['backup_key'] = backupKey;
        return this;
    }
    public set backupKey(backupKey: string | undefined) {
        this['backup_key'] = backupKey;
    }
    public get backupKey() {
        return this['backup_key'];
    }
    public withPriorBackupKey(priorBackupKey: string): SnapshotDetail {
        this['prior_backup_key'] = priorBackupKey;
        return this;
    }
    public set priorBackupKey(priorBackupKey: string | undefined) {
        this['prior_backup_key'] = priorBackupKey;
    }
    public get priorBackupKey() {
        return this['prior_backup_key'];
    }
    public withBaseBackupKey(baseBackupKey: string): SnapshotDetail {
        this['base_backup_key'] = baseBackupKey;
        return this;
    }
    public set baseBackupKey(baseBackupKey: string | undefined) {
        this['base_backup_key'] = baseBackupKey;
    }
    public get baseBackupKey() {
        return this['base_backup_key'];
    }
    public withBackupDevice(backupDevice: string): SnapshotDetail {
        this['backup_device'] = backupDevice;
        return this;
    }
    public set backupDevice(backupDevice: string | undefined) {
        this['backup_device'] = backupDevice;
    }
    public get backupDevice() {
        return this['backup_device'];
    }
    public withTotalBackupSize(totalBackupSize: number): SnapshotDetail {
        this['total_backup_size'] = totalBackupSize;
        return this;
    }
    public set totalBackupSize(totalBackupSize: number | undefined) {
        this['total_backup_size'] = totalBackupSize;
    }
    public get totalBackupSize() {
        return this['total_backup_size'];
    }
    public withBaseBackupName(baseBackupName: string): SnapshotDetail {
        this['base_backup_name'] = baseBackupName;
        return this;
    }
    public set baseBackupName(baseBackupName: string | undefined) {
        this['base_backup_name'] = baseBackupName;
    }
    public get baseBackupName() {
        return this['base_backup_name'];
    }
    public withSupportInplaceRestore(supportInplaceRestore: boolean): SnapshotDetail {
        this['support_inplace_restore'] = supportInplaceRestore;
        return this;
    }
    public set supportInplaceRestore(supportInplaceRestore: boolean | undefined) {
        this['support_inplace_restore'] = supportInplaceRestore;
    }
    public get supportInplaceRestore() {
        return this['support_inplace_restore'];
    }
    public withFineGrainedBackup(fineGrainedBackup: boolean): SnapshotDetail {
        this['fine_grained_backup'] = fineGrainedBackup;
        return this;
    }
    public set fineGrainedBackup(fineGrainedBackup: boolean | undefined) {
        this['fine_grained_backup'] = fineGrainedBackup;
    }
    public get fineGrainedBackup() {
        return this['fine_grained_backup'];
    }
    public withBackupLevel(backupLevel: string): SnapshotDetail {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: string | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel() {
        return this['backup_level'];
    }
    public withFineGrainedBackupDetail(fineGrainedBackupDetail: FineGrainedSnapshotDetail): SnapshotDetail {
        this['fine_grained_backup_detail'] = fineGrainedBackupDetail;
        return this;
    }
    public set fineGrainedBackupDetail(fineGrainedBackupDetail: FineGrainedSnapshotDetail | undefined) {
        this['fine_grained_backup_detail'] = fineGrainedBackupDetail;
    }
    public get fineGrainedBackupDetail() {
        return this['fine_grained_backup_detail'];
    }
    public withGuestAgentVersion(guestAgentVersion: string): SnapshotDetail {
        this['guest_agent_version'] = guestAgentVersion;
        return this;
    }
    public set guestAgentVersion(guestAgentVersion: string | undefined) {
        this['guest_agent_version'] = guestAgentVersion;
    }
    public get guestAgentVersion() {
        return this['guest_agent_version'];
    }
    public withClusterStatus(clusterStatus: string): SnapshotDetail {
        this['cluster_status'] = clusterStatus;
        return this;
    }
    public set clusterStatus(clusterStatus: string | undefined) {
        this['cluster_status'] = clusterStatus;
    }
    public get clusterStatus() {
        return this['cluster_status'];
    }
}