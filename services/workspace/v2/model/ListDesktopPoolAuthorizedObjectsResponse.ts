import { AuthorizedObjects } from './AuthorizedObjects';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopPoolAuthorizedObjectsResponse extends SdkResponse {
    public objects?: Array<AuthorizedObjects>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withObjects(objects: Array<AuthorizedObjects>): ListDesktopPoolAuthorizedObjectsResponse {
        this['objects'] = objects;
        return this;
    }
    public withTotalCount(totalCount: number): ListDesktopPoolAuthorizedObjectsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}