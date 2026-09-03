

export class ImportExportObsObjectsRequest {
    private 'connection_id'?: string;
    private 'bucket_name'?: string;
    private 'max_keys'?: number;
    public marker?: string;
    public prefix?: string;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ImportExportObsObjectsRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBucketName(bucketName: string): ImportExportObsObjectsRequest {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withMaxKeys(maxKeys: number): ImportExportObsObjectsRequest {
        this['max_keys'] = maxKeys;
        return this;
    }
    public set maxKeys(maxKeys: number  | undefined) {
        this['max_keys'] = maxKeys;
    }
    public get maxKeys(): number | undefined {
        return this['max_keys'];
    }
    public withMarker(marker: string): ImportExportObsObjectsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPrefix(prefix: string): ImportExportObsObjectsRequest {
        this['prefix'] = prefix;
        return this;
    }
}