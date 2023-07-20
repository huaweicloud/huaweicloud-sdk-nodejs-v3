import { DeploymentHost } from './DeploymentHost';


export class CreateDeploymentHostRequest {
    private 'group_id'?: string;
    private 'Content-Type'?: CreateDeploymentHostRequestContentTypeEnum | string;
    public body?: DeploymentHost;
    public constructor(groupId?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): CreateDeploymentHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withContentType(contentType: CreateDeploymentHostRequestContentTypeEnum | string): CreateDeploymentHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateDeploymentHostRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateDeploymentHostRequestContentTypeEnum | string | undefined {
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
