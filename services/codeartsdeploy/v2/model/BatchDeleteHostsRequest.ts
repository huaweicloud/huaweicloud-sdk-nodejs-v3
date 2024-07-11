import { DeploymentHostListEntity } from './DeploymentHostListEntity';


export class BatchDeleteHostsRequest {
    private 'Content-Type'?: BatchDeleteHostsRequestContentTypeEnum | string;
    private 'group_id'?: string;
    public body?: DeploymentHostListEntity;
    public constructor(contentType?: string, groupId?: string) { 
        this['Content-Type'] = contentType;
        this['group_id'] = groupId;
    }
    public withContentType(contentType: BatchDeleteHostsRequestContentTypeEnum | string): BatchDeleteHostsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: BatchDeleteHostsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): BatchDeleteHostsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withGroupId(groupId: string): BatchDeleteHostsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: DeploymentHostListEntity): BatchDeleteHostsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteHostsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
