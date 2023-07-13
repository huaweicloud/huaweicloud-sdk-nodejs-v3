

export class PutLogicalVolume {
    public id: string;
    private 'need_migration'?: boolean | undefined;
    private 'adjust_size'?: number | undefined;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): PutLogicalVolume {
        this['id'] = id;
        return this;
    }
    public withNeedMigration(needMigration: boolean): PutLogicalVolume {
        this['need_migration'] = needMigration;
        return this;
    }
    public set needMigration(needMigration: boolean | undefined) {
        this['need_migration'] = needMigration;
    }
    public get needMigration() {
        return this['need_migration'];
    }
    public withAdjustSize(adjustSize: number): PutLogicalVolume {
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