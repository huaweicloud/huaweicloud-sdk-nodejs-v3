

export class MemberGroupUrlInfo {
    private 'member_group_id'?: string;
    private 'req_protocol'?: MemberGroupUrlInfoReqProtocolEnum | string;
    private 'req_method'?: MemberGroupUrlInfoReqMethodEnum | string;
    private 'req_uri'?: string;
    public constructor(memberGroupId?: string, reqProtocol?: string, reqMethod?: string, reqUri?: string) { 
        this['member_group_id'] = memberGroupId;
        this['req_protocol'] = reqProtocol;
        this['req_method'] = reqMethod;
        this['req_uri'] = reqUri;
    }
    public withMemberGroupId(memberGroupId: string): MemberGroupUrlInfo {
        this['member_group_id'] = memberGroupId;
        return this;
    }
    public set memberGroupId(memberGroupId: string  | undefined) {
        this['member_group_id'] = memberGroupId;
    }
    public get memberGroupId(): string | undefined {
        return this['member_group_id'];
    }
    public withReqProtocol(reqProtocol: MemberGroupUrlInfoReqProtocolEnum | string): MemberGroupUrlInfo {
        this['req_protocol'] = reqProtocol;
        return this;
    }
    public set reqProtocol(reqProtocol: MemberGroupUrlInfoReqProtocolEnum | string  | undefined) {
        this['req_protocol'] = reqProtocol;
    }
    public get reqProtocol(): MemberGroupUrlInfoReqProtocolEnum | string | undefined {
        return this['req_protocol'];
    }
    public withReqMethod(reqMethod: MemberGroupUrlInfoReqMethodEnum | string): MemberGroupUrlInfo {
        this['req_method'] = reqMethod;
        return this;
    }
    public set reqMethod(reqMethod: MemberGroupUrlInfoReqMethodEnum | string  | undefined) {
        this['req_method'] = reqMethod;
    }
    public get reqMethod(): MemberGroupUrlInfoReqMethodEnum | string | undefined {
        return this['req_method'];
    }
    public withReqUri(reqUri: string): MemberGroupUrlInfo {
        this['req_uri'] = reqUri;
        return this;
    }
    public set reqUri(reqUri: string  | undefined) {
        this['req_uri'] = reqUri;
    }
    public get reqUri(): string | undefined {
        return this['req_uri'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MemberGroupUrlInfoReqProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    GRPC = 'GRPC',
    GRPCS = 'GRPCS'
}
/**
    * @export
    * @enum {string}
    */
export enum MemberGroupUrlInfoReqMethodEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    ANY = 'ANY'
}
