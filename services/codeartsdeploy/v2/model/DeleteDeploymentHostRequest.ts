

export class DeleteDeploymentHostRequest {
    private 'group_id'?: string;
    private 'host_id'?: string;
    private 'Content-Type'?: DeleteDeploymentHostRequestContentTypeEnum | string;
    public constructor(groupId?: string, hostId?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['host_id'] = hostId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): DeleteDeploymentHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostId(hostId: string): DeleteDeploymentHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withContentType(contentType: DeleteDeploymentHostRequestContentTypeEnum | string): DeleteDeploymentHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteDeploymentHostRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteDeploymentHostRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDeploymentHostRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
