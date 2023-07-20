

export class ListMetadatasRespSchemaList {
    public id?: string;
    public name?: string;
    private 'start_time'?: string;
    private 'last_update_time'?: string;
    public encrypted?: boolean;
    private 'master_key_name'?: string;
    private 'master_key_id'?: string;
    public description?: string;
    private 'metadata_path'?: string;
    public status?: string;
    public constructor() { 
    }
    public withId(id: string): ListMetadatasRespSchemaList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListMetadatasRespSchemaList {
        this['name'] = name;
        return this;
    }
    public withStartTime(startTime: string): ListMetadatasRespSchemaList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withLastUpdateTime(lastUpdateTime: string): ListMetadatasRespSchemaList {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withEncrypted(encrypted: boolean): ListMetadatasRespSchemaList {
        this['encrypted'] = encrypted;
        return this;
    }
    public withMasterKeyName(masterKeyName: string): ListMetadatasRespSchemaList {
        this['master_key_name'] = masterKeyName;
        return this;
    }
    public set masterKeyName(masterKeyName: string  | undefined) {
        this['master_key_name'] = masterKeyName;
    }
    public get masterKeyName(): string | undefined {
        return this['master_key_name'];
    }
    public withMasterKeyId(masterKeyId: string): ListMetadatasRespSchemaList {
        this['master_key_id'] = masterKeyId;
        return this;
    }
    public set masterKeyId(masterKeyId: string  | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId(): string | undefined {
        return this['master_key_id'];
    }
    public withDescription(description: string): ListMetadatasRespSchemaList {
        this['description'] = description;
        return this;
    }
    public withMetadataPath(metadataPath: string): ListMetadatasRespSchemaList {
        this['metadata_path'] = metadataPath;
        return this;
    }
    public set metadataPath(metadataPath: string  | undefined) {
        this['metadata_path'] = metadataPath;
    }
    public get metadataPath(): string | undefined {
        return this['metadata_path'];
    }
    public withStatus(status: string): ListMetadatasRespSchemaList {
        this['status'] = status;
        return this;
    }
}