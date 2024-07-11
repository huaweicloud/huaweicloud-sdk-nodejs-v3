

export class DeleteHostRequest {
    private 'Content-Type'?: DeleteHostRequestContentTypeEnum | string;
    private 'group_id'?: string;
    private 'host_id'?: string;
    public constructor(contentType?: string, groupId?: string, hostId?: string) { 
        this['Content-Type'] = contentType;
        this['group_id'] = groupId;
        this['host_id'] = hostId;
    }
    public withContentType(contentType: DeleteHostRequestContentTypeEnum | string): DeleteHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteHostRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteHostRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withGroupId(groupId: string): DeleteHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostId(hostId: string): DeleteHostRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteHostRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
