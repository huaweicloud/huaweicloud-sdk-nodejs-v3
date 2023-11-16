
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPeakResponse extends SdkResponse {
    private 'attack_kbps_peak'?: number;
    private 'in_kbps_peak'?: number;
    private 'ddos_count'?: number;
    public timestamp?: number;
    public vip?: string;
    public constructor() { 
        super();
    }
    public withAttackKbpsPeak(attackKbpsPeak: number): ListPeakResponse {
        this['attack_kbps_peak'] = attackKbpsPeak;
        return this;
    }
    public set attackKbpsPeak(attackKbpsPeak: number  | undefined) {
        this['attack_kbps_peak'] = attackKbpsPeak;
    }
    public get attackKbpsPeak(): number | undefined {
        return this['attack_kbps_peak'];
    }
    public withInKbpsPeak(inKbpsPeak: number): ListPeakResponse {
        this['in_kbps_peak'] = inKbpsPeak;
        return this;
    }
    public set inKbpsPeak(inKbpsPeak: number  | undefined) {
        this['in_kbps_peak'] = inKbpsPeak;
    }
    public get inKbpsPeak(): number | undefined {
        return this['in_kbps_peak'];
    }
    public withDdosCount(ddosCount: number): ListPeakResponse {
        this['ddos_count'] = ddosCount;
        return this;
    }
    public set ddosCount(ddosCount: number  | undefined) {
        this['ddos_count'] = ddosCount;
    }
    public get ddosCount(): number | undefined {
        return this['ddos_count'];
    }
    public withTimestamp(timestamp: number): ListPeakResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withVip(vip: string): ListPeakResponse {
        this['vip'] = vip;
        return this;
    }
}