import { CommitParams } from './CommitParams';


export class CreateCommitRequest {
    private 'repository_id'?: number;
    public body?: CommitParams;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateCommitRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: CommitParams): CreateCommitRequest {
        this['body'] = body;
        return this;
    }
}