import { PermissionUpdateV2Body } from './PermissionUpdateV2Body';


export class UpdateHostGroupPermissionsRequest {
    private 'Content-Type'?: UpdateHostGroupPermissionsRequestContentTypeEnum | string;
    private 'group_id'?: string;
    public body?: PermissionUpdateV2Body;
    public constructor(contentType?: string, groupId?: string) { 
        this['Content-Type'] = contentType;
        this['group_id'] = groupId;
    }
    public withContentType(contentType: UpdateHostGroupPermissionsRequestContentTypeEnum | string): UpdateHostGroupPermissionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: UpdateHostGroupPermissionsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): UpdateHostGroupPermissionsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withGroupId(groupId: string): UpdateHostGroupPermissionsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: PermissionUpdateV2Body): UpdateHostGroupPermissionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHostGroupPermissionsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
