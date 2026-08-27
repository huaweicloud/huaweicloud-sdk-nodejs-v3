import { ApplyObjectDetailInfo } from './ApplyObjectDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplyObjectsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'apply_objects'?: Array<ApplyObjectDetailInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListApplyObjectsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withApplyObjects(applyObjects: Array<ApplyObjectDetailInfo>): ListApplyObjectsResponse {
        this['apply_objects'] = applyObjects;
        return this;
    }
    public set applyObjects(applyObjects: Array<ApplyObjectDetailInfo>  | undefined) {
        this['apply_objects'] = applyObjects;
    }
    public get applyObjects(): Array<ApplyObjectDetailInfo> | undefined {
        return this['apply_objects'];
    }
}