

export class DeleteHostClusterRequest {
    private 'Content-Type'?: DeleteHostClusterRequestContentTypeEnum | string;
    private 'group_id'?: string;
    public constructor(contentType?: string, groupId?: string) { 
        this['Content-Type'] = contentType;
        this['group_id'] = groupId;
    }
    public withContentType(contentType: DeleteHostClusterRequestContentTypeEnum | string): DeleteHostClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: DeleteHostClusterRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): DeleteHostClusterRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withGroupId(groupId: string): DeleteHostClusterRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteHostClusterRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
