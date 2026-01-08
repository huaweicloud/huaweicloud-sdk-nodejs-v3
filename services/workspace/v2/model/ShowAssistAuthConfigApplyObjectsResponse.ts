import { ApplyObjects } from './ApplyObjects';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssistAuthConfigApplyObjectsResponse extends SdkResponse {
    public objects?: Array<ApplyObjects>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withObjects(objects: Array<ApplyObjects>): ShowAssistAuthConfigApplyObjectsResponse {
        this['objects'] = objects;
        return this;
    }
    public withTotalCount(totalCount: number): ShowAssistAuthConfigApplyObjectsResponse {
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