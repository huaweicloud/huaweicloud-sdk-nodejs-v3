import { CreateDataCompareDatabaseObject } from './CreateDataCompareDatabaseObject';
import { CreateDataCompareTransformationInfo } from './CreateDataCompareTransformationInfo';


export class AddDataTransformationReq {
    private 'object_info'?: Array<CreateDataCompareDatabaseObject>;
    private 'transformation_info'?: CreateDataCompareTransformationInfo;
    public constructor(objectInfo?: Array<CreateDataCompareDatabaseObject>, transformationInfo?: CreateDataCompareTransformationInfo) { 
        this['object_info'] = objectInfo;
        this['transformation_info'] = transformationInfo;
    }
    public withObjectInfo(objectInfo: Array<CreateDataCompareDatabaseObject>): AddDataTransformationReq {
        this['object_info'] = objectInfo;
        return this;
    }
    public set objectInfo(objectInfo: Array<CreateDataCompareDatabaseObject>  | undefined) {
        this['object_info'] = objectInfo;
    }
    public get objectInfo(): Array<CreateDataCompareDatabaseObject> | undefined {
        return this['object_info'];
    }
    public withTransformationInfo(transformationInfo: CreateDataCompareTransformationInfo): AddDataTransformationReq {
        this['transformation_info'] = transformationInfo;
        return this;
    }
    public set transformationInfo(transformationInfo: CreateDataCompareTransformationInfo  | undefined) {
        this['transformation_info'] = transformationInfo;
    }
    public get transformationInfo(): CreateDataCompareTransformationInfo | undefined {
        return this['transformation_info'];
    }
}