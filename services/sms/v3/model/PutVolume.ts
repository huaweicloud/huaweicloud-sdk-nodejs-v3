

export class PutVolume {
    public id?: string;
    private 'need_migration'?: boolean;
    private 'adjust_size'?: number;
    public constructor() { 
    }
    public withId(id: string): PutVolume {
        this['id'] = id;
        return this;
    }
    public withNeedMigration(needMigration: boolean): PutVolume {
        this['need_migration'] = needMigration;
        return this;
    }
    public set needMigration(needMigration: boolean  | undefined) {
        this['need_migration'] = needMigration;
    }
    public get needMigration(): boolean | undefined {
        return this['need_migration'];
    }
    public withAdjustSize(adjustSize: number): PutVolume {
        this['adjust_size'] = adjustSize;
        return this;
    }
    public set adjustSize(adjustSize: number  | undefined) {
        this['adjust_size'] = adjustSize;
    }
    public get adjustSize(): number | undefined {
        return this['adjust_size'];
    }
}