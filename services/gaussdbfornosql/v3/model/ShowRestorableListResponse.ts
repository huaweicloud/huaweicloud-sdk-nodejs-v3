import { QueryRestoreList } from './QueryRestoreList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRestorableListResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'restorable_instances'?: Array<QueryRestoreList>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowRestorableListResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRestorableInstances(restorableInstances: Array<QueryRestoreList>): ShowRestorableListResponse {
        this['restorable_instances'] = restorableInstances;
        return this;
    }
    public set restorableInstances(restorableInstances: Array<QueryRestoreList>  | undefined) {
        this['restorable_instances'] = restorableInstances;
    }
    public get restorableInstances(): Array<QueryRestoreList> | undefined {
        return this['restorable_instances'];
    }
}