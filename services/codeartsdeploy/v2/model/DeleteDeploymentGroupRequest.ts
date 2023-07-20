

export class DeleteDeploymentGroupRequest {
    private 'group_id'?: string;
    private 'Content-Type'?: DeleteDeploymentGroupRequestContentTypeEnum | string;
    public constructor(groupId?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): DeleteDeploymentGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withContentType(contentType: DeleteDeploymentGroupRequestContentTypeEnum | string): DeleteDeploymentGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteDeploymentGroupRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteDeploymentGroupRequestContentTypeEnum | string | undefined {
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
