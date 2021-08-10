

export class CheckMd5DuplicationRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public size: number;
    public md5: string;
    public constructor(size?: any, md5?: any) { 
        this['size'] = size;
        this['md5'] = md5;
    }
    public withAuthorization(authorization: string): CheckMd5DuplicationRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): CheckMd5DuplicationRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
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