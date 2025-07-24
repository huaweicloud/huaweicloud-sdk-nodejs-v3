import { ResourceChangeExternalVo } from './ResourceChangeExternalVo';


export class ExternalTestCaseHistoryVo {
    public author?: string;
    public region?: string;
    public changes?: Array<ResourceChangeExternalVo>;
    public id?: string;
    private 'testcase_id'?: string;
    private 'creation_date'?: Date;
    private 'create_date_timestamp'?: number;
    private 'author_name'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withAuthor(author: string): ExternalTestCaseHistoryVo {
        this['author'] = author;
        return this;
    }
    public withRegion(region: string): ExternalTestCaseHistoryVo {
        this['region'] = region;
        return this;
    }
    public withChanges(changes: Array<ResourceChangeExternalVo>): ExternalTestCaseHistoryVo {
        this['changes'] = changes;
        return this;
    }
    public withId(id: string): ExternalTestCaseHistoryVo {
        this['id'] = id;
        return this;
    }
    public withTestcaseId(testcaseId: string): ExternalTestCaseHistoryVo {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withCreationDate(creationDate: Date): ExternalTestCaseHistoryVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: Date  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): Date | undefined {
        return this['creation_date'];
    }
    public withCreateDateTimestamp(createDateTimestamp: number): ExternalTestCaseHistoryVo {
        this['create_date_timestamp'] = createDateTimestamp;
        return this;
    }
    public set createDateTimestamp(createDateTimestamp: number  | undefined) {
        this['create_date_timestamp'] = createDateTimestamp;
    }
    public get createDateTimestamp(): number | undefined {
        return this['create_date_timestamp'];
    }
    public withAuthorName(authorName: string): ExternalTestCaseHistoryVo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withProjectId(projectId: string): ExternalTestCaseHistoryVo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}