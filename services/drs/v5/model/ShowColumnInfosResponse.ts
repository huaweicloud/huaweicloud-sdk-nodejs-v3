import { ColumnMappingInfo } from './ColumnMappingInfo';
import { ObjectWithColumnInfo } from './ObjectWithColumnInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowColumnInfosResponse extends SdkResponse {
    private 'column_map_infos'?: Array<ColumnMappingInfo>;
    private 'object_with_column_infos'?: Array<ObjectWithColumnInfo>;
    public constructor() { 
        super();
    }
    public withColumnMapInfos(columnMapInfos: Array<ColumnMappingInfo>): ShowColumnInfosResponse {
        this['column_map_infos'] = columnMapInfos;
        return this;
    }
    public set columnMapInfos(columnMapInfos: Array<ColumnMappingInfo>  | undefined) {
        this['column_map_infos'] = columnMapInfos;
    }
    public get columnMapInfos(): Array<ColumnMappingInfo> | undefined {
        return this['column_map_infos'];
    }
    public withObjectWithColumnInfos(objectWithColumnInfos: Array<ObjectWithColumnInfo>): ShowColumnInfosResponse {
        this['object_with_column_infos'] = objectWithColumnInfos;
        return this;
    }
    public set objectWithColumnInfos(objectWithColumnInfos: Array<ObjectWithColumnInfo>  | undefined) {
        this['object_with_column_infos'] = objectWithColumnInfos;
    }
    public get objectWithColumnInfos(): Array<ObjectWithColumnInfo> | undefined {
        return this['object_with_column_infos'];
    }
}