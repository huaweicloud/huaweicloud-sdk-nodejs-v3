

export class ListTemplateGroupCollectionRequest {
    private 'X-Sdk-Date'?: string | undefined;
    private 'group_collection_id'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ListTemplateGroupCollectionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withGroupCollectionId(groupCollectionId: string): ListTemplateGroupCollectionRequest {
        this['group_collection_id'] = groupCollectionId;
        return this;
    }
    public set groupCollectionId(groupCollectionId: string | undefined) {
        this['group_collection_id'] = groupCollectionId;
    }
    public get groupCollectionId() {
        return this['group_collection_id'];
    }
    public withOffset(offset: number): ListTemplateGroupCollectionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTemplateGroupCollectionRequest {
        this['limit'] = limit;
        return this;
    }
}