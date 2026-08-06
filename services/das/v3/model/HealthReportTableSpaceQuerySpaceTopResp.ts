import { HealthReportTableSpaceTopDataDto } from './HealthReportTableSpaceTopDataDto';


export class HealthReportTableSpaceQuerySpaceTopResp {
    private 'top_data_list'?: Array<HealthReportTableSpaceTopDataDto>;
    private 'collect_timestamp'?: number;
    private 'total_count'?: number;
    public constructor() { 
    }
    public withTopDataList(topDataList: Array<HealthReportTableSpaceTopDataDto>): HealthReportTableSpaceQuerySpaceTopResp {
        this['top_data_list'] = topDataList;
        return this;
    }
    public set topDataList(topDataList: Array<HealthReportTableSpaceTopDataDto>  | undefined) {
        this['top_data_list'] = topDataList;
    }
    public get topDataList(): Array<HealthReportTableSpaceTopDataDto> | undefined {
        return this['top_data_list'];
    }
    public withCollectTimestamp(collectTimestamp: number): HealthReportTableSpaceQuerySpaceTopResp {
        this['collect_timestamp'] = collectTimestamp;
        return this;
    }
    public set collectTimestamp(collectTimestamp: number  | undefined) {
        this['collect_timestamp'] = collectTimestamp;
    }
    public get collectTimestamp(): number | undefined {
        return this['collect_timestamp'];
    }
    public withTotalCount(totalCount: number): HealthReportTableSpaceQuerySpaceTopResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}