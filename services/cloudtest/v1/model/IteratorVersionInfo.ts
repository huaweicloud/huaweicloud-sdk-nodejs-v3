import { WorkItemInfo } from './WorkItemInfo';


export class IteratorVersionInfo {
    public name?: string;
    private 'number'?: string;
    public owner?: string;
    public version?: string;
    public description?: string;
    public iterations?: Array<string>;
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
    private 'current_stage'?: string;
    private 'service_types'?: Array<string>;
    private 'issue_list'?: Array<WorkItemInfo>;
    private 'risk_rating'?: number;
    private 'risk_des'?: string;
    private 'is_update_risk'?: string;
    private 'pi_id'?: string;
    public constructor(name?: string, projectUuid?: string) { 
        this['name'] = name;
        this['project_uuid'] = projectUuid;
    }
    public withName(name: string): IteratorVersionInfo {
        this['name'] = name;
        return this;
    }
    public withModelNumber(modelNumber: string): IteratorVersionInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withOwner(owner: string): IteratorVersionInfo {
        this['owner'] = owner;
        return this;
    }
    public withVersion(version: string): IteratorVersionInfo {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): IteratorVersionInfo {
        this['description'] = description;
        return this;
    }
    public withIterations(iterations: Array<string>): IteratorVersionInfo {
        this['iterations'] = iterations;
        return this;
    }
    public withIsMaster(isMaster: string): IteratorVersionInfo {
        this['is_master'] = isMaster;
        return this;
    }
    public set isMaster(isMaster: string  | undefined) {
        this['is_master'] = isMaster;
    }
    public get isMaster(): string | undefined {
        return this['is_master'];
    }
    public withPbiId(pbiId: string): IteratorVersionInfo {
        this['pbi_id'] = pbiId;
        return this;
    }
    public set pbiId(pbiId: string  | undefined) {
        this['pbi_id'] = pbiId;
    }
    public get pbiId(): string | undefined {
        return this['pbi_id'];
    }
    public withPbiName(pbiName: string): IteratorVersionInfo {
        this['pbi_name'] = pbiName;
        return this;
    }
    public set pbiName(pbiName: string  | undefined) {
        this['pbi_name'] = pbiName;
    }
    public get pbiName(): string | undefined {
        return this['pbi_name'];
    }
    public withPlanStartDate(planStartDate: string): IteratorVersionInfo {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withPlanStartTimestamp(planStartTimestamp: number): IteratorVersionInfo {
        this['plan_start_timestamp'] = planStartTimestamp;
        return this;
    }
    public set planStartTimestamp(planStartTimestamp: number  | undefined) {
        this['plan_start_timestamp'] = planStartTimestamp;
    }
    public get planStartTimestamp(): number | undefined {
        return this['plan_start_timestamp'];
    }
    public withPlanEndDate(planEndDate: string): IteratorVersionInfo {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withPlanEndTimestamp(planEndTimestamp: number): IteratorVersionInfo {
        this['plan_end_timestamp'] = planEndTimestamp;
        return this;
    }
    public set planEndTimestamp(planEndTimestamp: number  | undefined) {
        this['plan_end_timestamp'] = planEndTimestamp;
    }
    public get planEndTimestamp(): number | undefined {
        return this['plan_end_timestamp'];
    }
    public withAsynGit(asynGit: string): IteratorVersionInfo {
        this['asyn_git'] = asynGit;
        return this;
    }
    public set asynGit(asynGit: string  | undefined) {
        this['asyn_git'] = asynGit;
    }
    public get asynGit(): string | undefined {
        return this['asyn_git'];
    }
    public withProjectUuid(projectUuid: string): IteratorVersionInfo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withProjectName(projectName: string): IteratorVersionInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withCurrentStage(currentStage: string): IteratorVersionInfo {
        this['current_stage'] = currentStage;
        return this;
    }
    public set currentStage(currentStage: string  | undefined) {
        this['current_stage'] = currentStage;
    }
    public get currentStage(): string | undefined {
        return this['current_stage'];
    }
    public withServiceTypes(serviceTypes: Array<string>): IteratorVersionInfo {
        this['service_types'] = serviceTypes;
        return this;
    }
    public set serviceTypes(serviceTypes: Array<string>  | undefined) {
        this['service_types'] = serviceTypes;
    }
    public get serviceTypes(): Array<string> | undefined {
        return this['service_types'];
    }
    public withIssueList(issueList: Array<WorkItemInfo>): IteratorVersionInfo {
        this['issue_list'] = issueList;
        return this;
    }
    public set issueList(issueList: Array<WorkItemInfo>  | undefined) {
        this['issue_list'] = issueList;
    }
    public get issueList(): Array<WorkItemInfo> | undefined {
        return this['issue_list'];
    }
    public withRiskRating(riskRating: number): IteratorVersionInfo {
        this['risk_rating'] = riskRating;
        return this;
    }
    public set riskRating(riskRating: number  | undefined) {
        this['risk_rating'] = riskRating;
    }
    public get riskRating(): number | undefined {
        return this['risk_rating'];
    }
    public withRiskDes(riskDes: string): IteratorVersionInfo {
        this['risk_des'] = riskDes;
        return this;
    }
    public set riskDes(riskDes: string  | undefined) {
        this['risk_des'] = riskDes;
    }
    public get riskDes(): string | undefined {
        return this['risk_des'];
    }
    public withIsUpdateRisk(isUpdateRisk: string): IteratorVersionInfo {
        this['is_update_risk'] = isUpdateRisk;
        return this;
    }
    public set isUpdateRisk(isUpdateRisk: string  | undefined) {
        this['is_update_risk'] = isUpdateRisk;
    }
    public get isUpdateRisk(): string | undefined {
        return this['is_update_risk'];
    }
    public withPiId(piId: string): IteratorVersionInfo {
        this['pi_id'] = piId;
        return this;
    }
    public set piId(piId: string  | undefined) {
        this['pi_id'] = piId;
    }
    public get piId(): string | undefined {
        return this['pi_id'];
    }
}