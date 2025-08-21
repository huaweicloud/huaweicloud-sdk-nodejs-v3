import { FilePushPermissionActionBodyDto } from './FilePushPermissionActionBodyDto';


export class CreateRepositoryFilePushPermissionDto {
    public path?: string;
    public actions?: Array<FilePushPermissionActionBodyDto>;
    public constructor(path?: string) { 
        this['path'] = path;
    }
    public withPath(path: string): CreateRepositoryFilePushPermissionDto {
        this['path'] = path;
        return this;
    }
    public withActions(actions: Array<FilePushPermissionActionBodyDto>): CreateRepositoryFilePushPermissionDto {
        this['actions'] = actions;
        return this;
    }
}