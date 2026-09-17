

export class ShowSlowLogStatisticsNewRequestBody {
    private 'node_ids'?: Array<string>;
    private 'statistics_field'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'sort_field'?: string;
    private 'sort_asc'?: boolean;
    public constructor(statisticsField?: string, startTime?: number, endTime?: number) { 
        this['statistics_field'] = statisticsField;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withNodeIds(nodeIds: Array<string>): ShowSlowLogStatisticsNewRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withStatisticsField(statisticsField: string): ShowSlowLogStatisticsNewRequestBody {
        this['statistics_field'] = statisticsField;
        return this;
    }
    public set statisticsField(statisticsField: string  | undefined) {
        this['statistics_field'] = statisticsField;
    }
    public get statisticsField(): string | undefined {
        return this['statistics_field'];
    }
    public withStartTime(startTime: number): ShowSlowLogStatisticsNewRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowSlowLogStatisticsNewRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSortField(sortField: string): ShowSlowLogStatisticsNewRequestBody {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortAsc(sortAsc: boolean): ShowSlowLogStatisticsNewRequestBody {
        this['sort_asc'] = sortAsc;
        return this;
    }
    public set sortAsc(sortAsc: boolean  | undefined) {
        this['sort_asc'] = sortAsc;
    }
    public get sortAsc(): boolean | undefined {
        return this['sort_asc'];
    }
}