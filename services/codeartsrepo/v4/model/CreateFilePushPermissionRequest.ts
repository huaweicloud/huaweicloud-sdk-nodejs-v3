import { CreateRepositoryFilePushPermissionDto } from './CreateRepositoryFilePushPermissionDto';


export class CreateFilePushPermissionRequest {
    private 'repository_id'?: number;
    public body?: CreateRepositoryFilePushPermissionDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateFilePushPermissionRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: CreateRepositoryFilePushPermissionDto): CreateFilePushPermissionRequest {
        this['body'] = body;
        return this;
    }
}