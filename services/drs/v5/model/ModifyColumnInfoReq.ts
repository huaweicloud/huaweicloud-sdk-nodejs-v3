import { ColumnMappingInfo } from './ColumnMappingInfo';


export class ModifyColumnInfoReq {
    private 'column_map_infos'?: Array<ColumnMappingInfo>;
    public constructor(columnMapInfos?: Array<ColumnMappingInfo>) { 
        this['column_map_infos'] = columnMapInfos;
    }
    public withColumnMapInfos(columnMapInfos: Array<ColumnMappingInfo>): ModifyColumnInfoReq {
        this['column_map_infos'] = columnMapInfos;
        return this;
    }
    public set columnMapInfos(columnMapInfos: Array<ColumnMappingInfo>  | undefined) {
        this['column_map_infos'] = columnMapInfos;
    }
    public get columnMapInfos(): Array<ColumnMappingInfo> | undefined {
        return this['column_map_infos'];
    }
}