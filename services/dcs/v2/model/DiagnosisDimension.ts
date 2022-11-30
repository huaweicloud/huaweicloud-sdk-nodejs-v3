import { DiagnosisItem } from './DiagnosisItem';


export class DiagnosisDimension {
    public name: DiagnosisDimensionNameEnum;
    private 'abnormal_num': number | undefined;
    private 'failed_num': number | undefined;
    private 'diagnosis_item_list': Array<DiagnosisItem> | undefined;
    public constructor(name?: any, abnormalNum?: any, failedNum?: any, diagnosisItemList?: any) { 
        this['name'] = name;
        this['abnormal_num'] = abnormalNum;
        this['failed_num'] = failedNum;
        this['diagnosis_item_list'] = diagnosisItemList;
    }
    public withName(name: DiagnosisDimensionNameEnum): DiagnosisDimension {
        this['name'] = name;
        return this;
    }
    public withAbnormalNum(abnormalNum: number): DiagnosisDimension {
        this['abnormal_num'] = abnormalNum;
        return this;
    }
    public set abnormalNum(abnormalNum: number | undefined) {
        this['abnormal_num'] = abnormalNum;
    }
    public get abnormalNum() {
        return this['abnormal_num'];
    }
    public withFailedNum(failedNum: number): DiagnosisDimension {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum() {
        return this['failed_num'];
    }
    public withDiagnosisItemList(diagnosisItemList: Array<DiagnosisItem>): DiagnosisDimension {
        this['diagnosis_item_list'] = diagnosisItemList;
        return this;
    }
    public set diagnosisItemList(diagnosisItemList: Array<DiagnosisItem> | undefined) {
        this['diagnosis_item_list'] = diagnosisItemList;
    }
    public get diagnosisItemList() {
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
