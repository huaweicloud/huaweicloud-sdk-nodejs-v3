

export class ExportReportObsTmpFileUrlResp {
    private 'file_name'?: string;
    private 'obs_temp_uri'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): ExportReportObsTmpFileUrlResp {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withObsTempUri(obsTempUri: string): ExportReportObsTmpFileUrlResp {
        this['obs_temp_uri'] = obsTempUri;
        return this;
    }
    public set obsTempUri(obsTempUri: string  | undefined) {
        this['obs_temp_uri'] = obsTempUri;
    }
    public get obsTempUri(): string | undefined {
        return this['obs_temp_uri'];
    }
}