import { RepositoryProtectedActionDto } from './RepositoryProtectedActionDto';


export class RepositoryFilePushPermissionDto {
    public id?: number;
    public path?: string;
    public actions?: Array<RepositoryProtectedActionDto>;
    public constructor() { 
    }
    public withId(id: number): RepositoryFilePushPermissionDto {
        this['id'] = id;
        return this;
    }
    public withPath(path: string): RepositoryFilePushPermissionDto {
        this['path'] = path;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedActionDto>): RepositoryFilePushPermissionDto {
        this['actions'] = actions;
        return this;
    }
}