

export class TagDeleteResponseItem {
    private 'resource_id': string | undefined;
    private 'resource_type': string | undefined;
    private 'error_code': string | undefined;
    private 'error_msg': string | undefined;
    public constructor(resourceId?: any, resourceType?: any, errorCode?: any, errorMsg?: any) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
    }
    public withResourceId(resourceId: string): TagDeleteResponseItem {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): TagDeleteResponseItem {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withErrorCode(errorCode: string): TagDeleteResponseItem {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): TagDeleteResponseItem {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}