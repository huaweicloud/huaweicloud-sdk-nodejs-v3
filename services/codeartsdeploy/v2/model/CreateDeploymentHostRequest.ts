import { DeploymentHost } from './DeploymentHost';


export class CreateDeploymentHostRequest {
    private 'group_id': string | undefined;
    private 'Content-Type': CreateDeploymentHostRequestContentTypeEnum | undefined;
    public body?: DeploymentHost;
    public constructor(groupId?: any, contentType?: any) { 
        this['group_id'] = groupId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): CreateDeploymentHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withContentType(contentType: CreateDeploymentHostRequestContentTypeEnum): CreateDeploymentHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateDeploymentHostRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: DeploymentHost): CreateDeploymentHostRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDeploymentHostRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
