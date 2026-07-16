

export class CodeResponse {
    public source?: string;
    public address?: string;
    private 'source_id'?: string;
    private 'mount_path'?: string;
    private 'efs_sub_path'?: string;
    private 'read_only'?: boolean;
    public constructor(source?: string, mountPath?: string) { 
        this['source'] = source;
        this['mount_path'] = mountPath;
    }
    public withSource(source: string): CodeResponse {
        this['source'] = source;
        return this;
    }
    public withAddress(address: string): CodeResponse {
        this['address'] = address;
        return this;
    }
    public withSourceId(sourceId: string): CodeResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withMountPath(mountPath: string): CodeResponse {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withEfsSubPath(efsSubPath: string): CodeResponse {
        this['efs_sub_path'] = efsSubPath;
        return this;
    }
    public set efsSubPath(efsSubPath: string  | undefined) {
        this['efs_sub_path'] = efsSubPath;
    }
    public get efsSubPath(): string | undefined {
        return this['efs_sub_path'];
    }
    public withReadOnly(readOnly: boolean): CodeResponse {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
}