import { TaskApplyObjectDetailInfo } from './TaskApplyObjectDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskApplyObjectsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'apply_objects'?: Array<TaskApplyObjectDetailInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListTaskApplyObjectsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withApplyObjects(applyObjects: Array<TaskApplyObjectDetailInfo>): ListTaskApplyObjectsResponse {
        this['apply_objects'] = applyObjects;
        return this;
    }
    public set applyObjects(applyObjects: Array<TaskApplyObjectDetailInfo>  | undefined) {
        this['apply_objects'] = applyObjects;
    }
    public get applyObjects(): Array<TaskApplyObjectDetailInfo> | undefined {
        return this['apply_objects'];
    }
}