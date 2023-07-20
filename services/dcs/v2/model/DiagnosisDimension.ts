import { DiagnosisItem } from './DiagnosisItem';


export class DiagnosisDimension {
    public name?: DiagnosisDimensionNameEnum | string;
    private 'abnormal_num'?: number;
    private 'failed_num'?: number;
    private 'diagnosis_item_list'?: Array<DiagnosisItem>;
    public constructor(name?: string, abnormalNum?: number, failedNum?: number, diagnosisItemList?: Array<DiagnosisItem>) { 
        this['name'] = name;
        this['abnormal_num'] = abnormalNum;
        this['failed_num'] = failedNum;
        this['diagnosis_item_list'] = diagnosisItemList;
    }
    public withName(name: DiagnosisDimensionNameEnum | string): DiagnosisDimension {
        this['name'] = name;
        return this;
    }
    public withAbnormalNum(abnormalNum: number): DiagnosisDimension {
        this['abnormal_num'] = abnormalNum;
        return this;
    }
    public set abnormalNum(abnormalNum: number  | undefined) {
        this['abnormal_num'] = abnormalNum;
    }
    public get abnormalNum(): number | undefined {
        return this['abnormal_num'];
    }
    public withFailedNum(failedNum: number): DiagnosisDimension {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withDiagnosisItemList(diagnosisItemList: Array<DiagnosisItem>): DiagnosisDimension {
        this['diagnosis_item_list'] = diagnosisItemList;
        return this;
    }
    public set diagnosisItemList(diagnosisItemList: Array<DiagnosisItem>  | undefined) {
        this['diagnosis_item_list'] = diagnosisItemList;
    }
    public get diagnosisItemList(): Array<DiagnosisItem> | undefined {
        return this['diagnosis_item_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiagnosisDimensionNameEnum {
    NETWORK = 'network',
    STORAGE = 'storage',
    LOAD = 'load'
}
