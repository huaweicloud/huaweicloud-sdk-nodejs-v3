

export class ItemCommitDto {
    public id?: number;
    public title?: string;
    public result?: number;
    public type?: string;
    public message?: string;
    private 'item_id'?: string;
    private 'repository_id'?: string;
    private 'branch_name'?: string;
    private 'user_name'?: string;
    private 'commit_id'?: string;
    private 'commit_short_id'?: string;
    private 'commit_msg'?: string;
    private 'commit_url'?: string;
    private 'iam_id'?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    private 'item_url'?: string;
    public constructor() { 
    }
    public withId(id: number): ItemCommitDto {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): ItemCommitDto {
        this['title'] = title;
        return this;
    }
    public withResult(result: number): ItemCommitDto {
        this['result'] = result;
        return this;
    }
    public withType(type: string): ItemCommitDto {
        this['type'] = type;
        return this;
    }
    public withMessage(message: string): ItemCommitDto {
        this['message'] = message;
        return this;
    }
    public withItemId(itemId: string): ItemCommitDto {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
    public withRepositoryId(repositoryId: string): ItemCommitDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
    public withBranchName(branchName: string): ItemCommitDto {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withUserName(userName: string): ItemCommitDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCommitId(commitId: string): ItemCommitDto {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withCommitShortId(commitShortId: string): ItemCommitDto {
        this['commit_short_id'] = commitShortId;
        return this;
    }
    public set commitShortId(commitShortId: string  | undefined) {
        this['commit_short_id'] = commitShortId;
    }
    public get commitShortId(): string | undefined {
        return this['commit_short_id'];
    }
    public withCommitMsg(commitMsg: string): ItemCommitDto {
        this['commit_msg'] = commitMsg;
        return this;
    }
    public set commitMsg(commitMsg: string  | undefined) {
        this['commit_msg'] = commitMsg;
    }
    public get commitMsg(): string | undefined {
        return this['commit_msg'];
    }
    public withCommitUrl(commitUrl: string): ItemCommitDto {
        this['commit_url'] = commitUrl;
        return this;
    }
    public set commitUrl(commitUrl: string  | undefined) {
        this['commit_url'] = commitUrl;
    }
    public get commitUrl(): string | undefined {
        return this['commit_url'];
    }
    public withIamId(iamId: string): ItemCommitDto {
        this['iam_id'] = iamId;
        return this;
    }
    public set iamId(iamId: string  | undefined) {
        this['iam_id'] = iamId;
    }
    public get iamId(): string | undefined {
        return this['iam_id'];
    }
    public withCreateAt(createAt: string): ItemCommitDto {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): ItemCommitDto {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withItemUrl(itemUrl: string): ItemCommitDto {
        this['item_url'] = itemUrl;
        return this;
    }
    public set itemUrl(itemUrl: string  | undefined) {
        this['item_url'] = itemUrl;
    }
    public get itemUrl(): string | undefined {
        return this['item_url'];
    }
}