import { ConfigTransformationVo } from './ConfigTransformationVo';
import { DatabaseObjectVO } from './DatabaseObjectVO';
import { TransformationInfo } from './TransformationInfo';


export class CheckDataTransformationReq {
    private 'job_id'?: string | undefined;
    private 'object_info'?: Array<DatabaseObjectVO> | undefined;
    private 'transformation_info': TransformationInfo | undefined;
    private 'config_transformation'?: ConfigTransformationVo | undefined;
    public constructor(transformationInfo?: any) { 
        this['transformation_info'] = transformationInfo;
    }
    public withJobId(jobId: string): CheckDataTransformationReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withObjectInfo(objectInfo: Array<DatabaseObjectVO>): CheckDataTransformationReq {
        this['object_info'] = objectInfo;
        return this;
    }
    public set objectInfo(objectInfo: Array<DatabaseObjectVO> | undefined) {
        this['object_info'] = objectInfo;
    }
    public get objectInfo() {
        return this['object_info'];
    }
    public withTransformationInfo(transformationInfo: TransformationInfo): CheckDataTransformationReq {
        this['transformation_info'] = transformationInfo;
        return this;
    }
    public set transformationInfo(transformationInfo: TransformationInfo | undefined) {
        this['transformation_info'] = transformationInfo;
    }
    public get transformationInfo() {
        return this['transformation_info'];
    }
    public withConfigTransformation(configTransformation: ConfigTransformationVo): CheckDataTransformationReq {
        this['config_transformation'] = configTransformation;
        return this;
    }
    public set configTransformation(configTransformation: ConfigTransformationVo | undefined) {
        this['config_transformation'] = configTransformation;
    }
    public get configTransformation() {
        return this['config_transformation'];
    }
}