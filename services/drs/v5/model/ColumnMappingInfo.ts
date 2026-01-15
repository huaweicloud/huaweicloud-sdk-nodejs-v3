import { ColumnInfo } from './ColumnInfo';


export class ColumnMappingInfo {
    private 'object_id'?: string;
    private 'column_info_lists'?: Array<ColumnInfo>;
    public constructor() { 
    }
    public withObjectId(objectId: string): ColumnMappingInfo {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withColumnInfoLists(columnInfoLists: Array<ColumnInfo>): ColumnMappingInfo {
        this['column_info_lists'] = columnInfoLists;
        return this;
    }
    public set columnInfoLists(columnInfoLists: Array<ColumnInfo>  | undefined) {
        this['column_info_lists'] = columnInfoLists;
    }
    public get columnInfoLists(): Array<ColumnInfo> | undefined {
        return this['column_info_lists'];
    }
}