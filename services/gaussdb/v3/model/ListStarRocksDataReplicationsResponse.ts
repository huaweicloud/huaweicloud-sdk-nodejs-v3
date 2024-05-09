import { StarRocksReplicationInfo } from './StarRocksReplicationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStarRocksDataReplicationsResponse extends SdkResponse {
    private 'total_count'?: string;
    public replications?: Array<StarRocksReplicationInfo>;
    private 'ext_text'?: string;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: string): ListStarRocksDataReplicationsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: string  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): string | undefined {
        return this['total_count'];
    }
    public withReplications(replications: Array<StarRocksReplicationInfo>): ListStarRocksDataReplicationsResponse {
        this['replications'] = replications;
        return this;
    }
    public withExtText(extText: string): ListStarRocksDataReplicationsResponse {
        this['ext_text'] = extText;
        return this;
    }
    public set extText(extText: string  | undefined) {
        this['ext_text'] = extText;
    }
    public get extText(): string | undefined {
        return this['ext_text'];
    }
}