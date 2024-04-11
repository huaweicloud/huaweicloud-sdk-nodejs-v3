

export class ExportParam {
    public ids?: Array<number>;
    public asyn?: boolean;
    public type?: string;
    private 'directory_id'?: number;
    private 'biz_catalog_id'?: number;
    private 'biz_catalog_id_list'?: Array<number>;
    private 'model_id'?: number;
    public constructor() { 
    }
    public withIds(ids: Array<number>): ExportParam {
        this['ids'] = ids;
        return this;
    }
    public withAsyn(asyn: boolean): ExportParam {
        this['asyn'] = asyn;
        return this;
    }
    public withType(type: string): ExportParam {
        this['type'] = type;
        return this;
    }
    public withDirectoryId(directoryId: number): ExportParam {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: number  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): number | undefined {
        return this['directory_id'];
    }
    public withBizCatalogId(bizCatalogId: number): ExportParam {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: number  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): number | undefined {
        return this['biz_catalog_id'];
    }
    public withBizCatalogIdList(bizCatalogIdList: Array<number>): ExportParam {
        this['biz_catalog_id_list'] = bizCatalogIdList;
        return this;
    }
    public set bizCatalogIdList(bizCatalogIdList: Array<number>  | undefined) {
        this['biz_catalog_id_list'] = bizCatalogIdList;
    }
    public get bizCatalogIdList(): Array<number> | undefined {
        return this['biz_catalog_id_list'];
    }
    public withModelId(modelId: number): ExportParam {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: number  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): number | undefined {
        return this['model_id'];
    }
}