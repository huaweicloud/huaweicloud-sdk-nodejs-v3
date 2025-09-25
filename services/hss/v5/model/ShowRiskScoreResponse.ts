
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRiskScoreResponse extends SdkResponse {
    public score?: number;
    private 'risk_num'?: number;
    private 'risk_server_num'?: number;
    public constructor() { 
        super();
    }
    public withScore(score: number): ShowRiskScoreResponse {
        this['score'] = score;
        return this;
    }
    public withRiskNum(riskNum: number): ShowRiskScoreResponse {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withRiskServerNum(riskServerNum: number): ShowRiskScoreResponse {
        this['risk_server_num'] = riskServerNum;
        return this;
    }
    public set riskServerNum(riskServerNum: number  | undefined) {
        this['risk_server_num'] = riskServerNum;
    }
    public get riskServerNum(): number | undefined {
        return this['risk_server_num'];
    }
}