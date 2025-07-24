

export class TestCaseCommentInfo {
    public comment?: string;
    public notifier?: Array<string>;
    private 'version_uri'?: string;
    public constructor(comment?: string) { 
        this['comment'] = comment;
    }
    public withComment(comment: string): TestCaseCommentInfo {
        this['comment'] = comment;
        return this;
    }
    public withNotifier(notifier: Array<string>): TestCaseCommentInfo {
        this['notifier'] = notifier;
        return this;
    }
    public withVersionUri(versionUri: string): TestCaseCommentInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
}