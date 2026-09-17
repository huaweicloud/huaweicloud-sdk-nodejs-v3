import { BatchUpdateResponseResultProject } from './BatchUpdateResponseResultProject';


export class BatchUpdateResponseResult {
    public project?: BatchUpdateResponseResultProject;
    private 'journal_ids'?: Array<string>;
    private 'error_issues'?: Array<number>;
    private 'versions_issues'?: Array<string>;
    private 'success_issues'?: Array<string>;
    public constructor() { 
    }
    public withProject(project: BatchUpdateResponseResultProject): BatchUpdateResponseResult {
        this['project'] = project;
        return this;
    }
    public withJournalIds(journalIds: Array<string>): BatchUpdateResponseResult {
        this['journal_ids'] = journalIds;
        return this;
    }
    public set journalIds(journalIds: Array<string>  | undefined) {
        this['journal_ids'] = journalIds;
    }
    public get journalIds(): Array<string> | undefined {
        return this['journal_ids'];
    }
    public withErrorIssues(errorIssues: Array<number>): BatchUpdateResponseResult {
        this['error_issues'] = errorIssues;
        return this;
    }
    public set errorIssues(errorIssues: Array<number>  | undefined) {
        this['error_issues'] = errorIssues;
    }
    public get errorIssues(): Array<number> | undefined {
        return this['error_issues'];
    }
    public withVersionsIssues(versionsIssues: Array<string>): BatchUpdateResponseResult {
        this['versions_issues'] = versionsIssues;
        return this;
    }
    public set versionsIssues(versionsIssues: Array<string>  | undefined) {
        this['versions_issues'] = versionsIssues;
    }
    public get versionsIssues(): Array<string> | undefined {
        return this['versions_issues'];
    }
    public withSuccessIssues(successIssues: Array<string>): BatchUpdateResponseResult {
        this['success_issues'] = successIssues;
        return this;
    }
    public set successIssues(successIssues: Array<string>  | undefined) {
        this['success_issues'] = successIssues;
    }
    public get successIssues(): Array<string> | undefined {
        return this['success_issues'];
    }
}