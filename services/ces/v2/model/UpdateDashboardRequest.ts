import { UpdateDashboardRequestBody } from './UpdateDashboardRequestBody';


export class UpdateDashboardRequest {
    private 'dashboard_id'?: string;
    public body?: UpdateDashboardRequestBody;
    public constructor(dashboardId?: string) { 
        this['dashboard_id'] = dashboardId;
    }
    public withDashboardId(dashboardId: string): UpdateDashboardRequest {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withBody(body: UpdateDashboardRequestBody): UpdateDashboardRequest {
        this['body'] = body;
        return this;
    }
}