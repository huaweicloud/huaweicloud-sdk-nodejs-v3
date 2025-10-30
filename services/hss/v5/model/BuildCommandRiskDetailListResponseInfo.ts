import { BuildCommandRiskDetailResponseInfo } from './BuildCommandRiskDetailResponseInfo';


export class BuildCommandRiskDetailListResponseInfo {
    private 'risk_num'?: number;
    private 'risk_list'?: Array<BuildCommandRiskDetailResponseInfo>;
    public constructor() { 
    }
    public withRiskNum(riskNum: number): BuildCommandRiskDetailListResponseInfo {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withRiskList(riskList: Array<BuildCommandRiskDetailResponseInfo>): BuildCommandRiskDetailListResponseInfo {
        this['risk_list'] = riskList;
        return this;
    }
    public set riskList(riskList: Array<BuildCommandRiskDetailResponseInfo>  | undefined) {
        this['risk_list'] = riskList;
    }
    public get riskList(): Array<BuildCommandRiskDetailResponseInfo> | undefined {
        return this['risk_list'];
    }
}