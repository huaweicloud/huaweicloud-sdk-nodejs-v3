import { RepositoryProtectedActionDto } from './RepositoryProtectedActionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFilePushPermissionResponse extends SdkResponse {
    public id?: number;
    public path?: string;
    public actions?: Array<RepositoryProtectedActionDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateFilePushPermissionResponse {
        this['id'] = id;
        return this;
    }
    public withPath(path: string): CreateFilePushPermissionResponse {
        this['path'] = path;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedActionDto>): CreateFilePushPermissionResponse {
        this['actions'] = actions;
        return this;
    }
}