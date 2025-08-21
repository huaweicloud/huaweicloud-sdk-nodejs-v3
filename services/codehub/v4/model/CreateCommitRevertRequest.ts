import { CommitRevetOrCherryPickDto } from './CommitRevetOrCherryPickDto';


export class CreateCommitRevertRequest {
    private 'repository_id'?: number;
    public sha?: string;
    public body?: CommitRevetOrCherryPickDto;
    public constructor(repositoryId?: number, sha?: string) { 
        this['repository_id'] = repositoryId;
        this['sha'] = sha;
    }
    public withRepositoryId(repositoryId: number): CreateCommitRevertRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSha(sha: string): CreateCommitRevertRequest {
        this['sha'] = sha;
        return this;
    }
    public withBody(body: CommitRevetOrCherryPickDto): CreateCommitRevertRequest {
        this['body'] = body;
        return this;
    }
}