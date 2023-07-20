

export class ImportFlinkJobRequestBody {
    private 'zip_file'?: string;
    private 'is_cover'?: boolean;
    public constructor(zipFile?: string) { 
        this['zip_file'] = zipFile;
    }
    public withZipFile(zipFile: string): ImportFlinkJobRequestBody {
        this['zip_file'] = zipFile;
        return this;
    }
    public set zipFile(zipFile: string  | undefined) {
        this['zip_file'] = zipFile;
    }
    public get zipFile(): string | undefined {
        return this['zip_file'];
    }
    public withIsCover(isCover: boolean): ImportFlinkJobRequestBody {
        this['is_cover'] = isCover;
        return this;
    }
    public set isCover(isCover: boolean  | undefined) {
        this['is_cover'] = isCover;
    }
    public get isCover(): boolean | undefined {
        return this['is_cover'];
    }
}