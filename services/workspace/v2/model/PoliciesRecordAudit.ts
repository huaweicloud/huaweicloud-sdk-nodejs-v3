import { PoliciesRecordAuditRules } from './PoliciesRecordAuditRules';


export class PoliciesRecordAudit {
    public enable?: boolean;
    public rules?: PoliciesRecordAuditRules;
    private 'storage_type'?: string;
    private 'obs_bucket_source'?: string;
    private 'obs_bucket_name'?: string;
    private 'retention_duration'?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): PoliciesRecordAudit {
        this['enable'] = enable;
        return this;
    }
    public withRules(rules: PoliciesRecordAuditRules): PoliciesRecordAudit {
        this['rules'] = rules;
        return this;
    }
    public withStorageType(storageType: string): PoliciesRecordAudit {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withObsBucketSource(obsBucketSource: string): PoliciesRecordAudit {
        this['obs_bucket_source'] = obsBucketSource;
        return this;
    }
    public set obsBucketSource(obsBucketSource: string  | undefined) {
        this['obs_bucket_source'] = obsBucketSource;
    }
    public get obsBucketSource(): string | undefined {
        return this['obs_bucket_source'];
    }
    public withObsBucketName(obsBucketName: string): PoliciesRecordAudit {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withRetentionDuration(retentionDuration: number): PoliciesRecordAudit {
        this['retention_duration'] = retentionDuration;
        return this;
    }
    public set retentionDuration(retentionDuration: number  | undefined) {
        this['retention_duration'] = retentionDuration;
    }
    public get retentionDuration(): number | undefined {
        return this['retention_duration'];
    }
}