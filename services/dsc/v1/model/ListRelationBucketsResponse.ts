import { RelationSimpleInfo } from './RelationSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelationBucketsResponse extends SdkResponse {
    public total?: number;
    private 'bucket_list'?: Array<RelationSimpleInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRelationBucketsResponse {
        this['total'] = total;
        return this;
    }
    public withBucketList(bucketList: Array<RelationSimpleInfo>): ListRelationBucketsResponse {
        this['bucket_list'] = bucketList;
        return this;
    }
    public set bucketList(bucketList: Array<RelationSimpleInfo>  | undefined) {
        this['bucket_list'] = bucketList;
    }
    public get bucketList(): Array<RelationSimpleInfo> | undefined {
        return this['bucket_list'];
    }
}