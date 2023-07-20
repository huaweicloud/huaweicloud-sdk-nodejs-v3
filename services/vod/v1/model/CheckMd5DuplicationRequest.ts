

export class CheckMd5DuplicationRequest {
    private 'X-Sdk-Date'?: string;
    public size?: number;
    public md5?: string;
    public constructor(size?: number, md5?: string) { 
        this['size'] = size;
        this['md5'] = md5;
    }
    public withXSdkDate(xSdkDate: string): CheckMd5DuplicationRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withSize(size: number): CheckMd5DuplicationRequest {
        this['size'] = size;
        return this;
    }
    public withMd5(md5: string): CheckMd5DuplicationRequest {
        this['md5'] = md5;
        return this;
    }
}