import { CommitAction } from './CommitAction';


export class CreateCommitRequestBody {
    public branch?: string;
    private 'commit_message'?: string;
    private 'start_branch'?: string;
    public actions?: Array<CommitAction>;
    private 'author_email'?: string;
    private 'author_name'?: string;
    public stats?: boolean;
    public force?: boolean;
    public constructor(branch?: string, commitMessage?: string, actions?: Array<CommitAction>) { 
        this['branch'] = branch;
        this['commit_message'] = commitMessage;
        this['actions'] = actions;
    }
    public withBranch(branch: string): CreateCommitRequestBody {
        this['branch'] = branch;
        return this;
    }
    public withCommitMessage(commitMessage: string): CreateCommitRequestBody {
        this['commit_message'] = commitMessage;
        return this;
    }
    public set commitMessage(commitMessage: string  | undefined) {
        this['commit_message'] = commitMessage;
    }
    public get commitMessage(): string | undefined {
        return this['commit_message'];
    }
    public withStartBranch(startBranch: string): CreateCommitRequestBody {
        this['start_branch'] = startBranch;
        return this;
    }
    public set startBranch(startBranch: string  | undefined) {
        this['start_branch'] = startBranch;
    }
    public get startBranch(): string | undefined {
        return this['start_branch'];
    }
    public withActions(actions: Array<CommitAction>): CreateCommitRequestBody {
        this['actions'] = actions;
        return this;
    }
    public withAuthorEmail(authorEmail: string): CreateCommitRequestBody {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withAuthorName(authorName: string): CreateCommitRequestBody {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withStats(stats: boolean): CreateCommitRequestBody {
        this['stats'] = stats;
        return this;
    }
    public withForce(force: boolean): CreateCommitRequestBody {
        this['force'] = force;
        return this;
    }
}