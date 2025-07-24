

export class TestCaseCommentVo {
    public uri?: string;
    public creator?: string;
    public comment?: string;
    public notifier?: Array<string>;
    private 'test_case_uri'?: string;
    private 'create_time'?: Date;
    private 'create_time_timestamp'?: number;
    private 'update_time'?: Date;
    private 'update_time_timestamp'?: number;
    private 'project_uuid'?: string;
    private 'version_uri'?: string;
    private 'display_name'?: string;
    public constructor() { 
    }
    public withUri(uri: string): TestCaseCommentVo {
        this['uri'] = uri;
        return this;
    }
    public withCreator(creator: string): TestCaseCommentVo {
        this['creator'] = creator;
        return this;
    }
    public withComment(comment: string): TestCaseCommentVo {
        this['comment'] = comment;
        return this;
    }
    public withNotifier(notifier: Array<string>): TestCaseCommentVo {
        this['notifier'] = notifier;
        return this;
    }
    public withTestCaseUri(testCaseUri: string): TestCaseCommentVo {
        this['test_case_uri'] = testCaseUri;
        return this;
    }
    public set testCaseUri(testCaseUri: string  | undefined) {
        this['test_case_uri'] = testCaseUri;
    }
    public get testCaseUri(): string | undefined {
        return this['test_case_uri'];
    }
    public withCreateTime(createTime: Date): TestCaseCommentVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateTimeTimestamp(createTimeTimestamp: number): TestCaseCommentVo {
        this['create_time_timestamp'] = createTimeTimestamp;
        return this;
    }
    public set createTimeTimestamp(createTimeTimestamp: number  | undefined) {
        this['create_time_timestamp'] = createTimeTimestamp;
    }
    public get createTimeTimestamp(): number | undefined {
        return this['create_time_timestamp'];
    }
    public withUpdateTime(updateTime: Date): TestCaseCommentVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateTimeTimestamp(updateTimeTimestamp: number): TestCaseCommentVo {
        this['update_time_timestamp'] = updateTimeTimestamp;
        return this;
    }
    public set updateTimeTimestamp(updateTimeTimestamp: number  | undefined) {
        this['update_time_timestamp'] = updateTimeTimestamp;
    }
    public get updateTimeTimestamp(): number | undefined {
        return this['update_time_timestamp'];
    }
    public withProjectUuid(projectUuid: string): TestCaseCommentVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withVersionUri(versionUri: string): TestCaseCommentVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withDisplayName(displayName: string): TestCaseCommentVo {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}