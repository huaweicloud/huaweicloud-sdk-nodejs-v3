import { DeploymentGroupUpdateRequest } from './DeploymentGroupUpdateRequest';


export class UpdateDeploymentGroupRequest {
    private 'group_id': string | undefined;
    private 'Content-Type': UpdateDeploymentGroupRequestContentTypeEnum | undefined;
    public body?: DeploymentGroupUpdateRequest;
    public constructor(groupId?: any, contentType?: any) { 
        this['group_id'] = groupId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): UpdateDeploymentGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withContentType(contentType: UpdateDeploymentGroupRequestContentTypeEnum): UpdateDeploymentGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateDeploymentGroupRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: DeploymentGroupUpdateRequest): UpdateDeploymentGroupRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDeploymentGroupRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
