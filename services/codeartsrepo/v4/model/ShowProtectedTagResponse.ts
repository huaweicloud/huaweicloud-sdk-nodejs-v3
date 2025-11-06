import { RepositoryProtectedActionDto } from './RepositoryProtectedActionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProtectedTagResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public actions?: Array<RepositoryProtectedActionDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowProtectedTagResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowProtectedTagResponse {
        this['name'] = name;
        return this;
    }
    public withActions(actions: Array<RepositoryProtectedActionDto>): ShowProtectedTagResponse {
        this['actions'] = actions;
        return this;
    }
}