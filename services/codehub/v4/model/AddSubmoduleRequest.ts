import { SubmoduleReqDto } from './SubmoduleReqDto';


export class AddSubmoduleRequest {
    private 'repository_id'?: number;
    public body?: SubmoduleReqDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): AddSubmoduleRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: SubmoduleReqDto): AddSubmoduleRequest {
        this['body'] = body;
        return this;
    }
}