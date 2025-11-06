import { ProjectProtectedActionResultApiDto } from './ProjectProtectedActionResultApiDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectProtectedBranchesResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public actions?: Array<ProjectProtectedActionResultApiDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateProjectProtectedBranchesResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateProjectProtectedBranchesResponse {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<ProjectProtectedActionResultApiDto>): CreateProjectProtectedBranchesResponse {
        this['actions'] = actions;
        return this;
    }
}