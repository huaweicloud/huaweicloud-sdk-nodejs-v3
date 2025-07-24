import { NameAndIdVo } from './NameAndIdVo';


export class TestCaseReviewVo {
    public uri?: string;
    private 'testcase_name'?: string;
    private 'testcase_number'?: string;
    private 'testcase_stage'?: string;
    private 'testcase_last_modified'?: string;
    private 'testcase_last_modified_timestamp'?: number;
    private 'testcase_uri'?: string;
    private 'version_uri'?: string;
    private 'version_name'?: string;
    public comment?: string;
    private 'close_comment'?: string;
    public reviewer?: string;
    private 'creation_date'?: string;
    private 'creation_date_timestamp'?: number;
    private 'close_user_ids'?: Array<NameAndIdVo>;
    private 'actual_close_person'?: string;
    public status?: string;
    private 'close_date'?: string;
    private 'close_date_timestamp'?: number;
    private 'expect_close_date'?: string;
    private 'expect_close_date_timestamp'?: number;
    public constructor() { 
    }
    public withUri(uri: string): TestCaseReviewVo {
        this['uri'] = uri;
        return this;
    }
    public withTestcaseName(testcaseName: string): TestCaseReviewVo {
        this['testcase_name'] = testcaseName;
        return this;
    }
    public set testcaseName(testcaseName: string  | undefined) {
        this['testcase_name'] = testcaseName;
    }
    public get testcaseName(): string | undefined {
        return this['testcase_name'];
    }
    public withTestcaseNumber(testcaseNumber: string): TestCaseReviewVo {
        this['testcase_number'] = testcaseNumber;
        return this;
    }
    public set testcaseNumber(testcaseNumber: string  | undefined) {
        this['testcase_number'] = testcaseNumber;
    }
    public get testcaseNumber(): string | undefined {
        return this['testcase_number'];
    }
    public withTestcaseStage(testcaseStage: string): TestCaseReviewVo {
        this['testcase_stage'] = testcaseStage;
        return this;
    }
    public set testcaseStage(testcaseStage: string  | undefined) {
        this['testcase_stage'] = testcaseStage;
    }
    public get testcaseStage(): string | undefined {
        return this['testcase_stage'];
    }
    public withTestcaseLastModified(testcaseLastModified: string): TestCaseReviewVo {
        this['testcase_last_modified'] = testcaseLastModified;
        return this;
    }
    public set testcaseLastModified(testcaseLastModified: string  | undefined) {
        this['testcase_last_modified'] = testcaseLastModified;
    }
    public get testcaseLastModified(): string | undefined {
        return this['testcase_last_modified'];
    }
    public withTestcaseLastModifiedTimestamp(testcaseLastModifiedTimestamp: number): TestCaseReviewVo {
        this['testcase_last_modified_timestamp'] = testcaseLastModifiedTimestamp;
        return this;
    }
    public set testcaseLastModifiedTimestamp(testcaseLastModifiedTimestamp: number  | undefined) {
        this['testcase_last_modified_timestamp'] = testcaseLastModifiedTimestamp;
    }
    public get testcaseLastModifiedTimestamp(): number | undefined {
        return this['testcase_last_modified_timestamp'];
    }
    public withTestcaseUri(testcaseUri: string): TestCaseReviewVo {
        this['testcase_uri'] = testcaseUri;
        return this;
    }
    public set testcaseUri(testcaseUri: string  | undefined) {
        this['testcase_uri'] = testcaseUri;
    }
    public get testcaseUri(): string | undefined {
        return this['testcase_uri'];
    }
    public withVersionUri(versionUri: string): TestCaseReviewVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withVersionName(versionName: string): TestCaseReviewVo {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withComment(comment: string): TestCaseReviewVo {
        this['comment'] = comment;
        return this;
    }
    public withCloseComment(closeComment: string): TestCaseReviewVo {
        this['close_comment'] = closeComment;
        return this;
    }
    public set closeComment(closeComment: string  | undefined) {
        this['close_comment'] = closeComment;
    }
    public get closeComment(): string | undefined {
        return this['close_comment'];
    }
    public withReviewer(reviewer: string): TestCaseReviewVo {
        this['reviewer'] = reviewer;
        return this;
    }
    public withCreationDate(creationDate: string): TestCaseReviewVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): string | undefined {
        return this['creation_date'];
    }
    public withCreationDateTimestamp(creationDateTimestamp: number): TestCaseReviewVo {
        this['creation_date_timestamp'] = creationDateTimestamp;
        return this;
    }
    public set creationDateTimestamp(creationDateTimestamp: number  | undefined) {
        this['creation_date_timestamp'] = creationDateTimestamp;
    }
    public get creationDateTimestamp(): number | undefined {
        return this['creation_date_timestamp'];
    }
    public withCloseUserIds(closeUserIds: Array<NameAndIdVo>): TestCaseReviewVo {
        this['close_user_ids'] = closeUserIds;
        return this;
    }
    public set closeUserIds(closeUserIds: Array<NameAndIdVo>  | undefined) {
        this['close_user_ids'] = closeUserIds;
    }
    public get closeUserIds(): Array<NameAndIdVo> | undefined {
        return this['close_user_ids'];
    }
    public withActualClosePerson(actualClosePerson: string): TestCaseReviewVo {
        this['actual_close_person'] = actualClosePerson;
        return this;
    }
    public set actualClosePerson(actualClosePerson: string  | undefined) {
        this['actual_close_person'] = actualClosePerson;
    }
    public get actualClosePerson(): string | undefined {
        return this['actual_close_person'];
    }
    public withStatus(status: string): TestCaseReviewVo {
        this['status'] = status;
        return this;
    }
    public withCloseDate(closeDate: string): TestCaseReviewVo {
        this['close_date'] = closeDate;
        return this;
    }
    public set closeDate(closeDate: string  | undefined) {
        this['close_date'] = closeDate;
    }
    public get closeDate(): string | undefined {
        return this['close_date'];
    }
    public withCloseDateTimestamp(closeDateTimestamp: number): TestCaseReviewVo {
        this['close_date_timestamp'] = closeDateTimestamp;
        return this;
    }
    public set closeDateTimestamp(closeDateTimestamp: number  | undefined) {
        this['close_date_timestamp'] = closeDateTimestamp;
    }
    public get closeDateTimestamp(): number | undefined {
        return this['close_date_timestamp'];
    }
    public withExpectCloseDate(expectCloseDate: string): TestCaseReviewVo {
        this['expect_close_date'] = expectCloseDate;
        return this;
    }
    public set expectCloseDate(expectCloseDate: string  | undefined) {
        this['expect_close_date'] = expectCloseDate;
    }
    public get expectCloseDate(): string | undefined {
        return this['expect_close_date'];
    }
    public withExpectCloseDateTimestamp(expectCloseDateTimestamp: number): TestCaseReviewVo {
        this['expect_close_date_timestamp'] = expectCloseDateTimestamp;
        return this;
    }
    public set expectCloseDateTimestamp(expectCloseDateTimestamp: number  | undefined) {
        this['expect_close_date_timestamp'] = expectCloseDateTimestamp;
    }
    public get expectCloseDateTimestamp(): number | undefined {
        return this['expect_close_date_timestamp'];
    }
}