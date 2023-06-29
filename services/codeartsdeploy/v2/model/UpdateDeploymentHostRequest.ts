import { DeploymentHostRequest } from './DeploymentHostRequest';


export class UpdateDeploymentHostRequest {
    private 'group_id': string | undefined;
    private 'host_id': string | undefined;
    private 'Content-Type': UpdateDeploymentHostRequestContentTypeEnum | undefined;
    public body?: DeploymentHostRequest;
    public constructor(groupId?: any, hostId?: any, contentType?: any) { 
        this['group_id'] = groupId;
        this['host_id'] = hostId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): UpdateDeploymentHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withHostId(hostId: string): UpdateDeploymentHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
    public withContentType(contentType: UpdateDeploymentHostRequestContentTypeEnum): UpdateDeploymentHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateDeploymentHostRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: DeploymentHostRequest): UpdateDeploymentHostRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDeploymentHostRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
