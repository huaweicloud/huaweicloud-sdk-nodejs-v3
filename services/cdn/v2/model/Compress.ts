

export class Compress {
    public status?: string;
    public type?: string;
    private 'file_type'?: string;
    private 'compress_min_length'?: number;
    private 'compress_max_length'?: number;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): Compress {
        this['status'] = status;
        return this;
    }
    public withType(type: string): Compress {
        this['type'] = type;
        return this;
    }
    public withFileType(fileType: string): Compress {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withCompressMinLength(compressMinLength: number): Compress {
        this['compress_min_length'] = compressMinLength;
        return this;
    }
    public set compressMinLength(compressMinLength: number  | undefined) {
        this['compress_min_length'] = compressMinLength;
    }
    public get compressMinLength(): number | undefined {
        return this['compress_min_length'];
    }
    public withCompressMaxLength(compressMaxLength: number): Compress {
        this['compress_max_length'] = compressMaxLength;
        return this;
    }
    public set compressMaxLength(compressMaxLength: number  | undefined) {
        this['compress_max_length'] = compressMaxLength;
    }
    public get compressMaxLength(): number | undefined {
        return this['compress_max_length'];
    }
}