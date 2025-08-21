import { RepositoryProtectedActionDto } from './RepositoryProtectedActionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProtectedBranchResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public actions?: Array<RepositoryProtectedActionDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowProtectedBranchResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowProtectedBranchResponse {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedActionDto>): ShowProtectedBranchResponse {
        this['actions'] = actions;
        return this;
    }
}