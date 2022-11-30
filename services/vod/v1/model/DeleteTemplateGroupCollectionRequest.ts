

export class DeleteTemplateGroupCollectionRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'group_collection_id': string | undefined;
    public constructor(groupCollectionId?: any) { 
        this['group_collection_id'] = groupCollectionId;
    }
    public withAuthorization(authorization: string): DeleteTemplateGroupCollectionRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): DeleteTemplateGroupCollectionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withGroupCollectionId(groupCollectionId: string): DeleteTemplateGroupCollectionRequest {
        this['group_collection_id'] = groupCollectionId;
        return this;
    }
    public set groupCollectionId(groupCollectionId: string | undefined) {
        this['group_collection_id'] = groupCollectionId;
    }
    public get groupCollectionId() {
        return this['group_collection_id'];
    }
}