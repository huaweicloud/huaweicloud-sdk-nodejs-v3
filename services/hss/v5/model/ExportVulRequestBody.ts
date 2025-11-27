

export class ExportVulRequestBody {
    private 'export_headers'?: Array<Array<string>>;
    private 'vul_id_list'?: Array<string>;
    private 'host_id_list'?: Array<string>;
    public constructor(exportHeaders?: Array<Array<string>>) { 
        this['export_headers'] = exportHeaders;
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
    public withVulIdList(vulIdList: Array<string>): ExportVulRequestBody {
        this['vul_id_list'] = vulIdList;
        return this;
    }
    public set vulIdList(vulIdList: Array<string>  | undefined) {
        this['vul_id_list'] = vulIdList;
    }
    public get vulIdList(): Array<string> | undefined {
        return this['vul_id_list'];
    }
    public withHostIdList(hostIdList: Array<string>): ExportVulRequestBody {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}