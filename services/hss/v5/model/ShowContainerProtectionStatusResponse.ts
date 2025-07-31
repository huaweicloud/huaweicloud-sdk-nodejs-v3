
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowContainerProtectionStatusResponse extends SdkResponse {
    private 'no_risk'?: number;
    public risk?: number;
    private 'no_protect'?: number;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withNoRisk(noRisk: number): ShowContainerProtectionStatusResponse {
        this['no_risk'] = noRisk;
        return this;
    }
    public set noRisk(noRisk: number  | undefined) {
        this['no_risk'] = noRisk;
    }
    public get noRisk(): number | undefined {
        return this['no_risk'];
    }
    public withRisk(risk: number): ShowContainerProtectionStatusResponse {
        this['risk'] = risk;
        return this;
    }
    public withNoProtect(noProtect: number): ShowContainerProtectionStatusResponse {
        this['no_protect'] = noProtect;
        return this;
    }
    public set noProtect(noProtect: number  | undefined) {
        this['no_protect'] = noProtect;
    }
    public get noProtect(): number | undefined {
        return this['no_protect'];
    }
    public withTotalNum(totalNum: number): ShowContainerProtectionStatusResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}