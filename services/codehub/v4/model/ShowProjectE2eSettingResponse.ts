import { E2ePolicyDto } from './E2ePolicyDto';
import { LinkSettingDto } from './LinkSettingDto';
import { ReqSettingDto } from './ReqSettingDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectE2eSettingResponse extends SdkResponse {
    private 'e2e_policies'?: E2ePolicyDto;
    public req?: ReqSettingDto;
    public link?: LinkSettingDto;
    public constructor() { 
        super();
    }
    public withE2ePolicies(e2ePolicies: E2ePolicyDto): ShowProjectE2eSettingResponse {
        this['e2e_policies'] = e2ePolicies;
        return this;
    }
    public set e2ePolicies(e2ePolicies: E2ePolicyDto  | undefined) {
        this['e2e_policies'] = e2ePolicies;
    }
    public get e2ePolicies(): E2ePolicyDto | undefined {
        return this['e2e_policies'];
    }
    public withReq(req: ReqSettingDto): ShowProjectE2eSettingResponse {
        this['req'] = req;
        return this;
    }
    public withLink(link: LinkSettingDto): ShowProjectE2eSettingResponse {
        this['link'] = link;
        return this;
    }
}