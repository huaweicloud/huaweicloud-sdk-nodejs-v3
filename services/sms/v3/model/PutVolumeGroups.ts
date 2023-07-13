import { PutLogicalVolume } from './PutLogicalVolume';


export class PutVolumeGroups {
    private 'logical_volumes'?: Array<PutLogicalVolume> | undefined;
    public id: string;
    private 'need_migration'?: boolean | undefined;
    private 'adjust_size'?: number | undefined;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withLogicalVolumes(logicalVolumes: Array<PutLogicalVolume>): PutVolumeGroups {
        this['logical_volumes'] = logicalVolumes;
        return this;
    }
    public set logicalVolumes(logicalVolumes: Array<PutLogicalVolume> | undefined) {
        this['logical_volumes'] = logicalVolumes;
    }
    public get logicalVolumes() {
        return this['logical_volumes'];
    }
    public withId(id: string): PutVolumeGroups {
        this['id'] = id;
        return this;
    }
    public withNeedMigration(needMigration: boolean): PutVolumeGroups {
        this['need_migration'] = needMigration;
        return this;
    }
    public set needMigration(needMigration: boolean | undefined) {
        this['need_migration'] = needMigration;
    }
    public get needMigration() {
        return this['need_migration'];
    }
    public withAdjustSize(adjustSize: number): PutVolumeGroups {
        this['adjust_size'] = adjustSize;
        return this;
    }
    public set adjustSize(adjustSize: number | undefined) {
        this['adjust_size'] = adjustSize;
    }
    public get adjustSize() {
        return this['adjust_size'];
    }
}