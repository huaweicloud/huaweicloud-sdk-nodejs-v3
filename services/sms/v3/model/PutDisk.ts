import { PutVolume } from './PutVolume';


export class PutDisk {
    private 'need_migration'?: boolean | undefined;
    public id: string;
    private 'adjust_size': number | undefined;
    private 'physical_volumes'?: Array<PutVolume> | undefined;
    public constructor(id?: any, adjustSize?: any) { 
        this['id'] = id;
        this['adjust_size'] = adjustSize;
    }
    public withNeedMigration(needMigration: boolean): PutDisk {
        this['need_migration'] = needMigration;
        return this;
    }
    public set needMigration(needMigration: boolean | undefined) {
        this['need_migration'] = needMigration;
    }
    public get needMigration() {
        return this['need_migration'];
    }
    public withId(id: string): PutDisk {
        this['id'] = id;
        return this;
    }
    public withAdjustSize(adjustSize: number): PutDisk {
        this['adjust_size'] = adjustSize;
        return this;
    }
    public set adjustSize(adjustSize: number | undefined) {
        this['adjust_size'] = adjustSize;
    }
    public get adjustSize() {
        return this['adjust_size'];
    }
    public withPhysicalVolumes(physicalVolumes: Array<PutVolume>): PutDisk {
        this['physical_volumes'] = physicalVolumes;
        return this;
    }
    public set physicalVolumes(physicalVolumes: Array<PutVolume> | undefined) {
        this['physical_volumes'] = physicalVolumes;
    }
    public get physicalVolumes() {
        return this['physical_volumes'];
    }
}