

export class UpdateAzByInstanceTypeReq {
    private 'source_az'?: string;
    private 'target_az'?: string;
    private 'migrate_type'?: string;
    public agency?: string;
    private 'indices_backup_check'?: boolean;
    public constructor(sourceAz?: string, targetAz?: string, migrateType?: string, agency?: string) { 
        this['source_az'] = sourceAz;
        this['target_az'] = targetAz;
        this['migrate_type'] = migrateType;
        this['agency'] = agency;
    }
    public withSourceAz(sourceAz: string): UpdateAzByInstanceTypeReq {
        this['source_az'] = sourceAz;
        return this;
    }
    public set sourceAz(sourceAz: string  | undefined) {
        this['source_az'] = sourceAz;
    }
    public get sourceAz(): string | undefined {
        return this['source_az'];
    }
    public withTargetAz(targetAz: string): UpdateAzByInstanceTypeReq {
        this['target_az'] = targetAz;
        return this;
    }
    public set targetAz(targetAz: string  | undefined) {
        this['target_az'] = targetAz;
    }
    public get targetAz(): string | undefined {
        return this['target_az'];
    }
    public withMigrateType(migrateType: string): UpdateAzByInstanceTypeReq {
        this['migrate_type'] = migrateType;
        return this;
    }
    public set migrateType(migrateType: string  | undefined) {
        this['migrate_type'] = migrateType;
    }
    public get migrateType(): string | undefined {
        return this['migrate_type'];
    }
    public withAgency(agency: string): UpdateAzByInstanceTypeReq {
        this['agency'] = agency;
        return this;
    }
    public withIndicesBackupCheck(indicesBackupCheck: boolean): UpdateAzByInstanceTypeReq {
        this['indices_backup_check'] = indicesBackupCheck;
        return this;
    }
    public set indicesBackupCheck(indicesBackupCheck: boolean  | undefined) {
        this['indices_backup_check'] = indicesBackupCheck;
    }
    public get indicesBackupCheck(): boolean | undefined {
        return this['indices_backup_check'];
    }
}