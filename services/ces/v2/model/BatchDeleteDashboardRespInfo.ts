import { DashBoardIdItem } from './DashBoardIdItem';


export class BatchDeleteDashboardRespInfo {
    private 'dashboard_id'?: string;
    private 'ret_status'?: BatchDeleteDashboardRespInfoRetStatusEnum | string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withDashboardId(dashboardId: string): BatchDeleteDashboardRespInfo {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withRetStatus(retStatus: BatchDeleteDashboardRespInfoRetStatusEnum | string): BatchDeleteDashboardRespInfo {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: BatchDeleteDashboardRespInfoRetStatusEnum | string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): BatchDeleteDashboardRespInfoRetStatusEnum | string | undefined {
        return this['ret_status'];
    }
    public withErrorMsg(errorMsg: string): BatchDeleteDashboardRespInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteDashboardRespInfoRetStatusEnum {
    SUCCESSFUL = 'successful',
    ERROR = 'error'
}
