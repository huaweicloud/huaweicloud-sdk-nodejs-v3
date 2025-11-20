import { IamAccount } from './IamAccount';


export class MigrateRouteSwitchReqVO {
    private 'iam_account'?: IamAccount;
    private 'project_id'?: string;
    private 'instance_id'?: string;
    private 'task_id'?: string;
    private 'switch_route_begin_time'?: string;
    private 'switch_route_end_time'?: string;
    private 'is_open_api'?: boolean;
    private 'logic_db_name'?: string;
    public constructor() { 
    }
    public withIamAccount(iamAccount: IamAccount): MigrateRouteSwitchReqVO {
        this['iam_account'] = iamAccount;
        return this;
    }
    public set iamAccount(iamAccount: IamAccount  | undefined) {
        this['iam_account'] = iamAccount;
    }
    public get iamAccount(): IamAccount | undefined {
        return this['iam_account'];
    }
    public withProjectId(projectId: string): MigrateRouteSwitchReqVO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceId(instanceId: string): MigrateRouteSwitchReqVO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskId(taskId: string): MigrateRouteSwitchReqVO {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withSwitchRouteBeginTime(switchRouteBeginTime: string): MigrateRouteSwitchReqVO {
        this['switch_route_begin_time'] = switchRouteBeginTime;
        return this;
    }
    public set switchRouteBeginTime(switchRouteBeginTime: string  | undefined) {
        this['switch_route_begin_time'] = switchRouteBeginTime;
    }
    public get switchRouteBeginTime(): string | undefined {
        return this['switch_route_begin_time'];
    }
    public withSwitchRouteEndTime(switchRouteEndTime: string): MigrateRouteSwitchReqVO {
        this['switch_route_end_time'] = switchRouteEndTime;
        return this;
    }
    public set switchRouteEndTime(switchRouteEndTime: string  | undefined) {
        this['switch_route_end_time'] = switchRouteEndTime;
    }
    public get switchRouteEndTime(): string | undefined {
        return this['switch_route_end_time'];
    }
    public withIsOpenApi(isOpenApi: boolean): MigrateRouteSwitchReqVO {
        this['is_open_api'] = isOpenApi;
        return this;
    }
    public set isOpenApi(isOpenApi: boolean  | undefined) {
        this['is_open_api'] = isOpenApi;
    }
    public get isOpenApi(): boolean | undefined {
        return this['is_open_api'];
    }
    public withLogicDbName(logicDbName: string): MigrateRouteSwitchReqVO {
        this['logic_db_name'] = logicDbName;
        return this;
    }
    public set logicDbName(logicDbName: string  | undefined) {
        this['logic_db_name'] = logicDbName;
    }
    public get logicDbName(): string | undefined {
        return this['logic_db_name'];
    }
}