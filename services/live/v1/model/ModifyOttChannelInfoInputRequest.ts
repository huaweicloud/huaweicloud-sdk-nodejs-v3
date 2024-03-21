import { ModifyOttChannelInputReq } from './ModifyOttChannelInputReq';


export class ModifyOttChannelInfoInputRequest {
    private 'Access-Control-Allow-Internal'?: string;
    private 'Access-Control-Allow-External'?: string;
    public body?: ModifyOttChannelInputReq;
    public constructor() { 
    }
    public withAccessControlAllowInternal(accessControlAllowInternal: string): ModifyOttChannelInfoInputRequest {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
        return this;
    }
    public set accessControlAllowInternal(accessControlAllowInternal: string  | undefined) {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
    }
    public get accessControlAllowInternal(): string | undefined {
        return this['Access-Control-Allow-Internal'];
    }
    public withAccessControlAllowExternal(accessControlAllowExternal: string): ModifyOttChannelInfoInputRequest {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
        return this;
    }
    public set accessControlAllowExternal(accessControlAllowExternal: string  | undefined) {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
    }
    public get accessControlAllowExternal(): string | undefined {
        return this['Access-Control-Allow-External'];
    }
    public withBody(body: ModifyOttChannelInputReq): ModifyOttChannelInfoInputRequest {
        this['body'] = body;
        return this;
    }
}