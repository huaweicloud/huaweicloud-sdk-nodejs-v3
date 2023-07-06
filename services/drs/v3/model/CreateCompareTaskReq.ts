import { CreateDataLevelCompareReq } from './CreateDataLevelCompareReq';


export class CreateCompareTaskReq {
    private 'job_id': string | undefined;
    private 'object_level_compare_type'?: CreateCompareTaskReqObjectLevelCompareTypeEnum | undefined;
    private 'data_level_compare_info'?: CreateDataLevelCompareReq | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CreateCompareTaskReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withObjectLevelCompareType(objectLevelCompareType: CreateCompareTaskReqObjectLevelCompareTypeEnum): CreateCompareTaskReq {
        this['object_level_compare_type'] = objectLevelCompareType;
        return this;
    }
    public set objectLevelCompareType(objectLevelCompareType: CreateCompareTaskReqObjectLevelCompareTypeEnum | undefined) {
        this['object_level_compare_type'] = objectLevelCompareType;
    }
    public get objectLevelCompareType() {
        return this['object_level_compare_type'];
    }
    public withDataLevelCompareInfo(dataLevelCompareInfo: CreateDataLevelCompareReq): CreateCompareTaskReq {
        this['data_level_compare_info'] = dataLevelCompareInfo;
        return this;
    }
    public set dataLevelCompareInfo(dataLevelCompareInfo: CreateDataLevelCompareReq | undefined) {
        this['data_level_compare_info'] = dataLevelCompareInfo;
    }
    public get dataLevelCompareInfo() {
        return this['data_level_compare_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCompareTaskReqObjectLevelCompareTypeEnum {
    OBJECTS = 'objects'
}
