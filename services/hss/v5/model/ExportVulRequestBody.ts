

export class ExportVulRequestBody {
    private 'export_headers'?: Array<Array<string>>;
    public constructor() { 
    }
    public withExportHeaders(exportHeaders: Array<Array<string>>): ExportVulRequestBody {
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