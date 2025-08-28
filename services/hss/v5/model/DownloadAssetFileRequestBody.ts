

export class DownloadAssetFileRequestBody {
    private 'search_param'?: string;
    private 'export_headers'?: Array<Array<string>>;
    public constructor(exportHeaders?: Array<Array<string>>) { 
        this['export_headers'] = exportHeaders;
    }
    public withSearchParam(searchParam: string): DownloadAssetFileRequestBody {
        this['search_param'] = searchParam;
        return this;
    }
    public set searchParam(searchParam: string  | undefined) {
        this['search_param'] = searchParam;
    }
    public get searchParam(): string | undefined {
        return this['search_param'];
    }
    public withExportHeaders(exportHeaders: Array<Array<string>>): DownloadAssetFileRequestBody {
        this['export_headers'] = exportHeaders;
        return this;
    }
    public set exportHeaders(exportHeaders: Array<Array<string>>  | undefined) {
        this['export_headers'] = exportHeaders;
    }
    public get exportHeaders(): Array<Array<string>> | undefined {
        return this['export_headers'];
    }
}