

export class ShowImageWatermarkByAddressRequestBody {
    private 'region_id'?: string;
    private 'src_file'?: string;
    private 'mark_len'?: number;
    public constructor(regionId?: string, srcFile?: string) { 
        this['region_id'] = regionId;
        this['src_file'] = srcFile;
    }
    public withRegionId(regionId: string): ShowImageWatermarkByAddressRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSrcFile(srcFile: string): ShowImageWatermarkByAddressRequestBody {
        this['src_file'] = srcFile;
        return this;
    }
    public set srcFile(srcFile: string  | undefined) {
        this['src_file'] = srcFile;
    }
    public get srcFile(): string | undefined {
        return this['src_file'];
    }
    public withMarkLen(markLen: number): ShowImageWatermarkByAddressRequestBody {
        this['mark_len'] = markLen;
        return this;
    }
    public set markLen(markLen: number  | undefined) {
        this['mark_len'] = markLen;
    }
    public get markLen(): number | undefined {
        return this['mark_len'];
    }
}