import { DefectEvents } from './DefectEvents';
import { DefectFragmentV2 } from './DefectFragmentV2';


export class DefectInfoV2 {
    private 'defect_id'?: string;
    private 'defect_checker_name'?: string;
    private 'defect_status'?: string;
    private 'rule_system_tags'?: string;
    private 'rule_name'?: string;
    private 'line_number'?: string;
    private 'defect_content'?: string;
    private 'defect_level'?: string;
    private 'file_path'?: string;
    private 'created_at'?: string;
    private 'issue_key'?: string;
    public fragment?: Array<DefectFragmentV2>;
    public events?: Array<DefectEvents>;
    public constructor() { 
    }
    public withDefectId(defectId: string): DefectInfoV2 {
        this['defect_id'] = defectId;
        return this;
    }
    public set defectId(defectId: string  | undefined) {
        this['defect_id'] = defectId;
    }
    public get defectId(): string | undefined {
        return this['defect_id'];
    }
    public withDefectCheckerName(defectCheckerName: string): DefectInfoV2 {
        this['defect_checker_name'] = defectCheckerName;
        return this;
    }
    public set defectCheckerName(defectCheckerName: string  | undefined) {
        this['defect_checker_name'] = defectCheckerName;
    }
    public get defectCheckerName(): string | undefined {
        return this['defect_checker_name'];
    }
    public withDefectStatus(defectStatus: string): DefectInfoV2 {
        this['defect_status'] = defectStatus;
        return this;
    }
    public set defectStatus(defectStatus: string  | undefined) {
        this['defect_status'] = defectStatus;
    }
    public get defectStatus(): string | undefined {
        return this['defect_status'];
    }
    public withRuleSystemTags(ruleSystemTags: string): DefectInfoV2 {
        this['rule_system_tags'] = ruleSystemTags;
        return this;
    }
    public set ruleSystemTags(ruleSystemTags: string  | undefined) {
        this['rule_system_tags'] = ruleSystemTags;
    }
    public get ruleSystemTags(): string | undefined {
        return this['rule_system_tags'];
    }
    public withRuleName(ruleName: string): DefectInfoV2 {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withLineNumber(lineNumber: string): DefectInfoV2 {
        this['line_number'] = lineNumber;
        return this;
    }
    public set lineNumber(lineNumber: string  | undefined) {
        this['line_number'] = lineNumber;
    }
    public get lineNumber(): string | undefined {
        return this['line_number'];
    }
    public withDefectContent(defectContent: string): DefectInfoV2 {
        this['defect_content'] = defectContent;
        return this;
    }
    public set defectContent(defectContent: string  | undefined) {
        this['defect_content'] = defectContent;
    }
    public get defectContent(): string | undefined {
        return this['defect_content'];
    }
    public withDefectLevel(defectLevel: string): DefectInfoV2 {
        this['defect_level'] = defectLevel;
        return this;
    }
    public set defectLevel(defectLevel: string  | undefined) {
        this['defect_level'] = defectLevel;
    }
    public get defectLevel(): string | undefined {
        return this['defect_level'];
    }
    public withFilePath(filePath: string): DefectInfoV2 {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withCreatedAt(createdAt: string): DefectInfoV2 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withIssueKey(issueKey: string): DefectInfoV2 {
        this['issue_key'] = issueKey;
        return this;
    }
    public set issueKey(issueKey: string  | undefined) {
        this['issue_key'] = issueKey;
    }
    public get issueKey(): string | undefined {
        return this['issue_key'];
    }
    public withFragment(fragment: Array<DefectFragmentV2>): DefectInfoV2 {
        this['fragment'] = fragment;
        return this;
    }
    public withEvents(events: Array<DefectEvents>): DefectInfoV2 {
        this['events'] = events;
        return this;
    }
}