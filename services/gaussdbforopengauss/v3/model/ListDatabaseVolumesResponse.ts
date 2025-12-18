import { DatabaseVolumeResult } from './DatabaseVolumeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseVolumesResponse extends SdkResponse {
    private 'database_volumes'?: Array<DatabaseVolumeResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabaseVolumes(databaseVolumes: Array<DatabaseVolumeResult>): ListDatabaseVolumesResponse {
        this['database_volumes'] = databaseVolumes;
        return this;
    }
    public set databaseVolumes(databaseVolumes: Array<DatabaseVolumeResult>  | undefined) {
        this['database_volumes'] = databaseVolumes;
    }
    public get databaseVolumes(): Array<DatabaseVolumeResult> | undefined {
        return this['database_volumes'];
    }
    public withTotalCount(totalCount: number): ListDatabaseVolumesResponse {
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