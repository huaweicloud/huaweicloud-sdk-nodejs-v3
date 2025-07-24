import { ExternalServiceCaseStep } from './ExternalServiceCaseStep';


export class ExternalServiceBizCase {
    public description?: string;
    public preparation?: string;
    public steps?: Array<ExternalServiceCaseStep>;
    private 'label_list'?: Array<string>;
    private 'module_id'?: string;
    private 'test_version_id'?: string;
    private 'fix_version_id'?: string;
    private 'assigned_id'?: string;
    private 'issue_id'?: string;
    private 'status_id'?: string;
    private 'defect_id_list'?: Array<string>;
    public constructor() { 
    }
    public withDescription(description: string): ExternalServiceBizCase {
        this['description'] = description;
        return this;
    }
    public withPreparation(preparation: string): ExternalServiceBizCase {
        this['preparation'] = preparation;
        return this;
    }
    public withSteps(steps: Array<ExternalServiceCaseStep>): ExternalServiceBizCase {
        this['steps'] = steps;
        return this;
    }
    public withLabelList(labelList: Array<string>): ExternalServiceBizCase {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<string>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<string> | undefined {
        return this['label_list'];
    }
    public withModuleId(moduleId: string): ExternalServiceBizCase {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withTestVersionId(testVersionId: string): ExternalServiceBizCase {
        this['test_version_id'] = testVersionId;
        return this;
    }
    public set testVersionId(testVersionId: string  | undefined) {
        this['test_version_id'] = testVersionId;
    }
    public get testVersionId(): string | undefined {
        return this['test_version_id'];
    }
    public withFixVersionId(fixVersionId: string): ExternalServiceBizCase {
        this['fix_version_id'] = fixVersionId;
        return this;
    }
    public set fixVersionId(fixVersionId: string  | undefined) {
        this['fix_version_id'] = fixVersionId;
    }
    public get fixVersionId(): string | undefined {
        return this['fix_version_id'];
    }
    public withAssignedId(assignedId: string): ExternalServiceBizCase {
        this['assigned_id'] = assignedId;
        return this;
    }
    public set assignedId(assignedId: string  | undefined) {
        this['assigned_id'] = assignedId;
    }
    public get assignedId(): string | undefined {
        return this['assigned_id'];
    }
    public withIssueId(issueId: string): ExternalServiceBizCase {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withStatusId(statusId: string): ExternalServiceBizCase {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
    public withDefectIdList(defectIdList: Array<string>): ExternalServiceBizCase {
        this['defect_id_list'] = defectIdList;
        return this;
    }
    public set defectIdList(defectIdList: Array<string>  | undefined) {
        this['defect_id_list'] = defectIdList;
    }
    public get defectIdList(): Array<string> | undefined {
        return this['defect_id_list'];
    }
}