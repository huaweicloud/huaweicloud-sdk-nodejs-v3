

export class ExportParam {
    public ids?: Array<string>;
    public asyn?: boolean;
    public type?: string;
    private 'directory_id'?: string;
    private 'biz_catalog_id'?: string;
    private 'biz_catalog_id_list'?: Array<string>;
    private 'model_id'?: string;
    public constructor() { 
    }
    public withIds(ids: Array<string>): ExportParam {
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
    public withDirectoryId(directoryId: string): ExportParam {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: string  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): string | undefined {
        return this['directory_id'];
    }
    public withBizCatalogId(bizCatalogId: string): ExportParam {
        this['biz_catalog_id'] = bizCatalogId;
        return this;
    }
    public set bizCatalogId(bizCatalogId: string  | undefined) {
        this['biz_catalog_id'] = bizCatalogId;
    }
    public get bizCatalogId(): string | undefined {
        return this['biz_catalog_id'];
    }
    public withBizCatalogIdList(bizCatalogIdList: Array<string>): ExportParam {
        this['biz_catalog_id_list'] = bizCatalogIdList;
        return this;
    }
    public set bizCatalogIdList(bizCatalogIdList: Array<string>  | undefined) {
        this['biz_catalog_id_list'] = bizCatalogIdList;
    }
    public get bizCatalogIdList(): Array<string> | undefined {
        return this['biz_catalog_id_list'];
    }
    public withModelId(modelId: string): ExportParam {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}