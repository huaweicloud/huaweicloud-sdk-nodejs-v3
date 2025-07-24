

export class BranchVersionInfo {
    public name?: string;
    private 'number'?: string;
    private 'is_master'?: string;
    private 'pbi_id'?: string;
    private 'pbi_name'?: string;
    private 'plan_start_date'?: string;
    private 'plan_start_timestamp'?: number;
    private 'plan_end_date'?: string;
    private 'plan_end_timestamp'?: number;
    private 'asyn_git'?: string;
    private 'project_uuid'?: string;
    private 'project_name'?: string;
    public constructor(name?: string, projectUuid?: string) { 
        this['name'] = name;
        this['project_uuid'] = projectUuid;
    }
    public withName(name: string): BranchVersionInfo {
        this['name'] = name;
        return this;
    }
    public withModelNumber(modelNumber: string): BranchVersionInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIsMaster(isMaster: string): BranchVersionInfo {
        this['is_master'] = isMaster;
        return this;
    }
    public set isMaster(isMaster: string  | undefined) {
        this['is_master'] = isMaster;
    }
    public get isMaster(): string | undefined {
        return this['is_master'];
    }
    public withPbiId(pbiId: string): BranchVersionInfo {
        this['pbi_id'] = pbiId;
        return this;
    }
    public set pbiId(pbiId: string  | undefined) {
        this['pbi_id'] = pbiId;
    }
    public get pbiId(): string | undefined {
        return this['pbi_id'];
    }
    public withPbiName(pbiName: string): BranchVersionInfo {
        this['pbi_name'] = pbiName;
        return this;
    }
    public set pbiName(pbiName: string  | undefined) {
        this['pbi_name'] = pbiName;
    }
    public get pbiName(): string | undefined {
        return this['pbi_name'];
    }
    public withPlanStartDate(planStartDate: string): BranchVersionInfo {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withPlanStartTimestamp(planStartTimestamp: number): BranchVersionInfo {
        this['plan_start_timestamp'] = planStartTimestamp;
        return this;
    }
    public set planStartTimestamp(planStartTimestamp: number  | undefined) {
        this['plan_start_timestamp'] = planStartTimestamp;
    }
    public get planStartTimestamp(): number | undefined {
        return this['plan_start_timestamp'];
    }
    public withPlanEndDate(planEndDate: string): BranchVersionInfo {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withPlanEndTimestamp(planEndTimestamp: number): BranchVersionInfo {
        this['plan_end_timestamp'] = planEndTimestamp;
        return this;
    }
    public set planEndTimestamp(planEndTimestamp: number  | undefined) {
        this['plan_end_timestamp'] = planEndTimestamp;
    }
    public get planEndTimestamp(): number | undefined {
        return this['plan_end_timestamp'];
    }
    public withAsynGit(asynGit: string): BranchVersionInfo {
        this['asyn_git'] = asynGit;
        return this;
    }
    public set asynGit(asynGit: string  | undefined) {
        this['asyn_git'] = asynGit;
    }
    public get asynGit(): string | undefined {
        return this['asyn_git'];
    }
    public withProjectUuid(projectUuid: string): BranchVersionInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withProjectName(projectName: string): BranchVersionInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
}