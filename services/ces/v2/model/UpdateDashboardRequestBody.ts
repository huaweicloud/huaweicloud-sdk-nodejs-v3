import { ExtendInfo } from './ExtendInfo';


export class UpdateDashboardRequestBody {
    private 'dashboard_name'?: string;
    private 'is_favorite'?: boolean;
    private 'row_widget_num'?: number;
    private 'extend_info'?: ExtendInfo;
    public constructor(rowWidgetNum?: number) { 
        this['row_widget_num'] = rowWidgetNum;
    }
    public withDashboardName(dashboardName: string): UpdateDashboardRequestBody {
        this['dashboard_name'] = dashboardName;
        return this;
    }
    public set dashboardName(dashboardName: string  | undefined) {
        this['dashboard_name'] = dashboardName;
    }
    public get dashboardName(): string | undefined {
        return this['dashboard_name'];
    }
    public withIsFavorite(isFavorite: boolean): UpdateDashboardRequestBody {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: boolean  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): boolean | undefined {
        return this['is_favorite'];
    }
    public withRowWidgetNum(rowWidgetNum: number): UpdateDashboardRequestBody {
        this['row_widget_num'] = rowWidgetNum;
        return this;
    }
    public set rowWidgetNum(rowWidgetNum: number  | undefined) {
        this['row_widget_num'] = rowWidgetNum;
    }
    public get rowWidgetNum(): number | undefined {
        return this['row_widget_num'];
    }
    public withExtendInfo(extendInfo: ExtendInfo): UpdateDashboardRequestBody {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: ExtendInfo  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): ExtendInfo | undefined {
        return this['extend_info'];
    }
}