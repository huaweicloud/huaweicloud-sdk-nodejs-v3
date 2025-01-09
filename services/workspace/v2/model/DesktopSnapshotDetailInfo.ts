

export class DesktopSnapshotDetailInfo {
    private 'snapshot_id'?: string;
    private 'snapshot_name'?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'desktop_sid'?: string;
    private 'desktop_pool_id'?: string;
    private 'is_system_disk'?: boolean;
    public status?: string;
    public process?: number;
    public description?: string;
    private 'create_time'?: string;
    private 'create_type'?: DesktopSnapshotDetailInfoCreateTypeEnum | string;
    private 'last_restore_time'?: string;
    private 'restore_fail_reason'?: string;
    public constructor() { 
    }
    public withSnapshotId(snapshotId: string): DesktopSnapshotDetailInfo {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withSnapshotName(snapshotName: string): DesktopSnapshotDetailInfo {
        this['snapshot_name'] = snapshotName;
        return this;
    }
    public set snapshotName(snapshotName: string  | undefined) {
        this['snapshot_name'] = snapshotName;
    }
    public get snapshotName(): string | undefined {
        return this['snapshot_name'];
    }
    public withDesktopId(desktopId: string): DesktopSnapshotDetailInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): DesktopSnapshotDetailInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopSid(desktopSid: string): DesktopSnapshotDetailInfo {
        this['desktop_sid'] = desktopSid;
        return this;
    }
    public set desktopSid(desktopSid: string  | undefined) {
        this['desktop_sid'] = desktopSid;
    }
    public get desktopSid(): string | undefined {
        return this['desktop_sid'];
    }
    public withDesktopPoolId(desktopPoolId: string): DesktopSnapshotDetailInfo {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withIsSystemDisk(isSystemDisk: boolean): DesktopSnapshotDetailInfo {
        this['is_system_disk'] = isSystemDisk;
        return this;
    }
    public set isSystemDisk(isSystemDisk: boolean  | undefined) {
        this['is_system_disk'] = isSystemDisk;
    }
    public get isSystemDisk(): boolean | undefined {
        return this['is_system_disk'];
    }
    public withStatus(status: string): DesktopSnapshotDetailInfo {
        this['status'] = status;
        return this;
    }
    public withProcess(process: number): DesktopSnapshotDetailInfo {
        this['process'] = process;
        return this;
    }
    public withDescription(description: string): DesktopSnapshotDetailInfo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): DesktopSnapshotDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreateType(createType: DesktopSnapshotDetailInfoCreateTypeEnum | string): DesktopSnapshotDetailInfo {
        this['create_type'] = createType;
        return this;
    }
    public set createType(createType: DesktopSnapshotDetailInfoCreateTypeEnum | string  | undefined) {
        this['create_type'] = createType;
    }
    public get createType(): DesktopSnapshotDetailInfoCreateTypeEnum | string | undefined {
        return this['create_type'];
    }
    public withLastRestoreTime(lastRestoreTime: string): DesktopSnapshotDetailInfo {
        this['last_restore_time'] = lastRestoreTime;
        return this;
    }
    public set lastRestoreTime(lastRestoreTime: string  | undefined) {
        this['last_restore_time'] = lastRestoreTime;
    }
    public get lastRestoreTime(): string | undefined {
        return this['last_restore_time'];
    }
    public withRestoreFailReason(restoreFailReason: string): DesktopSnapshotDetailInfo {
        this['restore_fail_reason'] = restoreFailReason;
        return this;
    }
    public set restoreFailReason(restoreFailReason: string  | undefined) {
        this['restore_fail_reason'] = restoreFailReason;
    }
    public get restoreFailReason(): string | undefined {
        return this['restore_fail_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DesktopSnapshotDetailInfoCreateTypeEnum {
    AUTO = 'AUTO',
    MANUALLY = 'MANUALLY'
}
