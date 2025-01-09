import { OperationForList } from './OperationForList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopOperationsResponse extends SdkResponse {
    public operations?: Array<OperationForList>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withOperations(operations: Array<OperationForList>): ListDesktopOperationsResponse {
        this['operations'] = operations;
        return this;
    }
    public withTotalCount(totalCount: number): ListDesktopOperationsResponse {
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