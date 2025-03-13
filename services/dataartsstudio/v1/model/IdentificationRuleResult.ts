import { DiagnoseResult } from './DiagnoseResult';
import { SecurityLevelInfo } from './SecurityLevelInfo';


export class IdentificationRuleResult {
    public result?: DiagnoseResult;
    public count?: number;
    private 'abnormal_info'?: Array<SecurityLevelInfo>;
    public constructor() { 
    }
    public withResult(result: DiagnoseResult): IdentificationRuleResult {
        this['result'] = result;
        return this;
    }
    public withCount(count: number): IdentificationRuleResult {
        this['count'] = count;
        return this;
    }
    public withAbnormalInfo(abnormalInfo: Array<SecurityLevelInfo>): IdentificationRuleResult {
        this['abnormal_info'] = abnormalInfo;
        return this;
    }
    public set abnormalInfo(abnormalInfo: Array<SecurityLevelInfo>  | undefined) {
        this['abnormal_info'] = abnormalInfo;
    }
    public get abnormalInfo(): Array<SecurityLevelInfo> | undefined {
        return this['abnormal_info'];
    }
}