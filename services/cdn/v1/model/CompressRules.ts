

export class CompressRules {
    private 'compress_type'?: string;
    private 'compress_file_type'?: string;
    public constructor() { 
    }
    public withCompressType(compressType: string): CompressRules {
        this['compress_type'] = compressType;
        return this;
    }
    public set compressType(compressType: string  | undefined) {
        this['compress_type'] = compressType;
    }
    public get compressType(): string | undefined {
        return this['compress_type'];
    }
    public withCompressFileType(compressFileType: string): CompressRules {
        this['compress_file_type'] = compressFileType;
        return this;
    }
    public set compressFileType(compressFileType: string  | undefined) {
        this['compress_file_type'] = compressFileType;
    }
    public get compressFileType(): string | undefined {
        return this['compress_file_type'];
    }
}