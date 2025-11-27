
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSpecialUserResponse extends SdkResponse {
    public status?: number;
    public metric?: number;
    private 'flux_metric'?: number;
    public cy?: number;
    public h6?: number;
    public c?: number;
    public sc?: number;
    public bhc?: number;
    public pi?: number;
    public exp5?: number;
    public m1?: number;
    private 'is_month_m5'?: number;
    private 'exp_agy'?: number;
    private 'ces_report_site'?: number;
    private 'float'?: number;
    private 'is_show_up_bw'?: number;
    public constructor() { 
        super();
    }
    public withStatus(status: number): ShowSpecialUserResponse {
        this['status'] = status;
        return this;
    }
    public withMetric(metric: number): ShowSpecialUserResponse {
        this['metric'] = metric;
        return this;
    }
    public withFluxMetric(fluxMetric: number): ShowSpecialUserResponse {
        this['flux_metric'] = fluxMetric;
        return this;
    }
    public set fluxMetric(fluxMetric: number  | undefined) {
        this['flux_metric'] = fluxMetric;
    }
    public get fluxMetric(): number | undefined {
        return this['flux_metric'];
    }
    public withCy(cy: number): ShowSpecialUserResponse {
        this['cy'] = cy;
        return this;
    }
    public withH6(h6: number): ShowSpecialUserResponse {
        this['h6'] = h6;
        return this;
    }
    public withC(c: number): ShowSpecialUserResponse {
        this['c'] = c;
        return this;
    }
    public withSc(sc: number): ShowSpecialUserResponse {
        this['sc'] = sc;
        return this;
    }
    public withBhc(bhc: number): ShowSpecialUserResponse {
        this['bhc'] = bhc;
        return this;
    }
    public withPi(pi: number): ShowSpecialUserResponse {
        this['pi'] = pi;
        return this;
    }
    public withExp5(exp5: number): ShowSpecialUserResponse {
        this['exp5'] = exp5;
        return this;
    }
    public withM1(m1: number): ShowSpecialUserResponse {
        this['m1'] = m1;
        return this;
    }
    public withIsMonthM5(isMonthM5: number): ShowSpecialUserResponse {
        this['is_month_m5'] = isMonthM5;
        return this;
    }
    public set isMonthM5(isMonthM5: number  | undefined) {
        this['is_month_m5'] = isMonthM5;
    }
    public get isMonthM5(): number | undefined {
        return this['is_month_m5'];
    }
    public withExpAgy(expAgy: number): ShowSpecialUserResponse {
        this['exp_agy'] = expAgy;
        return this;
    }
    public set expAgy(expAgy: number  | undefined) {
        this['exp_agy'] = expAgy;
    }
    public get expAgy(): number | undefined {
        return this['exp_agy'];
    }
    public withCesReportSite(cesReportSite: number): ShowSpecialUserResponse {
        this['ces_report_site'] = cesReportSite;
        return this;
    }
    public set cesReportSite(cesReportSite: number  | undefined) {
        this['ces_report_site'] = cesReportSite;
    }
    public get cesReportSite(): number | undefined {
        return this['ces_report_site'];
    }
    public withFloat(_float: number): ShowSpecialUserResponse {
        this['float'] = _float;
        return this;
    }
    public set _float(_float: number  | undefined) {
        this['float'] = _float;
    }
    public get _float(): number | undefined {
        return this['float'];
    }
    public withIsShowUpBw(isShowUpBw: number): ShowSpecialUserResponse {
        this['is_show_up_bw'] = isShowUpBw;
        return this;
    }
    public set isShowUpBw(isShowUpBw: number  | undefined) {
        this['is_show_up_bw'] = isShowUpBw;
    }
    public get isShowUpBw(): number | undefined {
        return this['is_show_up_bw'];
    }
}