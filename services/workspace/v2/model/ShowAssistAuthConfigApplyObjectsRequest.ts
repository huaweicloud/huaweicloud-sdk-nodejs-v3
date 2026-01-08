

export class ShowAssistAuthConfigApplyObjectsRequest {
    private 'object_type'?: ShowAssistAuthConfigApplyObjectsRequestObjectTypeEnum | string;
    private 'object_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withObjectType(objectType: ShowAssistAuthConfigApplyObjectsRequestObjectTypeEnum | string): ShowAssistAuthConfigApplyObjectsRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ShowAssistAuthConfigApplyObjectsRequestObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): ShowAssistAuthConfigApplyObjectsRequestObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withObjectName(objectName: string): ShowAssistAuthConfigApplyObjectsRequest {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withOffset(offset: number): ShowAssistAuthConfigApplyObjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAssistAuthConfigApplyObjectsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAssistAuthConfigApplyObjectsRequestObjectTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP',
    ALL = 'ALL'
}
