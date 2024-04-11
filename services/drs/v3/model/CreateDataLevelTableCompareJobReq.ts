import { AddDataTransformationReq } from './AddDataTransformationReq';
import { CompareObjectInfo } from './CompareObjectInfo';
import { CompareObjectInfoWithToken } from './CompareObjectInfoWithToken';


export class CreateDataLevelTableCompareJobReq {
    public type?: string;
    private 'start_time'?: string;
    private 'compare_mode'?: string;
    private 'compare_object'?: Array<CompareObjectInfo>;
    public options?: { [key: string]: string; };
    private 'compare_object_with_token'?: Array<CompareObjectInfoWithToken>;
    private 'compare_task_num'?: number;
    private 'compare_transformation_infos'?: Array<AddDataTransformationReq>;
    private 'proportion_value'?: number;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): CreateDataLevelTableCompareJobReq {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): CreateDataLevelTableCompareJobReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withCompareMode(compareMode: string): CreateDataLevelTableCompareJobReq {
        this['compare_mode'] = compareMode;
        return this;
    }
    public set compareMode(compareMode: string  | undefined) {
        this['compare_mode'] = compareMode;
    }
    public get compareMode(): string | undefined {
        return this['compare_mode'];
    }
    public withCompareObject(compareObject: Array<CompareObjectInfo>): CreateDataLevelTableCompareJobReq {
        this['compare_object'] = compareObject;
        return this;
    }
    public set compareObject(compareObject: Array<CompareObjectInfo>  | undefined) {
        this['compare_object'] = compareObject;
    }
    public get compareObject(): Array<CompareObjectInfo> | undefined {
        return this['compare_object'];
    }
    public withOptions(options: { [key: string]: string; }): CreateDataLevelTableCompareJobReq {
        this['options'] = options;
        return this;
    }
    public withCompareObjectWithToken(compareObjectWithToken: Array<CompareObjectInfoWithToken>): CreateDataLevelTableCompareJobReq {
        this['compare_object_with_token'] = compareObjectWithToken;
        return this;
    }
    public set compareObjectWithToken(compareObjectWithToken: Array<CompareObjectInfoWithToken>  | undefined) {
        this['compare_object_with_token'] = compareObjectWithToken;
    }
    public get compareObjectWithToken(): Array<CompareObjectInfoWithToken> | undefined {
        return this['compare_object_with_token'];
    }
    public withCompareTaskNum(compareTaskNum: number): CreateDataLevelTableCompareJobReq {
        this['compare_task_num'] = compareTaskNum;
        return this;
    }
    public set compareTaskNum(compareTaskNum: number  | undefined) {
        this['compare_task_num'] = compareTaskNum;
    }
    public get compareTaskNum(): number | undefined {
        return this['compare_task_num'];
    }
    public withCompareTransformationInfos(compareTransformationInfos: Array<AddDataTransformationReq>): CreateDataLevelTableCompareJobReq {
        this['compare_transformation_infos'] = compareTransformationInfos;
        return this;
    }
    public set compareTransformationInfos(compareTransformationInfos: Array<AddDataTransformationReq>  | undefined) {
        this['compare_transformation_infos'] = compareTransformationInfos;
    }
    public get compareTransformationInfos(): Array<AddDataTransformationReq> | undefined {
        return this['compare_transformation_infos'];
    }
    public withProportionValue(proportionValue: number): CreateDataLevelTableCompareJobReq {
        this['proportion_value'] = proportionValue;
        return this;
    }
    public set proportionValue(proportionValue: number  | undefined) {
        this['proportion_value'] = proportionValue;
    }
    public get proportionValue(): number | undefined {
        return this['proportion_value'];
    }
}