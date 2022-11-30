
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOverviewResponse extends SdkResponse {
    public waiting?: number;
    public replicating?: number;
    public syncing?: number;
    public other?: number;
    public constructor() { 
        super();
    }
    public withWaiting(waiting: number): ShowOverviewResponse {
        this['waiting'] = waiting;
        return this;
    }
    public withReplicating(replicating: number): ShowOverviewResponse {
        this['replicating'] = replicating;
        return this;
    }
    public withSyncing(syncing: number): ShowOverviewResponse {
        this['syncing'] = syncing;
        return this;
    }
    public withOther(other: number): ShowOverviewResponse {
        this['other'] = other;
        return this;
    }
}