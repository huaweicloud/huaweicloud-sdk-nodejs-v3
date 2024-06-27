import { ChDatabaseReplicationInfo } from './ChDatabaseReplicationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClickHouseDataBaseReplicationResponse extends SdkResponse {
    private 'total_count'?: number;
    public replications?: Array<ChDatabaseReplicationInfo>;
    private 'ext_text'?: string;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListClickHouseDataBaseReplicationResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withReplications(replications: Array<ChDatabaseReplicationInfo>): ListClickHouseDataBaseReplicationResponse {
        this['replications'] = replications;
        return this;
    }
    public withExtText(extText: string): ListClickHouseDataBaseReplicationResponse {
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