import { BaseWidgetInfo } from './BaseWidgetInfo';


export class CreateDashboardWidgetsRequest {
    private 'dashboard_id'?: string;
    public body?: Array<BaseWidgetInfo>;
    public constructor(dashboardId?: string) { 
        this['dashboard_id'] = dashboardId;
    }
    public withDashboardId(dashboardId: string): CreateDashboardWidgetsRequest {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withBody(body: Array<BaseWidgetInfo>): CreateDashboardWidgetsRequest {
        this['body'] = body;
        return this;
    }
}