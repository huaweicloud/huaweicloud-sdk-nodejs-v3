
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskDetailResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'creator_id'?: string;
    private 'git_url'?: string;
    private 'git_branch'?: string;
    private 'last_check_time'?: string;
    private 'code_line_total'?: number;
    private 'code_line'?: number;
    private 'code_quality'?: number;
    private 'issue_count'?: number;
    private 'risk_coefficient'?: number;
    private 'duplication_ratio'?: string;
    private 'complexity_count'?: number;
    private 'duplicated_lines'?: number;
    private 'comment_lines'?: number;
    private 'comment_ratio'?: string;
    private 'duplicated_blocks'?: number;
    private 'last_exec_time'?: string;
    private 'check_type'?: string;
    private 'created_at'?: string;
    private 'cyclomatic_complexity_per_method'?: string;
    private 'cyclomatic_complexity_per_file'?: string;
    private 'critical_count'?: string;
    private 'major_count'?: string;
    private 'minor_count'?: string;
    private 'suggestion_count'?: string;
    private 'is_access'?: string;
    private 'review_result'?: string;
    private 'trigger_type'?: string;
    private 'file_duplication_ratio'?: string;
    private 'new_count'?: number;
    private 'solve_count'?: number;
    private 'dismissed_count'?: number;
    private 'duplicated_files'?: number;
    private 'new_critical_count'?: string;
    private 'new_major_count'?: string;
    private 'new_minor_count'?: string;
    private 'new_suggestion_count'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowTaskDetailResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ShowTaskDetailResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withCreatorId(creatorId: string): ShowTaskDetailResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withGitUrl(gitUrl: string): ShowTaskDetailResponse {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withGitBranch(gitBranch: string): ShowTaskDetailResponse {
        this['git_branch'] = gitBranch;
        return this;
    }
    public set gitBranch(gitBranch: string  | undefined) {
        this['git_branch'] = gitBranch;
    }
    public get gitBranch(): string | undefined {
        return this['git_branch'];
    }
    public withLastCheckTime(lastCheckTime: string): ShowTaskDetailResponse {
        this['last_check_time'] = lastCheckTime;
        return this;
    }
    public set lastCheckTime(lastCheckTime: string  | undefined) {
        this['last_check_time'] = lastCheckTime;
    }
    public get lastCheckTime(): string | undefined {
        return this['last_check_time'];
    }
    public withCodeLineTotal(codeLineTotal: number): ShowTaskDetailResponse {
        this['code_line_total'] = codeLineTotal;
        return this;
    }
    public set codeLineTotal(codeLineTotal: number  | undefined) {
        this['code_line_total'] = codeLineTotal;
    }
    public get codeLineTotal(): number | undefined {
        return this['code_line_total'];
    }
    public withCodeLine(codeLine: number): ShowTaskDetailResponse {
        this['code_line'] = codeLine;
        return this;
    }
    public set codeLine(codeLine: number  | undefined) {
        this['code_line'] = codeLine;
    }
    public get codeLine(): number | undefined {
        return this['code_line'];
    }
    public withCodeQuality(codeQuality: number): ShowTaskDetailResponse {
        this['code_quality'] = codeQuality;
        return this;
    }
    public set codeQuality(codeQuality: number  | undefined) {
        this['code_quality'] = codeQuality;
    }
    public get codeQuality(): number | undefined {
        return this['code_quality'];
    }
    public withIssueCount(issueCount: number): ShowTaskDetailResponse {
        this['issue_count'] = issueCount;
        return this;
    }
    public set issueCount(issueCount: number  | undefined) {
        this['issue_count'] = issueCount;
    }
    public get issueCount(): number | undefined {
        return this['issue_count'];
    }
    public withRiskCoefficient(riskCoefficient: number): ShowTaskDetailResponse {
        this['risk_coefficient'] = riskCoefficient;
        return this;
    }
    public set riskCoefficient(riskCoefficient: number  | undefined) {
        this['risk_coefficient'] = riskCoefficient;
    }
    public get riskCoefficient(): number | undefined {
        return this['risk_coefficient'];
    }
    public withDuplicationRatio(duplicationRatio: string): ShowTaskDetailResponse {
        this['duplication_ratio'] = duplicationRatio;
        return this;
    }
    public set duplicationRatio(duplicationRatio: string  | undefined) {
        this['duplication_ratio'] = duplicationRatio;
    }
    public get duplicationRatio(): string | undefined {
        return this['duplication_ratio'];
    }
    public withComplexityCount(complexityCount: number): ShowTaskDetailResponse {
        this['complexity_count'] = complexityCount;
        return this;
    }
    public set complexityCount(complexityCount: number  | undefined) {
        this['complexity_count'] = complexityCount;
    }
    public get complexityCount(): number | undefined {
        return this['complexity_count'];
    }
    public withDuplicatedLines(duplicatedLines: number): ShowTaskDetailResponse {
        this['duplicated_lines'] = duplicatedLines;
        return this;
    }
    public set duplicatedLines(duplicatedLines: number  | undefined) {
        this['duplicated_lines'] = duplicatedLines;
    }
    public get duplicatedLines(): number | undefined {
        return this['duplicated_lines'];
    }
    public withCommentLines(commentLines: number): ShowTaskDetailResponse {
        this['comment_lines'] = commentLines;
        return this;
    }
    public set commentLines(commentLines: number  | undefined) {
        this['comment_lines'] = commentLines;
    }
    public get commentLines(): number | undefined {
        return this['comment_lines'];
    }
    public withCommentRatio(commentRatio: string): ShowTaskDetailResponse {
        this['comment_ratio'] = commentRatio;
        return this;
    }
    public set commentRatio(commentRatio: string  | undefined) {
        this['comment_ratio'] = commentRatio;
    }
    public get commentRatio(): string | undefined {
        return this['comment_ratio'];
    }
    public withDuplicatedBlocks(duplicatedBlocks: number): ShowTaskDetailResponse {
        this['duplicated_blocks'] = duplicatedBlocks;
        return this;
    }
    public set duplicatedBlocks(duplicatedBlocks: number  | undefined) {
        this['duplicated_blocks'] = duplicatedBlocks;
    }
    public get duplicatedBlocks(): number | undefined {
        return this['duplicated_blocks'];
    }
    public withLastExecTime(lastExecTime: string): ShowTaskDetailResponse {
        this['last_exec_time'] = lastExecTime;
        return this;
    }
    public set lastExecTime(lastExecTime: string  | undefined) {
        this['last_exec_time'] = lastExecTime;
    }
    public get lastExecTime(): string | undefined {
        return this['last_exec_time'];
    }
    public withCheckType(checkType: string): ShowTaskDetailResponse {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCreatedAt(createdAt: string): ShowTaskDetailResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withCyclomaticComplexityPerMethod(cyclomaticComplexityPerMethod: string): ShowTaskDetailResponse {
        this['cyclomatic_complexity_per_method'] = cyclomaticComplexityPerMethod;
        return this;
    }
    public set cyclomaticComplexityPerMethod(cyclomaticComplexityPerMethod: string  | undefined) {
        this['cyclomatic_complexity_per_method'] = cyclomaticComplexityPerMethod;
    }
    public get cyclomaticComplexityPerMethod(): string | undefined {
        return this['cyclomatic_complexity_per_method'];
    }
    public withCyclomaticComplexityPerFile(cyclomaticComplexityPerFile: string): ShowTaskDetailResponse {
        this['cyclomatic_complexity_per_file'] = cyclomaticComplexityPerFile;
        return this;
    }
    public set cyclomaticComplexityPerFile(cyclomaticComplexityPerFile: string  | undefined) {
        this['cyclomatic_complexity_per_file'] = cyclomaticComplexityPerFile;
    }
    public get cyclomaticComplexityPerFile(): string | undefined {
        return this['cyclomatic_complexity_per_file'];
    }
    public withCriticalCount(criticalCount: string): ShowTaskDetailResponse {
        this['critical_count'] = criticalCount;
        return this;
    }
    public set criticalCount(criticalCount: string  | undefined) {
        this['critical_count'] = criticalCount;
    }
    public get criticalCount(): string | undefined {
        return this['critical_count'];
    }
    public withMajorCount(majorCount: string): ShowTaskDetailResponse {
        this['major_count'] = majorCount;
        return this;
    }
    public set majorCount(majorCount: string  | undefined) {
        this['major_count'] = majorCount;
    }
    public get majorCount(): string | undefined {
        return this['major_count'];
    }
    public withMinorCount(minorCount: string): ShowTaskDetailResponse {
        this['minor_count'] = minorCount;
        return this;
    }
    public set minorCount(minorCount: string  | undefined) {
        this['minor_count'] = minorCount;
    }
    public get minorCount(): string | undefined {
        return this['minor_count'];
    }
    public withSuggestionCount(suggestionCount: string): ShowTaskDetailResponse {
        this['suggestion_count'] = suggestionCount;
        return this;
    }
    public set suggestionCount(suggestionCount: string  | undefined) {
        this['suggestion_count'] = suggestionCount;
    }
    public get suggestionCount(): string | undefined {
        return this['suggestion_count'];
    }
    public withIsAccess(isAccess: string): ShowTaskDetailResponse {
        this['is_access'] = isAccess;
        return this;
    }
    public set isAccess(isAccess: string  | undefined) {
        this['is_access'] = isAccess;
    }
    public get isAccess(): string | undefined {
        return this['is_access'];
    }
    public withReviewResult(reviewResult: string): ShowTaskDetailResponse {
        this['review_result'] = reviewResult;
        return this;
    }
    public set reviewResult(reviewResult: string  | undefined) {
        this['review_result'] = reviewResult;
    }
    public get reviewResult(): string | undefined {
        return this['review_result'];
    }
    public withTriggerType(triggerType: string): ShowTaskDetailResponse {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withFileDuplicationRatio(fileDuplicationRatio: string): ShowTaskDetailResponse {
        this['file_duplication_ratio'] = fileDuplicationRatio;
        return this;
    }
    public set fileDuplicationRatio(fileDuplicationRatio: string  | undefined) {
        this['file_duplication_ratio'] = fileDuplicationRatio;
    }
    public get fileDuplicationRatio(): string | undefined {
        return this['file_duplication_ratio'];
    }
    public withNewCount(newCount: number): ShowTaskDetailResponse {
        this['new_count'] = newCount;
        return this;
    }
    public set newCount(newCount: number  | undefined) {
        this['new_count'] = newCount;
    }
    public get newCount(): number | undefined {
        return this['new_count'];
    }
    public withSolveCount(solveCount: number): ShowTaskDetailResponse {
        this['solve_count'] = solveCount;
        return this;
    }
    public set solveCount(solveCount: number  | undefined) {
        this['solve_count'] = solveCount;
    }
    public get solveCount(): number | undefined {
        return this['solve_count'];
    }
    public withDismissedCount(dismissedCount: number): ShowTaskDetailResponse {
        this['dismissed_count'] = dismissedCount;
        return this;
    }
    public set dismissedCount(dismissedCount: number  | undefined) {
        this['dismissed_count'] = dismissedCount;
    }
    public get dismissedCount(): number | undefined {
        return this['dismissed_count'];
    }
    public withDuplicatedFiles(duplicatedFiles: number): ShowTaskDetailResponse {
        this['duplicated_files'] = duplicatedFiles;
        return this;
    }
    public set duplicatedFiles(duplicatedFiles: number  | undefined) {
        this['duplicated_files'] = duplicatedFiles;
    }
    public get duplicatedFiles(): number | undefined {
        return this['duplicated_files'];
    }
    public withNewCriticalCount(newCriticalCount: string): ShowTaskDetailResponse {
        this['new_critical_count'] = newCriticalCount;
        return this;
    }
    public set newCriticalCount(newCriticalCount: string  | undefined) {
        this['new_critical_count'] = newCriticalCount;
    }
    public get newCriticalCount(): string | undefined {
        return this['new_critical_count'];
    }
    public withNewMajorCount(newMajorCount: string): ShowTaskDetailResponse {
        this['new_major_count'] = newMajorCount;
        return this;
    }
    public set newMajorCount(newMajorCount: string  | undefined) {
        this['new_major_count'] = newMajorCount;
    }
    public get newMajorCount(): string | undefined {
        return this['new_major_count'];
    }
    public withNewMinorCount(newMinorCount: string): ShowTaskDetailResponse {
        this['new_minor_count'] = newMinorCount;
        return this;
    }
    public set newMinorCount(newMinorCount: string  | undefined) {
        this['new_minor_count'] = newMinorCount;
    }
    public get newMinorCount(): string | undefined {
        return this['new_minor_count'];
    }
    public withNewSuggestionCount(newSuggestionCount: string): ShowTaskDetailResponse {
        this['new_suggestion_count'] = newSuggestionCount;
        return this;
    }
    public set newSuggestionCount(newSuggestionCount: string  | undefined) {
        this['new_suggestion_count'] = newSuggestionCount;
    }
    public get newSuggestionCount(): string | undefined {
        return this['new_suggestion_count'];
    }
}