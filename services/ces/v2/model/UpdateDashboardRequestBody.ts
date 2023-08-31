import { DashBoardNameItem } from './DashBoardNameItem';
import { IsFavoriteItem } from './IsFavoriteItem';
import { WidgetDisplayMode } from './WidgetDisplayMode';


export class UpdateDashboardRequestBody {
    private 'dashboard_name'?: string;
    private 'is_favorite'?: boolean;
    private 'row_widget_num'?: number;
    public constructor() { 
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
}