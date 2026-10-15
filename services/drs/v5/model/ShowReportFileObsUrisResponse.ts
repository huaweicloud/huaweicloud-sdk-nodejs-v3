import { ExportReportObsTmpFileUrlResp } from './ExportReportObsTmpFileUrlResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReportFileObsUrisResponse extends SdkResponse {
    public count?: number;
    private 'export_report_obs_files'?: Array<ExportReportObsTmpFileUrlResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowReportFileObsUrisResponse {
        this['count'] = count;
        return this;
    }
    public withExportReportObsFiles(exportReportObsFiles: Array<ExportReportObsTmpFileUrlResp>): ShowReportFileObsUrisResponse {
        this['export_report_obs_files'] = exportReportObsFiles;
        return this;
    }
    public set exportReportObsFiles(exportReportObsFiles: Array<ExportReportObsTmpFileUrlResp>  | undefined) {
        this['export_report_obs_files'] = exportReportObsFiles;
    }
    public get exportReportObsFiles(): Array<ExportReportObsTmpFileUrlResp> | undefined {
        return this['export_report_obs_files'];
    }
}