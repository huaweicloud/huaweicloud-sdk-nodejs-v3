

export class UpdateInstanceRequestBody {
    private 'migrate_data'?: string;
    public constructor() { 
    }
    public withMigrateData(migrateData: string): UpdateInstanceRequestBody {
        this['migrate_data'] = migrateData;
        return this;
    }
    public set migrateData(migrateData: string  | undefined) {
        this['migrate_data'] = migrateData;
    }
    public get migrateData(): string | undefined {
        return this['migrate_data'];
    }
}