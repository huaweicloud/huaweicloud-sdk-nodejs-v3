import { PutVolume } from './PutVolume';


export class PutDisk {
    private 'need_migration'?: boolean;
    public id?: string;
    private 'adjust_size'?: number;
    private 'physical_volumes'?: Array<PutVolume>;
    public constructor() { 
    }
    public withNeedMigration(needMigration: boolean): PutDisk {
        this['need_migration'] = needMigration;
        return this;
    }
    public set needMigration(needMigration: boolean  | undefined) {
        this['need_migration'] = needMigration;
    }
    public get needMigration(): boolean | undefined {
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
    public set adjustSize(adjustSize: number  | undefined) {
        this['adjust_size'] = adjustSize;
    }
    public get adjustSize(): number | undefined {
        return this['adjust_size'];
    }
    public withPhysicalVolumes(physicalVolumes: Array<PutVolume>): PutDisk {
        this['physical_volumes'] = physicalVolumes;
        return this;
    }
    public set physicalVolumes(physicalVolumes: Array<PutVolume>  | undefined) {
        this['physical_volumes'] = physicalVolumes;
    }
    public get physicalVolumes(): Array<PutVolume> | undefined {
        return this['physical_volumes'];
    }
}