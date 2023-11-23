

export class UpgradeReports {
    public id?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'src_instance_id'?: string;
    private 'src_database_version'?: string;
    private 'dst_instance_id'?: string;
    private 'dst_database_version'?: string;
    public result?: string;
    private 'is_private_ip_changed'?: boolean;
    private 'private_ip_change_time'?: string;
    private 'statistics_collection_mode'?: string;
    public detail?: string;
    public constructor(id?: string, startTime?: string, endTime?: string, srcInstanceId?: string, srcDatabaseVersion?: string, dstInstanceId?: string, dstDatabaseVersion?: string, result?: string, isPrivateIpChanged?: boolean, privateIpChangeTime?: string, statisticsCollectionMode?: string, detail?: string) { 
        this['id'] = id;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['src_instance_id'] = srcInstanceId;
        this['src_database_version'] = srcDatabaseVersion;
        this['dst_instance_id'] = dstInstanceId;
        this['dst_database_version'] = dstDatabaseVersion;
        this['result'] = result;
        this['is_private_ip_changed'] = isPrivateIpChanged;
        this['private_ip_change_time'] = privateIpChangeTime;
        this['statistics_collection_mode'] = statisticsCollectionMode;
        this['detail'] = detail;
    }
    public withId(id: string): UpgradeReports {
        this['id'] = id;
        return this;
    }
    public withStartTime(startTime: string): UpgradeReports {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): UpgradeReports {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSrcInstanceId(srcInstanceId: string): UpgradeReports {
        this['src_instance_id'] = srcInstanceId;
        return this;
    }
    public set srcInstanceId(srcInstanceId: string  | undefined) {
        this['src_instance_id'] = srcInstanceId;
    }
    public get srcInstanceId(): string | undefined {
        return this['src_instance_id'];
    }
    public withSrcDatabaseVersion(srcDatabaseVersion: string): UpgradeReports {
        this['src_database_version'] = srcDatabaseVersion;
        return this;
    }
    public set srcDatabaseVersion(srcDatabaseVersion: string  | undefined) {
        this['src_database_version'] = srcDatabaseVersion;
    }
    public get srcDatabaseVersion(): string | undefined {
        return this['src_database_version'];
    }
    public withDstInstanceId(dstInstanceId: string): UpgradeReports {
        this['dst_instance_id'] = dstInstanceId;
        return this;
    }
    public set dstInstanceId(dstInstanceId: string  | undefined) {
        this['dst_instance_id'] = dstInstanceId;
    }
    public get dstInstanceId(): string | undefined {
        return this['dst_instance_id'];
    }
    public withDstDatabaseVersion(dstDatabaseVersion: string): UpgradeReports {
        this['dst_database_version'] = dstDatabaseVersion;
        return this;
    }
    public set dstDatabaseVersion(dstDatabaseVersion: string  | undefined) {
        this['dst_database_version'] = dstDatabaseVersion;
    }
    public get dstDatabaseVersion(): string | undefined {
        return this['dst_database_version'];
    }
    public withResult(result: string): UpgradeReports {
        this['result'] = result;
        return this;
    }
    public withIsPrivateIpChanged(isPrivateIpChanged: boolean): UpgradeReports {
        this['is_private_ip_changed'] = isPrivateIpChanged;
        return this;
    }
    public set isPrivateIpChanged(isPrivateIpChanged: boolean  | undefined) {
        this['is_private_ip_changed'] = isPrivateIpChanged;
    }
    public get isPrivateIpChanged(): boolean | undefined {
        return this['is_private_ip_changed'];
    }
    public withPrivateIpChangeTime(privateIpChangeTime: string): UpgradeReports {
        this['private_ip_change_time'] = privateIpChangeTime;
        return this;
    }
    public set privateIpChangeTime(privateIpChangeTime: string  | undefined) {
        this['private_ip_change_time'] = privateIpChangeTime;
    }
    public get privateIpChangeTime(): string | undefined {
        return this['private_ip_change_time'];
    }
    public withStatisticsCollectionMode(statisticsCollectionMode: string): UpgradeReports {
        this['statistics_collection_mode'] = statisticsCollectionMode;
        return this;
    }
    public set statisticsCollectionMode(statisticsCollectionMode: string  | undefined) {
        this['statistics_collection_mode'] = statisticsCollectionMode;
    }
    public get statisticsCollectionMode(): string | undefined {
        return this['statistics_collection_mode'];
    }
    public withDetail(detail: string): UpgradeReports {
        this['detail'] = detail;
        return this;
    }
}