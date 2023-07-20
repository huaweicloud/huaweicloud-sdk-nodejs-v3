

export class DeleteTemplateGroupCollectionRequest {
    private 'X-Sdk-Date'?: string;
    private 'group_collection_id'?: string;
    public constructor(groupCollectionId?: string) { 
        this['group_collection_id'] = groupCollectionId;
    }
    public withXSdkDate(xSdkDate: string): DeleteTemplateGroupCollectionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withGroupCollectionId(groupCollectionId: string): DeleteTemplateGroupCollectionRequest {
        this['group_collection_id'] = groupCollectionId;
        return this;
    }
    public set groupCollectionId(groupCollectionId: string  | undefined) {
        this['group_collection_id'] = groupCollectionId;
    }
    public get groupCollectionId(): string | undefined {
        return this['group_collection_id'];
    }
}