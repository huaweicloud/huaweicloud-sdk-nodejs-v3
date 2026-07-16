

export class ListFlavorsRequest {
    public category?: ListFlavorsRequestCategoryEnum | string;
    public limit?: number;
    public offset?: number;
    public type?: ListFlavorsRequestTypeEnum | string;
    private 'sort_dir'?: ListFlavorsRequestSortDirEnum | string;
    private 'sort_key'?: string;
    private 'flavor_type'?: string;
    public feature?: string;
    public constructor() { 
    }
    public withCategory(category: ListFlavorsRequestCategoryEnum | string): ListFlavorsRequest {
        this['category'] = category;
        return this;
    }
    public withLimit(limit: number): ListFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFlavorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withType(type: ListFlavorsRequestTypeEnum | string): ListFlavorsRequest {
        this['type'] = type;
        return this;
    }
    public withSortDir(sortDir: ListFlavorsRequestSortDirEnum | string): ListFlavorsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListFlavorsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListFlavorsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListFlavorsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withFlavorType(flavorType: string): ListFlavorsRequest {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withFeature(feature: string): ListFlavorsRequest {
        this['feature'] = feature;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlavorsRequestCategoryEnum {
    ASCEND = 'ASCEND',
    CPU = 'CPU',
    GPU = 'GPU'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlavorsRequestTypeEnum {
    DEDICATED = 'DEDICATED',
    DEDICATED_ROMA = 'DEDICATED_ROMA',
    MANAGED = 'MANAGED',
    MANAGED_ROMA = 'MANAGED_ROMA'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFlavorsRequestSortDirEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
