import { InspectionReports } from './InspectionReports';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInspectionHistoriesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'inspection_reports'?: Array<InspectionReports>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListInspectionHistoriesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInspectionReports(inspectionReports: Array<InspectionReports>): ListInspectionHistoriesResponse {
        this['inspection_reports'] = inspectionReports;
        return this;
    }
    public set inspectionReports(inspectionReports: Array<InspectionReports>  | undefined) {
        this['inspection_reports'] = inspectionReports;
    }
    public get inspectionReports(): Array<InspectionReports> | undefined {
        return this['inspection_reports'];
    }
}