import { FilePushPermissionActionBodyDto } from './FilePushPermissionActionBodyDto';


export class FilePushPermissionUpdateDto {
    public id?: number;
    public path?: string;
    public actions?: Array<FilePushPermissionActionBodyDto>;
    public constructor() { 
    }
    public withId(id: number): FilePushPermissionUpdateDto {
        this['id'] = id;
        return this;
    }
    public withPath(path: string): FilePushPermissionUpdateDto {
        this['path'] = path;
        return this;
    }
    public withActions(actions: Array<FilePushPermissionActionBodyDto>): FilePushPermissionUpdateDto {
        this['actions'] = actions;
        return this;
    }
}