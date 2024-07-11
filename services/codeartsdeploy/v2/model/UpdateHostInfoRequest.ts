import { DeploymentHostRequestExternal } from './DeploymentHostRequestExternal';


export class UpdateHostInfoRequest {
    private 'Content-Type'?: UpdateHostInfoRequestContentTypeEnum | string;
    private 'group_id'?: string;
    private 'host_id'?: string;
    public body?: DeploymentHostRequestExternal;
    public constructor(contentType?: string, groupId?: string, hostId?: string) { 
        this['Content-Type'] = contentType;
        this['group_id'] = groupId;
        this['host_id'] = hostId;
    }
    public withContentType(contentType: UpdateHostInfoRequestContentTypeEnum | string): UpdateHostInfoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateHostInfoRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateHostInfoRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withGroupId(groupId: string): UpdateHostInfoRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostId(hostId: string): UpdateHostInfoRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: DeploymentHostRequestExternal): UpdateHostInfoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHostInfoRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
