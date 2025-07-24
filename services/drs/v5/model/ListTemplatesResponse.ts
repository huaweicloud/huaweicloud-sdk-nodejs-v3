import { ExportReportObsFileRespExportReportObsFiles } from './ExportReportObsFileRespExportReportObsFiles';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public count?: number;
    private 'export_report_obs_files'?: Array<ExportReportObsFileRespExportReportObsFiles>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withExportReportObsFiles(exportReportObsFiles: Array<ExportReportObsFileRespExportReportObsFiles>): ListTemplatesResponse {
        this['export_report_obs_files'] = exportReportObsFiles;
        return this;
    }
    public set exportReportObsFiles(exportReportObsFiles: Array<ExportReportObsFileRespExportReportObsFiles>  | undefined) {
        this['export_report_obs_files'] = exportReportObsFiles;
    }
    public get exportReportObsFiles(): Array<ExportReportObsFileRespExportReportObsFiles> | undefined {
        return this['export_report_obs_files'];
    }
}