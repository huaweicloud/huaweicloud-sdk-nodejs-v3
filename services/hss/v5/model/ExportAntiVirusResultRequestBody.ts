

export class ExportAntiVirusResultRequestBody {
    private 'export_headers'?: Array<Array<string>>;
    public constructor() { 
    }
    public withExportHeaders(exportHeaders: Array<Array<string>>): ExportAntiVirusResultRequestBody {
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