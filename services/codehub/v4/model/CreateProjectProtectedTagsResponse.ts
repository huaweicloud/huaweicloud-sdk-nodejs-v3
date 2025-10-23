import { ProjectProtectedTagActionDto } from './ProjectProtectedTagActionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectProtectedTagsResponse extends SdkResponse {
    public name?: string;
    public actions?: Array<ProjectProtectedTagActionDto>;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateProjectProtectedTagsResponse {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<ProjectProtectedTagActionDto>): CreateProjectProtectedTagsResponse {
        this['actions'] = actions;
        return this;
    }
}