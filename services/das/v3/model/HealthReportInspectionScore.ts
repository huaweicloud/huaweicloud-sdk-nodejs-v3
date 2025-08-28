import { HealthReportLostPointsDetail } from './HealthReportLostPointsDetail';


export class HealthReportInspectionScore {
    public score?: number;
    public critical?: number;
    public medium?: number;
    public light?: number;
    private 'cpu_usage'?: number;
    private 'mem_usage'?: number;
    private 'space_usage'?: number;
    private 'connection_rate'?: number;
    private 'iops_usage'?: number;
    private 'thread_running'?: number;
    private 'slow_sql_total'?: number;
    private 'lost_points_detail_list'?: Array<HealthReportLostPointsDetail>;
    public constructor(score?: number, critical?: number, medium?: number, light?: number, cpuUsage?: number, memUsage?: number, spaceUsage?: number, connectionRate?: number, iopsUsage?: number, threadRunning?: number, slowSqlTotal?: number, lostPointsDetailList?: Array<HealthReportLostPointsDetail>) { 
        this['score'] = score;
        this['critical'] = critical;
        this['medium'] = medium;
        this['light'] = light;
        this['cpu_usage'] = cpuUsage;
        this['mem_usage'] = memUsage;
        this['space_usage'] = spaceUsage;
        this['connection_rate'] = connectionRate;
        this['iops_usage'] = iopsUsage;
        this['thread_running'] = threadRunning;
        this['slow_sql_total'] = slowSqlTotal;
        this['lost_points_detail_list'] = lostPointsDetailList;
    }
    public withScore(score: number): HealthReportInspectionScore {
        this['score'] = score;
        return this;
    }
    public withCritical(critical: number): HealthReportInspectionScore {
        this['critical'] = critical;
        return this;
    }
    public withMedium(medium: number): HealthReportInspectionScore {
        this['medium'] = medium;
        return this;
    }
    public withLight(light: number): HealthReportInspectionScore {
        this['light'] = light;
        return this;
    }
    public withCpuUsage(cpuUsage: number): HealthReportInspectionScore {
        this['cpu_usage'] = cpuUsage;
        return this;
    }
    public set cpuUsage(cpuUsage: number  | undefined) {
        this['cpu_usage'] = cpuUsage;
    }
    public get cpuUsage(): number | undefined {
        return this['cpu_usage'];
    }
    public withMemUsage(memUsage: number): HealthReportInspectionScore {
        this['mem_usage'] = memUsage;
        return this;
    }
    public set memUsage(memUsage: number  | undefined) {
        this['mem_usage'] = memUsage;
    }
    public get memUsage(): number | undefined {
        return this['mem_usage'];
    }
    public withSpaceUsage(spaceUsage: number): HealthReportInspectionScore {
        this['space_usage'] = spaceUsage;
        return this;
    }
    public set spaceUsage(spaceUsage: number  | undefined) {
        this['space_usage'] = spaceUsage;
    }
    public get spaceUsage(): number | undefined {
        return this['space_usage'];
    }
    public withConnectionRate(connectionRate: number): HealthReportInspectionScore {
        this['connection_rate'] = connectionRate;
        return this;
    }
    public set connectionRate(connectionRate: number  | undefined) {
        this['connection_rate'] = connectionRate;
    }
    public get connectionRate(): number | undefined {
        return this['connection_rate'];
    }
    public withIopsUsage(iopsUsage: number): HealthReportInspectionScore {
        this['iops_usage'] = iopsUsage;
        return this;
    }
    public set iopsUsage(iopsUsage: number  | undefined) {
        this['iops_usage'] = iopsUsage;
    }
    public get iopsUsage(): number | undefined {
        return this['iops_usage'];
    }
    public withThreadRunning(threadRunning: number): HealthReportInspectionScore {
        this['thread_running'] = threadRunning;
        return this;
    }
    public set threadRunning(threadRunning: number  | undefined) {
        this['thread_running'] = threadRunning;
    }
    public get threadRunning(): number | undefined {
        return this['thread_running'];
    }
    public withSlowSqlTotal(slowSqlTotal: number): HealthReportInspectionScore {
        this['slow_sql_total'] = slowSqlTotal;
        return this;
    }
    public set slowSqlTotal(slowSqlTotal: number  | undefined) {
        this['slow_sql_total'] = slowSqlTotal;
    }
    public get slowSqlTotal(): number | undefined {
        return this['slow_sql_total'];
    }
    public withLostPointsDetailList(lostPointsDetailList: Array<HealthReportLostPointsDetail>): HealthReportInspectionScore {
        this['lost_points_detail_list'] = lostPointsDetailList;
        return this;
    }
    public set lostPointsDetailList(lostPointsDetailList: Array<HealthReportLostPointsDetail>  | undefined) {
        this['lost_points_detail_list'] = lostPointsDetailList;
    }
    public get lostPointsDetailList(): Array<HealthReportLostPointsDetail> | undefined {
        return this['lost_points_detail_list'];
    }
}