import { DeploymentGroupUpdateRequest } from './DeploymentGroupUpdateRequest';


export class UpdateDeploymentGroupRequest {
    private 'group_id'?: string;
    private 'Content-Type'?: UpdateDeploymentGroupRequestContentTypeEnum | string;
    public body?: DeploymentGroupUpdateRequest;
    public constructor(groupId?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): UpdateDeploymentGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withContentType(contentType: UpdateDeploymentGroupRequestContentTypeEnum | string): UpdateDeploymentGroupRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateDeploymentGroupRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateDeploymentGroupRequestContentTypeEnum | string | undefined {
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
