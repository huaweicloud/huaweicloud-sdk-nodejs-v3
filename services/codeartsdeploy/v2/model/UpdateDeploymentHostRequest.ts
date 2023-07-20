import { DeploymentHostRequest } from './DeploymentHostRequest';


export class UpdateDeploymentHostRequest {
    private 'group_id'?: string;
    private 'host_id'?: string;
    private 'Content-Type'?: UpdateDeploymentHostRequestContentTypeEnum | string;
    public body?: DeploymentHostRequest;
    public constructor(groupId?: string, hostId?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['host_id'] = hostId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): UpdateDeploymentHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostId(hostId: string): UpdateDeploymentHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withContentType(contentType: UpdateDeploymentHostRequestContentTypeEnum | string): UpdateDeploymentHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateDeploymentHostRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateDeploymentHostRequestContentTypeEnum | string | undefined {
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
