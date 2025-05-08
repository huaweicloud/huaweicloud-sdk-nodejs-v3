import { LogicalClusterPlanActions } from './LogicalClusterPlanActions';


export class LogicalClusterPlanVo {
    public id?: string;
    private 'logical_cluster_name'?: string;
    private 'node_num'?: number;
    private 'plan_type'?: string;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'update_time'?: string;
    public user?: string;
    public actions?: Array<LogicalClusterPlanActions>;
    public constructor() { 
    }
    public withId(id: string): LogicalClusterPlanVo {
        this['id'] = id;
        return this;
    }
    public withLogicalClusterName(logicalClusterName: string): LogicalClusterPlanVo {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withNodeNum(nodeNum: number): LogicalClusterPlanVo {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withPlanType(planType: string): LogicalClusterPlanVo {
        this['plan_type'] = planType;
        return this;
    }
    public set planType(planType: string  | undefined) {
        this['plan_type'] = planType;
    }
    public get planType(): string | undefined {
        return this['plan_type'];
    }
    public withStatus(status: string): LogicalClusterPlanVo {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): LogicalClusterPlanVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): LogicalClusterPlanVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUpdateTime(updateTime: string): LogicalClusterPlanVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUser(user: string): LogicalClusterPlanVo {
        this['user'] = user;
        return this;
    }
    public withActions(actions: Array<LogicalClusterPlanActions>): LogicalClusterPlanVo {
        this['actions'] = actions;
        return this;
    }
}