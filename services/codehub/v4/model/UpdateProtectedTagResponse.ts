import { RepositoryProtectedActionDto } from './RepositoryProtectedActionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateProtectedTagResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public actions?: Array<RepositoryProtectedActionDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): UpdateProtectedTagResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateProtectedTagResponse {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedActionDto>): UpdateProtectedTagResponse {
        this['actions'] = actions;
        return this;
    }
}