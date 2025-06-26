

export class AuthorizeObsReq {
    private 'app_file_name'?: string;
    public constructor(appFileName?: string) { 
        this['app_file_name'] = appFileName;
    }
    public withAppFileName(appFileName: string): AuthorizeObsReq {
        this['app_file_name'] = appFileName;
        return this;
    }
    public set appFileName(appFileName: string  | undefined) {
        this['app_file_name'] = appFileName;
    }
    public get appFileName(): string | undefined {
        return this['app_file_name'];
    }
}