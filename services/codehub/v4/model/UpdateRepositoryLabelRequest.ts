import { BodyPutLabelDto } from './BodyPutLabelDto';


export class UpdateRepositoryLabelRequest {
    private 'repository_id'?: number;
    public body?: BodyPutLabelDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryLabelRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: BodyPutLabelDto): UpdateRepositoryLabelRequest {
        this['body'] = body;
        return this;
    }
}