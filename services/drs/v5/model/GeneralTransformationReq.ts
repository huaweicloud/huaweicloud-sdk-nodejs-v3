import { DataFilterObjectInfo } from './DataFilterObjectInfo';


export class GeneralTransformationReq {
    private 'filter_object_list'?: Array<DataFilterObjectInfo>;
    private 'source_filter_condition'?: string;
    public constructor() { 
    }
    public withFilterObjectList(filterObjectList: Array<DataFilterObjectInfo>): GeneralTransformationReq {
        this['filter_object_list'] = filterObjectList;
        return this;
    }
    public set filterObjectList(filterObjectList: Array<DataFilterObjectInfo>  | undefined) {
        this['filter_object_list'] = filterObjectList;
    }
    public get filterObjectList(): Array<DataFilterObjectInfo> | undefined {
        return this['filter_object_list'];
    }
    public withSourceFilterCondition(sourceFilterCondition: string): GeneralTransformationReq {
        this['source_filter_condition'] = sourceFilterCondition;
        return this;
    }
    public set sourceFilterCondition(sourceFilterCondition: string  | undefined) {
        this['source_filter_condition'] = sourceFilterCondition;
    }
    public get sourceFilterCondition(): string | undefined {
        return this['source_filter_condition'];
    }
}