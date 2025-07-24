import { ExternalServiceCaseStep } from './ExternalServiceCaseStep';


export class ExternalServiceCaseInfo {
    public description?: string;
    public preparation?: string;
    public steps?: Array<ExternalServiceCaseStep>;
    private 'label_list'?: Array<string>;
    private 'module_id'?: string;
    private 'test_version_id'?: string;
    private 'fix_version_id'?: string;
    private 'assigned_id'?: string;
    private 'issue_id'?: string;
    public constructor() { 
    }
    public withDescription(description: string): ExternalServiceCaseInfo {
        this['description'] = description;
        return this;
    }
    public withPreparation(preparation: string): ExternalServiceCaseInfo {
        this['preparation'] = preparation;
        return this;
    }
    public withSteps(steps: Array<ExternalServiceCaseStep>): ExternalServiceCaseInfo {
        this['steps'] = steps;
        return this;
    }
    public withLabelList(labelList: Array<string>): ExternalServiceCaseInfo {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<string>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<string> | undefined {
        return this['label_list'];
    }
    public withModuleId(moduleId: string): ExternalServiceCaseInfo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withTestVersionId(testVersionId: string): ExternalServiceCaseInfo {
        this['test_version_id'] = testVersionId;
        return this;
    }
    public set testVersionId(testVersionId: string  | undefined) {
        this['test_version_id'] = testVersionId;
    }
    public get testVersionId(): string | undefined {
        return this['test_version_id'];
    }
    public withFixVersionId(fixVersionId: string): ExternalServiceCaseInfo {
        this['fix_version_id'] = fixVersionId;
        return this;
    }
    public set fixVersionId(fixVersionId: string  | undefined) {
        this['fix_version_id'] = fixVersionId;
    }
    public get fixVersionId(): string | undefined {
        return this['fix_version_id'];
    }
    public withAssignedId(assignedId: string): ExternalServiceCaseInfo {
        this['assigned_id'] = assignedId;
        return this;
    }
    public set assignedId(assignedId: string  | undefined) {
        this['assigned_id'] = assignedId;
    }
    public get assignedId(): string | undefined {
        return this['assigned_id'];
    }
    public withIssueId(issueId: string): ExternalServiceCaseInfo {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
}