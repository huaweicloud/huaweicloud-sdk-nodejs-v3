import { LogicalClusterPlanActionsParam } from './LogicalClusterPlanActionsParam';


export class LogicalClusterPlanBo {
    private 'logical_cluster_name'?: string;
    public user?: string;
    private 'node_num'?: number;
    private 'main_logical_cluster'?: string;
    private 'plan_type'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public actions?: Array<LogicalClusterPlanActionsParam>;
    public constructor(planType?: string, actions?: Array<LogicalClusterPlanActionsParam>) { 
        this['plan_type'] = planType;
        this['actions'] = actions;
    }
    public withLogicalClusterName(logicalClusterName: string): LogicalClusterPlanBo {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withUser(user: string): LogicalClusterPlanBo {
        this['user'] = user;
        return this;
    }
    public withNodeNum(nodeNum: number): LogicalClusterPlanBo {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withMainLogicalCluster(mainLogicalCluster: string): LogicalClusterPlanBo {
        this['main_logical_cluster'] = mainLogicalCluster;
        return this;
    }
    public set mainLogicalCluster(mainLogicalCluster: string  | undefined) {
        this['main_logical_cluster'] = mainLogicalCluster;
    }
    public get mainLogicalCluster(): string | undefined {
        return this['main_logical_cluster'];
    }
    public withPlanType(planType: string): LogicalClusterPlanBo {
        this['plan_type'] = planType;
        return this;
    }
    public set planType(planType: string  | undefined) {
        this['plan_type'] = planType;
    }
    public get planType(): string | undefined {
        return this['plan_type'];
    }
    public withStartTime(startTime: string): LogicalClusterPlanBo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): LogicalClusterPlanBo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withActions(actions: Array<LogicalClusterPlanActionsParam>): LogicalClusterPlanBo {
        this['actions'] = actions;
        return this;
    }
}