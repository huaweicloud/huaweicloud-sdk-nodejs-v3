import { CreateDataLevelCompareReq } from './CreateDataLevelCompareReq';


export class CreateCompareTaskReq {
    private 'job_id'?: string;
    private 'object_level_compare_type'?: CreateCompareTaskReqObjectLevelCompareTypeEnum | string;
    private 'data_level_compare_info'?: CreateDataLevelCompareReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CreateCompareTaskReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withObjectLevelCompareType(objectLevelCompareType: CreateCompareTaskReqObjectLevelCompareTypeEnum | string): CreateCompareTaskReq {
        this['object_level_compare_type'] = objectLevelCompareType;
        return this;
    }
    public set objectLevelCompareType(objectLevelCompareType: CreateCompareTaskReqObjectLevelCompareTypeEnum | string  | undefined) {
        this['object_level_compare_type'] = objectLevelCompareType;
    }
    public get objectLevelCompareType(): CreateCompareTaskReqObjectLevelCompareTypeEnum | string | undefined {
        return this['object_level_compare_type'];
    }
    public withDataLevelCompareInfo(dataLevelCompareInfo: CreateDataLevelCompareReq): CreateCompareTaskReq {
        this['data_level_compare_info'] = dataLevelCompareInfo;
        return this;
    }
    public set dataLevelCompareInfo(dataLevelCompareInfo: CreateDataLevelCompareReq  | undefined) {
        this['data_level_compare_info'] = dataLevelCompareInfo;
    }
    public get dataLevelCompareInfo(): CreateDataLevelCompareReq | undefined {
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
