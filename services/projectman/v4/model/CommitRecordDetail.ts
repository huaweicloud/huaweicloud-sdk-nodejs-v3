import { SimpleUser } from './SimpleUser';


export class CommitRecordDetail {
    private 'repository_id'?: string;
    private 'branch_name'?: string;
    private 'commit_id'?: string;
    private 'commit_short_id'?: string;
    private 'commit_msg'?: string;
    private 'commit_url'?: string;
    public user?: SimpleUser;
    public type?: string;
    private 'create_date'?: string;
    private 'update_date'?: string;
    public constructor() { 
    }
    public withRepositoryId(repositoryId: string): CommitRecordDetail {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
    public withBranchName(branchName: string): CommitRecordDetail {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withCommitId(commitId: string): CommitRecordDetail {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withCommitShortId(commitShortId: string): CommitRecordDetail {
        this['commit_short_id'] = commitShortId;
        return this;
    }
    public set commitShortId(commitShortId: string  | undefined) {
        this['commit_short_id'] = commitShortId;
    }
    public get commitShortId(): string | undefined {
        return this['commit_short_id'];
    }
    public withCommitMsg(commitMsg: string): CommitRecordDetail {
        this['commit_msg'] = commitMsg;
        return this;
    }
    public set commitMsg(commitMsg: string  | undefined) {
        this['commit_msg'] = commitMsg;
    }
    public get commitMsg(): string | undefined {
        return this['commit_msg'];
    }
    public withCommitUrl(commitUrl: string): CommitRecordDetail {
        this['commit_url'] = commitUrl;
        return this;
    }
    public set commitUrl(commitUrl: string  | undefined) {
        this['commit_url'] = commitUrl;
    }
    public get commitUrl(): string | undefined {
        return this['commit_url'];
    }
    public withUser(user: SimpleUser): CommitRecordDetail {
        this['user'] = user;
        return this;
    }
    public withType(type: string): CommitRecordDetail {
        this['type'] = type;
        return this;
    }
    public withCreateDate(createDate: string): CommitRecordDetail {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: string  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): string | undefined {
        return this['create_date'];
    }
    public withUpdateDate(updateDate: string): CommitRecordDetail {
        this['update_date'] = updateDate;
        return this;
    }
    public set updateDate(updateDate: string  | undefined) {
        this['update_date'] = updateDate;
    }
    public get updateDate(): string | undefined {
        return this['update_date'];
    }
}