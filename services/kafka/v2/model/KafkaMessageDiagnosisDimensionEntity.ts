import { KafkaMessageDiagnosisItemEntity } from './KafkaMessageDiagnosisItemEntity';


export class KafkaMessageDiagnosisDimensionEntity {
    public name?: string;
    private 'abnormal_num'?: number;
    private 'failed_num'?: number;
    private 'diagnosis_item_list'?: Array<KafkaMessageDiagnosisItemEntity>;
    public constructor(name?: string, abnormalNum?: number, failedNum?: number, diagnosisItemList?: Array<KafkaMessageDiagnosisItemEntity>) { 
        this['name'] = name;
        this['abnormal_num'] = abnormalNum;
        this['failed_num'] = failedNum;
        this['diagnosis_item_list'] = diagnosisItemList;
    }
    public withName(name: string): KafkaMessageDiagnosisDimensionEntity {
        this['name'] = name;
        return this;
    }
    public withAbnormalNum(abnormalNum: number): KafkaMessageDiagnosisDimensionEntity {
        this['abnormal_num'] = abnormalNum;
        return this;
    }
    public set abnormalNum(abnormalNum: number  | undefined) {
        this['abnormal_num'] = abnormalNum;
    }
    public get abnormalNum(): number | undefined {
        return this['abnormal_num'];
    }
    public withFailedNum(failedNum: number): KafkaMessageDiagnosisDimensionEntity {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withDiagnosisItemList(diagnosisItemList: Array<KafkaMessageDiagnosisItemEntity>): KafkaMessageDiagnosisDimensionEntity {
        this['diagnosis_item_list'] = diagnosisItemList;
        return this;
    }
    public set diagnosisItemList(diagnosisItemList: Array<KafkaMessageDiagnosisItemEntity>  | undefined) {
        this['diagnosis_item_list'] = diagnosisItemList;
    }
    public get diagnosisItemList(): Array<KafkaMessageDiagnosisItemEntity> | undefined {
        return this['diagnosis_item_list'];
    }
}