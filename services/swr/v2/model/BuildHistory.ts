

export class BuildHistory {
    private 'created_at'?: string;
    private 'created_by'?: string;
    private 'empty_layer'?: boolean;
    public mediaType?: string;
    public size?: number;
    public digest?: string;
    public constructor(createdAt?: string, createdBy?: string, emptyLayer?: boolean, mediaType?: string, size?: number, digest?: string) { 
        this['created_at'] = createdAt;
        this['created_by'] = createdBy;
        this['empty_layer'] = emptyLayer;
        this['mediaType'] = mediaType;
        this['size'] = size;
        this['digest'] = digest;
    }
    public withCreatedAt(createdAt: string): BuildHistory {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withCreatedBy(createdBy: string): BuildHistory {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withEmptyLayer(emptyLayer: boolean): BuildHistory {
        this['empty_layer'] = emptyLayer;
        return this;
    }
    public set emptyLayer(emptyLayer: boolean  | undefined) {
        this['empty_layer'] = emptyLayer;
    }
    public get emptyLayer(): boolean | undefined {
        return this['empty_layer'];
    }
    public withMediaType(mediaType: string): BuildHistory {
        this['mediaType'] = mediaType;
        return this;
    }
    public withSize(size: number): BuildHistory {
        this['size'] = size;
        return this;
    }
    public withDigest(digest: string): BuildHistory {
        this['digest'] = digest;
        return this;
    }
}