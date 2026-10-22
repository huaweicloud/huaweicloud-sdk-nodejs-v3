import { SegmentInfo } from './SegmentInfo';


export class HitDetail {
    private 'risk_type'?: string;
    private 'sub_risk_type'?: Array<string>;
    public prob?: number;
    public segments?: Array<SegmentInfo>;
    private 'extra_info'?: object;
    public constructor() { 
    }
    public withRiskType(riskType: string): HitDetail {
        this['risk_type'] = riskType;
        return this;
    }
    public set riskType(riskType: string  | undefined) {
        this['risk_type'] = riskType;
    }
    public get riskType(): string | undefined {
        return this['risk_type'];
    }
    public withSubRiskType(subRiskType: Array<string>): HitDetail {
        this['sub_risk_type'] = subRiskType;
        return this;
    }
    public set subRiskType(subRiskType: Array<string>  | undefined) {
        this['sub_risk_type'] = subRiskType;
    }
    public get subRiskType(): Array<string> | undefined {
        return this['sub_risk_type'];
    }
    public withProb(prob: number): HitDetail {
        this['prob'] = prob;
        return this;
    }
    public withSegments(segments: Array<SegmentInfo>): HitDetail {
        this['segments'] = segments;
        return this;
    }
    public withExtraInfo(extraInfo: object): HitDetail {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: object  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): object | undefined {
        return this['extra_info'];
    }
}