import { KafkaMessageDiagnosisDimensionEntity } from './KafkaMessageDiagnosisDimensionEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMessageDiagnosisReportResponse extends SdkResponse {
    private 'abnormal_item_num'?: number;
    private 'failed_item_num'?: number;
    private 'normal_item_num'?: number;
    private 'diagnosis_dimension_list'?: Array<KafkaMessageDiagnosisDimensionEntity>;
    public constructor() { 
        super();
    }
    public withAbnormalItemNum(abnormalItemNum: number): ShowMessageDiagnosisReportResponse {
        this['abnormal_item_num'] = abnormalItemNum;
        return this;
    }
    public set abnormalItemNum(abnormalItemNum: number  | undefined) {
        this['abnormal_item_num'] = abnormalItemNum;
    }
    public get abnormalItemNum(): number | undefined {
        return this['abnormal_item_num'];
    }
    public withFailedItemNum(failedItemNum: number): ShowMessageDiagnosisReportResponse {
        this['failed_item_num'] = failedItemNum;
        return this;
    }
    public set failedItemNum(failedItemNum: number  | undefined) {
        this['failed_item_num'] = failedItemNum;
    }
    public get failedItemNum(): number | undefined {
        return this['failed_item_num'];
    }
    public withNormalItemNum(normalItemNum: number): ShowMessageDiagnosisReportResponse {
        this['normal_item_num'] = normalItemNum;
        return this;
    }
    public set normalItemNum(normalItemNum: number  | undefined) {
        this['normal_item_num'] = normalItemNum;
    }
    public get normalItemNum(): number | undefined {
        return this['normal_item_num'];
    }
    public withDiagnosisDimensionList(diagnosisDimensionList: Array<KafkaMessageDiagnosisDimensionEntity>): ShowMessageDiagnosisReportResponse {
        this['diagnosis_dimension_list'] = diagnosisDimensionList;
        return this;
    }
    public set diagnosisDimensionList(diagnosisDimensionList: Array<KafkaMessageDiagnosisDimensionEntity>  | undefined) {
        this['diagnosis_dimension_list'] = diagnosisDimensionList;
    }
    public get diagnosisDimensionList(): Array<KafkaMessageDiagnosisDimensionEntity> | undefined {
        return this['diagnosis_dimension_list'];
    }
}