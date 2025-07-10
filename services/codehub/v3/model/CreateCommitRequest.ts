import { CreateCommitRequestBody } from './CreateCommitRequestBody';


export class CreateCommitRequest {
    private 'repo_id'?: number;
    public body?: CreateCommitRequestBody;
    public constructor(repoId?: number) { 
        this['repo_id'] = repoId;
    }
    public withRepoId(repoId: number): CreateCommitRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withBody(body: CreateCommitRequestBody): CreateCommitRequest {
        this['body'] = body;
        return this;
    }
}