import { HostClusterRequest } from './HostClusterRequest';


export class UpdateHostClusterRequest {
    private 'Content-Type'?: UpdateHostClusterRequestContentTypeEnum | string;
    private 'group_id'?: string;
    public body?: HostClusterRequest;
    public constructor(contentType?: string, groupId?: string) { 
        this['Content-Type'] = contentType;
        this['group_id'] = groupId;
    }
    public withContentType(contentType: UpdateHostClusterRequestContentTypeEnum | string): UpdateHostClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateHostClusterRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateHostClusterRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withGroupId(groupId: string): UpdateHostClusterRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: HostClusterRequest): UpdateHostClusterRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHostClusterRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
