
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMissingIndexDetailsResponse extends SdkResponse {
    private 'detail_list'?: Array<object>;
    public total?: number;
    private 'collect_time'?: number;
    public constructor() { 
        super();
    }
    public withDetailList(detailList: Array<object>): ListMissingIndexDetailsResponse {
        this['detail_list'] = detailList;
        return this;
    }
    public set detailList(detailList: Array<object>  | undefined) {
        this['detail_list'] = detailList;
    }
    public get detailList(): Array<object> | undefined {
        return this['detail_list'];
    }
    public withTotal(total: number): ListMissingIndexDetailsResponse {
        this['total'] = total;
        return this;
    }
    public withCollectTime(collectTime: number): ListMissingIndexDetailsResponse {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
}