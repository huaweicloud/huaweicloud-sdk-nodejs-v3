import { ApplySharedVpcDedicatedParam } from './ApplySharedVpcDedicatedParam';


export class UpdateAccessModeReq {
    private 'access_mode'?: UpdateAccessModeReqAccessModeEnum | string;
    private 'dedicated_cidrs'?: string;
    private 'apply_shared_vpc_dedicated_param'?: ApplySharedVpcDedicatedParam;
    public constructor() { 
    }
    public withAccessMode(accessMode: UpdateAccessModeReqAccessModeEnum | string): UpdateAccessModeReq {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: UpdateAccessModeReqAccessModeEnum | string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): UpdateAccessModeReqAccessModeEnum | string | undefined {
        return this['access_mode'];
    }
    public withDedicatedCidrs(dedicatedCidrs: string): UpdateAccessModeReq {
        this['dedicated_cidrs'] = dedicatedCidrs;
        return this;
    }
    public set dedicatedCidrs(dedicatedCidrs: string  | undefined) {
        this['dedicated_cidrs'] = dedicatedCidrs;
    }
    public get dedicatedCidrs(): string | undefined {
        return this['dedicated_cidrs'];
    }
    public withApplySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam): UpdateAccessModeReq {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
        return this;
    }
    public set applySharedVpcDedicatedParam(applySharedVpcDedicatedParam: ApplySharedVpcDedicatedParam  | undefined) {
        this['apply_shared_vpc_dedicated_param'] = applySharedVpcDedicatedParam;
    }
    public get applySharedVpcDedicatedParam(): ApplySharedVpcDedicatedParam | undefined {
        return this['apply_shared_vpc_dedicated_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAccessModeReqAccessModeEnum {
    INTERNET = 'INTERNET',
    DEDICATED = 'DEDICATED',
    BOTH = 'BOTH'
}
