import { ListAiOpsRequestBodyAiopsList } from './ListAiOpsRequestBodyAiopsList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiOpsResponse extends SdkResponse {
    private 'total_size'?: number;
    private 'aiops_list'?: Array<ListAiOpsRequestBodyAiopsList>;
    public constructor() { 
        super();
    }
    public withTotalSize(totalSize: number): ListAiOpsResponse {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
    public withAiopsList(aiopsList: Array<ListAiOpsRequestBodyAiopsList>): ListAiOpsResponse {
        this['aiops_list'] = aiopsList;
        return this;
    }
    public set aiopsList(aiopsList: Array<ListAiOpsRequestBodyAiopsList>  | undefined) {
        this['aiops_list'] = aiopsList;
    }
    public get aiopsList(): Array<ListAiOpsRequestBodyAiopsList> | undefined {
        return this['aiops_list'];
    }
}