import { BatchUpdateFilePushPermissionBodyDto } from './BatchUpdateFilePushPermissionBodyDto';


export class BatchUpdateRepositoryFilePushPermissionsRequest {
    private 'repository_id'?: number;
    public body?: BatchUpdateFilePushPermissionBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): BatchUpdateRepositoryFilePushPermissionsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: BatchUpdateFilePushPermissionBodyDto): BatchUpdateRepositoryFilePushPermissionsRequest {
        this['body'] = body;
        return this;
    }
}