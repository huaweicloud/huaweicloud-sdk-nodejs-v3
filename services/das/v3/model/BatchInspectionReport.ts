import { BatchInspectionLostPointsDetail } from './BatchInspectionLostPointsDetail';


export class BatchInspectionReport {
    private 'task_id'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public cpu?: number;
    public mem?: number;
    private 'disk_size'?: number;
    private 'create_at'?: number;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'health_rank'?: string;
    public score?: number;
    private 'lost_points_detail_list'?: Array<BatchInspectionLostPointsDetail>;
    public constructor(taskId?: string, instanceId?: string, instanceName?: string, startAt?: number, endAt?: number) { 
        this['task_id'] = taskId;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withTaskId(taskId: string): BatchInspectionReport {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): BatchInspectionReport {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BatchInspectionReport {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withCpu(cpu: number): BatchInspectionReport {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: number): BatchInspectionReport {
        this['mem'] = mem;
        return this;
    }
    public withDiskSize(diskSize: number): BatchInspectionReport {
        this['disk_size'] = diskSize;
        return this;
    }
    public set diskSize(diskSize: number  | undefined) {
        this['disk_size'] = diskSize;
    }
    public get diskSize(): number | undefined {
        return this['disk_size'];
    }
    public withCreateAt(createAt: number): BatchInspectionReport {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withStartAt(startAt: number): BatchInspectionReport {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): BatchInspectionReport {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withHealthRank(healthRank: string): BatchInspectionReport {
        this['health_rank'] = healthRank;
        return this;
    }
    public set healthRank(healthRank: string  | undefined) {
        this['health_rank'] = healthRank;
    }
    public get healthRank(): string | undefined {
        return this['health_rank'];
    }
    public withScore(score: number): BatchInspectionReport {
        this['score'] = score;
        return this;
    }
    public withLostPointsDetailList(lostPointsDetailList: Array<BatchInspectionLostPointsDetail>): BatchInspectionReport {
        this['lost_points_detail_list'] = lostPointsDetailList;
        return this;
    }
    public set lostPointsDetailList(lostPointsDetailList: Array<BatchInspectionLostPointsDetail>  | undefined) {
        this['lost_points_detail_list'] = lostPointsDetailList;
    }
    public get lostPointsDetailList(): Array<BatchInspectionLostPointsDetail> | undefined {
        return this['lost_points_detail_list'];
    }
}