import { CreateHarvestTaskInfoReq } from './CreateHarvestTaskInfoReq';


export class CreateHarvestTaskRequest {
    private 'Access-Control-Allow-Internal'?: string;
    private 'Access-Control-Allow-External'?: string;
    public body?: CreateHarvestTaskInfoReq;
    public constructor() { 
    }
    public withAccessControlAllowInternal(accessControlAllowInternal: string): CreateHarvestTaskRequest {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
        return this;
    }
    public set accessControlAllowInternal(accessControlAllowInternal: string  | undefined) {
        this['Access-Control-Allow-Internal'] = accessControlAllowInternal;
    }
    public get accessControlAllowInternal(): string | undefined {
        return this['Access-Control-Allow-Internal'];
    }
    public withAccessControlAllowExternal(accessControlAllowExternal: string): CreateHarvestTaskRequest {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
        return this;
    }
    public set accessControlAllowExternal(accessControlAllowExternal: string  | undefined) {
        this['Access-Control-Allow-External'] = accessControlAllowExternal;
    }
    public get accessControlAllowExternal(): string | undefined {
        return this['Access-Control-Allow-External'];
    }
    public withBody(body: CreateHarvestTaskInfoReq): CreateHarvestTaskRequest {
        this['body'] = body;
        return this;
    }
}