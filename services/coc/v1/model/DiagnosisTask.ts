import { BasicDTO } from './BasicDTO';


export class DiagnosisTask {
    public id?: string;
    public code?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    public progress?: number;
    private 'work_order_id'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public type?: string;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'instance_num'?: number;
    private 'os_type'?: string;
    public region?: string;
    public constructor() { 
    }
    public withId(id: string): DiagnosisTask {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): DiagnosisTask {
        this['code'] = code;
        return this;
    }
    public withDomainId(domainId: string): DiagnosisTask {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): DiagnosisTask {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUserId(userId: string): DiagnosisTask {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): DiagnosisTask {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withProgress(progress: number): DiagnosisTask {
        this['progress'] = progress;
        return this;
    }
    public withWorkOrderId(workOrderId: string): DiagnosisTask {
        this['work_order_id'] = workOrderId;
        return this;
    }
    public set workOrderId(workOrderId: string  | undefined) {
        this['work_order_id'] = workOrderId;
    }
    public get workOrderId(): string | undefined {
        return this['work_order_id'];
    }
    public withInstanceId(instanceId: string): DiagnosisTask {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DiagnosisTask {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withType(type: string): DiagnosisTask {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): DiagnosisTask {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): DiagnosisTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): DiagnosisTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withInstanceNum(instanceNum: number): DiagnosisTask {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withOsType(osType: string): DiagnosisTask {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRegion(region: string): DiagnosisTask {
        this['region'] = region;
        return this;
    }
}