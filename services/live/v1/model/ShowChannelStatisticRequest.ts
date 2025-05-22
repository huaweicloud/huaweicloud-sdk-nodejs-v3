import { ShowChannelStatisticReq } from './ShowChannelStatisticReq';


export class ShowChannelStatisticRequest {
    private 'Access-Control-Allow-Internal'?: string;
    private 'Access-Control-Allow-External'?: string;
    public limit?: number;
    public offset?: number;
    public body?: ShowChannelStatisticReq;
    public constructor() { 
    }
    public withAccessControlAllowInternal(accessControlAllowInternal: string): ShowChannelStatisticRequest {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
        return this;
    }
    public set accessControlAllowInternal(accessControlAllowInternal: string  | undefined) {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
    }
    public get accessControlAllowInternal(): string | undefined {
        return this['Access-Control-Allow-Internal'];
    }
    public withAccessControlAllowExternal(accessControlAllowExternal: string): ShowChannelStatisticRequest {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
        return this;
    }
    public set accessControlAllowExternal(accessControlAllowExternal: string  | undefined) {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
    }
    public get accessControlAllowExternal(): string | undefined {
        return this['Access-Control-Allow-External'];
    }
    public withLimit(limit: number): ShowChannelStatisticRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowChannelStatisticRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ShowChannelStatisticReq): ShowChannelStatisticRequest {
        this['body'] = body;
        return this;
    }
}