import { ConfigTransformationVo } from './ConfigTransformationVo';
import { DataTransformationObjectVO } from './DataTransformationObjectVO';
import { TransformationInfo } from './TransformationInfo';


export class DataTransformationInfo {
    private 'transformation_info'?: TransformationInfo | undefined;
    private 'config_transformation'?: ConfigTransformationVo | undefined;
    private 'data_transformation_object_infos'?: Array<DataTransformationObjectVO> | undefined;
    public constructor() { 
    }
    public withTransformationInfo(transformationInfo: TransformationInfo): DataTransformationInfo {
        this['transformation_info'] = transformationInfo;
        return this;
    }
    public set transformationInfo(transformationInfo: TransformationInfo | undefined) {
        this['transformation_info'] = transformationInfo;
    }
    public get transformationInfo() {
        return this['transformation_info'];
    }
    public withConfigTransformation(configTransformation: ConfigTransformationVo): DataTransformationInfo {
        this['config_transformation'] = configTransformation;
        return this;
    }
    public set configTransformation(configTransformation: ConfigTransformationVo | undefined) {
        this['config_transformation'] = configTransformation;
    }
    public get configTransformation() {
        return this['config_transformation'];
    }
    public withDataTransformationObjectInfos(dataTransformationObjectInfos: Array<DataTransformationObjectVO>): DataTransformationInfo {
        this['data_transformation_object_infos'] = dataTransformationObjectInfos;
        return this;
    }
    public set dataTransformationObjectInfos(dataTransformationObjectInfos: Array<DataTransformationObjectVO> | undefined) {
        this['data_transformation_object_infos'] = dataTransformationObjectInfos;
    }
    public get dataTransformationObjectInfos() {
        return this['data_transformation_object_infos'];
    }
}