import { CompareObjectInfo } from './CompareObjectInfo';
import { CompareObjectInfoWithToken } from './CompareObjectInfoWithToken';


export class CreateDataLevelCompareReq {
    private 'conflict_policy': CreateDataLevelCompareReqConflictPolicyEnum | undefined;
    private 'compare_type': CreateDataLevelCompareReqCompareTypeEnum | undefined;
    private 'compare_mode'?: CreateDataLevelCompareReqCompareModeEnum | undefined;
    private 'start_time'?: string | undefined;
    private 'compare_object_infos'?: Array<CompareObjectInfo> | undefined;
    private 'compare_object_infos_with_token'?: Array<CompareObjectInfoWithToken> | undefined;
    public constructor(conflictPolicy?: any, compareType?: any) { 
        this['conflict_policy'] = conflictPolicy;
        this['compare_type'] = compareType;
    }
    public withConflictPolicy(conflictPolicy: CreateDataLevelCompareReqConflictPolicyEnum): CreateDataLevelCompareReq {
        this['conflict_policy'] = conflictPolicy;
        return this;
    }
    public set conflictPolicy(conflictPolicy: CreateDataLevelCompareReqConflictPolicyEnum | undefined) {
        this['conflict_policy'] = conflictPolicy;
    }
    public get conflictPolicy() {
        return this['conflict_policy'];
    }
    public withCompareType(compareType: CreateDataLevelCompareReqCompareTypeEnum): CreateDataLevelCompareReq {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: CreateDataLevelCompareReqCompareTypeEnum | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType() {
        return this['compare_type'];
    }
    public withCompareMode(compareMode: CreateDataLevelCompareReqCompareModeEnum): CreateDataLevelCompareReq {
        this['compare_mode'] = compareMode;
        return this;
    }
    public set compareMode(compareMode: CreateDataLevelCompareReqCompareModeEnum | undefined) {
        this['compare_mode'] = compareMode;
    }
    public get compareMode() {
        return this['compare_mode'];
    }
    public withStartTime(startTime: string): CreateDataLevelCompareReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withCompareObjectInfos(compareObjectInfos: Array<CompareObjectInfo>): CreateDataLevelCompareReq {
        this['compare_object_infos'] = compareObjectInfos;
        return this;
    }
    public set compareObjectInfos(compareObjectInfos: Array<CompareObjectInfo> | undefined) {
        this['compare_object_infos'] = compareObjectInfos;
    }
    public get compareObjectInfos() {
        return this['compare_object_infos'];
    }
    public withCompareObjectInfosWithToken(compareObjectInfosWithToken: Array<CompareObjectInfoWithToken>): CreateDataLevelCompareReq {
        this['compare_object_infos_with_token'] = compareObjectInfosWithToken;
        return this;
    }
    public set compareObjectInfosWithToken(compareObjectInfosWithToken: Array<CompareObjectInfoWithToken> | undefined) {
        this['compare_object_infos_with_token'] = compareObjectInfosWithToken;
    }
    public get compareObjectInfosWithToken() {
        return this['compare_object_infos_with_token'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDataLevelCompareReqConflictPolicyEnum {
    CANCEL = 'cancel',
    KEEP = 'keep'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDataLevelCompareReqCompareTypeEnum {
    LINES = 'lines',
    CONTENTS = 'contents'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDataLevelCompareReqCompareModeEnum {
    QUICK_COMPARISON = 'quick_comparison'
}
