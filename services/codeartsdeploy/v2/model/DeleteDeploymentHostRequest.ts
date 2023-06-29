

export class DeleteDeploymentHostRequest {
    private 'group_id': string | undefined;
    private 'host_id': string | undefined;
    private 'Content-Type': DeleteDeploymentHostRequestContentTypeEnum | undefined;
    public constructor(groupId?: any, hostId?: any, contentType?: any) { 
        this['group_id'] = groupId;
        this['host_id'] = hostId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): DeleteDeploymentHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withHostId(hostId: string): DeleteDeploymentHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
    public withContentType(contentType: DeleteDeploymentHostRequestContentTypeEnum): DeleteDeploymentHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteDeploymentHostRequestContentTypeEnum | undefined) {
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
export enum DeleteDeploymentHostRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
