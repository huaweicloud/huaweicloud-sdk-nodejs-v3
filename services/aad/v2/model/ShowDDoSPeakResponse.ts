
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDDoSPeakResponse extends SdkResponse {
    private 'attack_kbytes_total'?: number;
    private 'attack_pps_peak'?: number;
    private 'in_pps_peak'?: number;
    private 'attack_bps_peak'?: number;
    private 'in_bps_peak'?: number;
    private 'ddos_count'?: number;
    public utime?: number;
    public constructor() { 
        super();
    }
    public withAttackKbytesTotal(attackKbytesTotal: number): ShowDDoSPeakResponse {
        this['attack_kbytes_total'] = attackKbytesTotal;
        return this;
    }
    public set attackKbytesTotal(attackKbytesTotal: number  | undefined) {
        this['attack_kbytes_total'] = attackKbytesTotal;
    }
    public get attackKbytesTotal(): number | undefined {
        return this['attack_kbytes_total'];
    }
    public withAttackPpsPeak(attackPpsPeak: number): ShowDDoSPeakResponse {
        this['attack_pps_peak'] = attackPpsPeak;
        return this;
    }
    public set attackPpsPeak(attackPpsPeak: number  | undefined) {
        this['attack_pps_peak'] = attackPpsPeak;
    }
    public get attackPpsPeak(): number | undefined {
        return this['attack_pps_peak'];
    }
    public withInPpsPeak(inPpsPeak: number): ShowDDoSPeakResponse {
        this['in_pps_peak'] = inPpsPeak;
        return this;
    }
    public set inPpsPeak(inPpsPeak: number  | undefined) {
        this['in_pps_peak'] = inPpsPeak;
    }
    public get inPpsPeak(): number | undefined {
        return this['in_pps_peak'];
    }
    public withAttackBpsPeak(attackBpsPeak: number): ShowDDoSPeakResponse {
        this['attack_bps_peak'] = attackBpsPeak;
        return this;
    }
    public set attackBpsPeak(attackBpsPeak: number  | undefined) {
        this['attack_bps_peak'] = attackBpsPeak;
    }
    public get attackBpsPeak(): number | undefined {
        return this['attack_bps_peak'];
    }
    public withInBpsPeak(inBpsPeak: number): ShowDDoSPeakResponse {
        this['in_bps_peak'] = inBpsPeak;
        return this;
    }
    public set inBpsPeak(inBpsPeak: number  | undefined) {
        this['in_bps_peak'] = inBpsPeak;
    }
    public get inBpsPeak(): number | undefined {
        return this['in_bps_peak'];
    }
    public withDdosCount(ddosCount: number): ShowDDoSPeakResponse {
        this['ddos_count'] = ddosCount;
        return this;
    }
    public set ddosCount(ddosCount: number  | undefined) {
        this['ddos_count'] = ddosCount;
    }
    public get ddosCount(): number | undefined {
        return this['ddos_count'];
    }
    public withUtime(utime: number): ShowDDoSPeakResponse {
        this['utime'] = utime;
        return this;
    }
}