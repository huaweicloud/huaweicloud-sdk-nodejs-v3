import { ExportTaskInfoRequestBodyOperationalReportData } from './ExportTaskInfoRequestBodyOperationalReportData';


export class ExportTaskInfoRequestBody {
    public type?: string;
    private 'operational_report_data'?: ExportTaskInfoRequestBodyOperationalReportData;
    public constructor(type?: string, operationalReportData?: ExportTaskInfoRequestBodyOperationalReportData) { 
        this['type'] = type;
        this['operational_report_data'] = operationalReportData;
    }
    public withType(type: string): ExportTaskInfoRequestBody {
        this['type'] = type;
        return this;
    }
    public withOperationalReportData(operationalReportData: ExportTaskInfoRequestBodyOperationalReportData): ExportTaskInfoRequestBody {
        this['operational_report_data'] = operationalReportData;
        return this;
    }
    public set operationalReportData(operationalReportData: ExportTaskInfoRequestBodyOperationalReportData  | undefined) {
        this['operational_report_data'] = operationalReportData;
    }
    public get operationalReportData(): ExportTaskInfoRequestBodyOperationalReportData | undefined {
        return this['operational_report_data'];
    }
}