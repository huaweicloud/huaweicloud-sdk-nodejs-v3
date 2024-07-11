import { DeploymentHostsCopyRequest } from './DeploymentHostsCopyRequest';


export class CopyHostsToTargetRequest {
    private 'Content-Type'?: CopyHostsToTargetRequestContentTypeEnum | string;
    private 'group_id'?: string;
    public body?: DeploymentHostsCopyRequest;
    public constructor(contentType?: string, groupId?: string) { 
        this['Content-Type'] = contentType;
        this['group_id'] = groupId;
    }
    public withContentType(contentType: CopyHostsToTargetRequestContentTypeEnum | string): CopyHostsToTargetRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CopyHostsToTargetRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CopyHostsToTargetRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withGroupId(groupId: string): CopyHostsToTargetRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: DeploymentHostsCopyRequest): CopyHostsToTargetRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CopyHostsToTargetRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
