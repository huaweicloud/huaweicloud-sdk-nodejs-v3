import { ViewRow } from './ViewRow';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMonitorItemViewConfigResponse extends SdkResponse {
    public title?: string;
    private 'collector_name'?: string;
    private 'view_row_list'?: Array<ViewRow>;
    public style?: string;
    public constructor() { 
        super();
    }
    public withTitle(title: string): ShowMonitorItemViewConfigResponse {
        this['title'] = title;
        return this;
    }
    public withCollectorName(collectorName: string): ShowMonitorItemViewConfigResponse {
        this['collector_name'] = collectorName;
        return this;
    }
    public set collectorName(collectorName: string  | undefined) {
        this['collector_name'] = collectorName;
    }
    public get collectorName(): string | undefined {
        return this['collector_name'];
    }
    public withViewRowList(viewRowList: Array<ViewRow>): ShowMonitorItemViewConfigResponse {
        this['view_row_list'] = viewRowList;
        return this;
    }
    public set viewRowList(viewRowList: Array<ViewRow>  | undefined) {
        this['view_row_list'] = viewRowList;
    }
    public get viewRowList(): Array<ViewRow> | undefined {
        return this['view_row_list'];
    }
    public withStyle(style: string): ShowMonitorItemViewConfigResponse {
        this['style'] = style;
        return this;
    }
}