

export class DeleteDeploymentGroupRequest {
    private 'group_id': string | undefined;
    private 'Content-Type': DeleteDeploymentGroupRequestContentTypeEnum | undefined;
    public constructor(groupId?: any, contentType?: any) { 
        this['group_id'] = groupId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): DeleteDeploymentGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withContentType(contentType: DeleteDeploymentGroupRequestContentTypeEnum): DeleteDeploymentGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteDeploymentGroupRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDeploymentGroupRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
