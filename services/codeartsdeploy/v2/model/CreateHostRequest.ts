import { CreateHostRequestBody } from './CreateHostRequestBody';


export class CreateHostRequest {
    private 'group_id'?: string;
    private 'Content-Type'?: CreateHostRequestContentTypeEnum | string;
    public body?: CreateHostRequestBody;
    public constructor(groupId?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): CreateHostRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withContentType(contentType: CreateHostRequestContentTypeEnum | string): CreateHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateHostRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): CreateHostRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateHostRequestBody): CreateHostRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHostRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
