import { SecurityRiskResponseImageRiskRiskList } from './SecurityRiskResponseImageRiskRiskList';


export class SecurityRiskResponseImageRisk {
    private 'deduct_score'?: number;
    private 'un_scanned_image_num'?: number;
    private 'risk_list'?: Array<SecurityRiskResponseImageRiskRiskList>;
    private 'total_risk_num'?: number;
    public constructor() { 
    }
    public withDeductScore(deductScore: number): SecurityRiskResponseImageRisk {
        this['deduct_score'] = deductScore;
        return this;
    }
    public set deductScore(deductScore: number  | undefined) {
        this['deduct_score'] = deductScore;
    }
    public get deductScore(): number | undefined {
        return this['deduct_score'];
    }
    public withUnScannedImageNum(unScannedImageNum: number): SecurityRiskResponseImageRisk {
        this['un_scanned_image_num'] = unScannedImageNum;
        return this;
    }
    public set unScannedImageNum(unScannedImageNum: number  | undefined) {
        this['un_scanned_image_num'] = unScannedImageNum;
    }
    public get unScannedImageNum(): number | undefined {
        return this['un_scanned_image_num'];
    }
    public withRiskList(riskList: Array<SecurityRiskResponseImageRiskRiskList>): SecurityRiskResponseImageRisk {
        this['risk_list'] = riskList;
        return this;
    }
    public set riskList(riskList: Array<SecurityRiskResponseImageRiskRiskList>  | undefined) {
        this['risk_list'] = riskList;
    }
    public get riskList(): Array<SecurityRiskResponseImageRiskRiskList> | undefined {
        return this['risk_list'];
    }
    public withTotalRiskNum(totalRiskNum: number): SecurityRiskResponseImageRisk {
        this['total_risk_num'] = totalRiskNum;
        return this;
    }
    public set totalRiskNum(totalRiskNum: number  | undefined) {
        this['total_risk_num'] = totalRiskNum;
    }
    public get totalRiskNum(): number | undefined {
        return this['total_risk_num'];
    }
}