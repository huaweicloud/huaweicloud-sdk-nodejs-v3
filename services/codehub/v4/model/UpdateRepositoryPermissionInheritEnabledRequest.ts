import { PermissionInheritEnabledDto } from './PermissionInheritEnabledDto';


export class UpdateRepositoryPermissionInheritEnabledRequest {
    private 'repository_id'?: number;
    public body?: PermissionInheritEnabledDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryPermissionInheritEnabledRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: PermissionInheritEnabledDto): UpdateRepositoryPermissionInheritEnabledRequest {
        this['body'] = body;
        return this;
    }
}