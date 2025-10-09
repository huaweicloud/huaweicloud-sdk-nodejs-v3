

export class PolicyVersion {
    public document?: string;
    private 'version_id'?: string;
    private 'is_default'?: boolean;
    private 'created_at'?: Date;
    public constructor(document?: string, versionId?: string, isDefault?: boolean, createdAt?: Date) { 
        this['document'] = document;
        this['version_id'] = versionId;
        this['is_default'] = isDefault;
        this['created_at'] = createdAt;
    }
    public withDocument(document: string): PolicyVersion {
        this['document'] = document;
        return this;
    }
    public withVersionId(versionId: string): PolicyVersion {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withIsDefault(isDefault: boolean): PolicyVersion {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withCreatedAt(createdAt: Date): PolicyVersion {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}