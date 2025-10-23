import { UpdatePermissionBodyDto } from './UpdatePermissionBodyDto';


export class UpdateRepositoryResourcePermissionsRequest {
    private 'repository_id'?: number;
    private 'resource_name'?: string;
    public body?: UpdatePermissionBodyDto;
    public constructor(repositoryId?: number, resourceName?: string) { 
        this['repository_id'] = repositoryId;
        this['resource_name'] = resourceName;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryResourcePermissionsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withResourceName(resourceName: string): UpdateRepositoryResourcePermissionsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withBody(body: UpdatePermissionBodyDto): UpdateRepositoryResourcePermissionsRequest {
        this['body'] = body;
        return this;
    }
}