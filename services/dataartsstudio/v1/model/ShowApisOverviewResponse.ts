
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApisOverviewResponse extends SdkResponse {
    private 'publish_num'?: number;
    private 'developing_num'?: number;
    private 'apply_num'?: number;
    private 'call_num'?: number;
    private 'success_num'?: number;
    private 'fail_num'?: number;
    private 'legal_num'?: number;
    private 'illegal_num'?: number;
    public constructor() { 
        super();
    }
    public withPublishNum(publishNum: number): ShowApisOverviewResponse {
        this['publish_num'] = publishNum;
        return this;
    }
    public set publishNum(publishNum: number  | undefined) {
        this['publish_num'] = publishNum;
    }
    public get publishNum(): number | undefined {
        return this['publish_num'];
    }
    public withDevelopingNum(developingNum: number): ShowApisOverviewResponse {
        this['developing_num'] = developingNum;
        return this;
    }
    public set developingNum(developingNum: number  | undefined) {
        this['developing_num'] = developingNum;
    }
    public get developingNum(): number | undefined {
        return this['developing_num'];
    }
    public withApplyNum(applyNum: number): ShowApisOverviewResponse {
        this['apply_num'] = applyNum;
        return this;
    }
    public set applyNum(applyNum: number  | undefined) {
        this['apply_num'] = applyNum;
    }
    public get applyNum(): number | undefined {
        return this['apply_num'];
    }
    public withCallNum(callNum: number): ShowApisOverviewResponse {
        this['call_num'] = callNum;
        return this;
    }
    public set callNum(callNum: number  | undefined) {
        this['call_num'] = callNum;
    }
    public get callNum(): number | undefined {
        return this['call_num'];
    }
    public withSuccessNum(successNum: number): ShowApisOverviewResponse {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailNum(failNum: number): ShowApisOverviewResponse {
        this['fail_num'] = failNum;
        return this;
    }
    public set failNum(failNum: number  | undefined) {
        this['fail_num'] = failNum;
    }
    public get failNum(): number | undefined {
        return this['fail_num'];
    }
    public withLegalNum(legalNum: number): ShowApisOverviewResponse {
        this['legal_num'] = legalNum;
        return this;
    }
    public set legalNum(legalNum: number  | undefined) {
        this['legal_num'] = legalNum;
    }
    public get legalNum(): number | undefined {
        return this['legal_num'];
    }
    public withIllegalNum(illegalNum: number): ShowApisOverviewResponse {
        this['illegal_num'] = illegalNum;
        return this;
    }
    public set illegalNum(illegalNum: number  | undefined) {
        this['illegal_num'] = illegalNum;
    }
    public get illegalNum(): number | undefined {
        return this['illegal_num'];
    }
}