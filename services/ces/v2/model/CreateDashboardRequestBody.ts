import { DashBoardIdItem } from './DashBoardIdItem';
import { DashBoardNameItem } from './DashBoardNameItem';
import { EnterpriseIdItem } from './EnterpriseIdItem';


export class CreateDashboardRequestBody {
    private 'dashboard_name'?: string;
    private 'enterprise_id'?: string;
    private 'dashboard_id'?: string;
    private 'row_widget_num'?: number;
    public constructor() { 
    }
    public withDashboardName(dashboardName: string): CreateDashboardRequestBody {
        this['dashboard_name'] = dashboardName;
        return this;
    }
    public set dashboardName(dashboardName: string  | undefined) {
        this['dashboard_name'] = dashboardName;
    }
    public get dashboardName(): string | undefined {
        return this['dashboard_name'];
    }
    public withEnterpriseId(enterpriseId: string): CreateDashboardRequestBody {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withDashboardId(dashboardId: string): CreateDashboardRequestBody {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withRowWidgetNum(rowWidgetNum: number): CreateDashboardRequestBody {
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