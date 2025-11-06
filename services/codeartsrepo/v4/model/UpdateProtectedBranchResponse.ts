import { RepositoryProtectedActionDto } from './RepositoryProtectedActionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateProtectedBranchResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public actions?: Array<RepositoryProtectedActionDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): UpdateProtectedBranchResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateProtectedBranchResponse {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedActionDto>): UpdateProtectedBranchResponse {
        this['actions'] = actions;
        return this;
    }
}