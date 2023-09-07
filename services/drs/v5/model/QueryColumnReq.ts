import { SelectDbTableObjectInfo } from './SelectDbTableObjectInfo';


export class QueryColumnReq {
    private 'is_force_refresh'?: boolean;
    private 'db_object_infos'?: Array<SelectDbTableObjectInfo>;
    public constructor(dbObjectInfos?: Array<SelectDbTableObjectInfo>) { 
        this['db_object_infos'] = dbObjectInfos;
    }
    public withIsForceRefresh(isForceRefresh: boolean): QueryColumnReq {
        this['is_force_refresh'] = isForceRefresh;
        return this;
    }
    public set isForceRefresh(isForceRefresh: boolean  | undefined) {
        this['is_force_refresh'] = isForceRefresh;
    }
    public get isForceRefresh(): boolean | undefined {
        return this['is_force_refresh'];
    }
    public withDbObjectInfos(dbObjectInfos: Array<SelectDbTableObjectInfo>): QueryColumnReq {
        this['db_object_infos'] = dbObjectInfos;
        return this;
    }
    public set dbObjectInfos(dbObjectInfos: Array<SelectDbTableObjectInfo>  | undefined) {
        this['db_object_infos'] = dbObjectInfos;
    }
    public get dbObjectInfos(): Array<SelectDbTableObjectInfo> | undefined {
        return this['db_object_infos'];
    }
}