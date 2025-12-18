import { TableVolumeResult } from './TableVolumeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTableVolumesResponse extends SdkResponse {
    private 'table_volumes'?: Array<TableVolumeResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTableVolumes(tableVolumes: Array<TableVolumeResult>): ListTableVolumesResponse {
        this['table_volumes'] = tableVolumes;
        return this;
    }
    public set tableVolumes(tableVolumes: Array<TableVolumeResult>  | undefined) {
        this['table_volumes'] = tableVolumes;
    }
    public get tableVolumes(): Array<TableVolumeResult> | undefined {
        return this['table_volumes'];
    }
    public withTotalCount(totalCount: number): ListTableVolumesResponse {
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