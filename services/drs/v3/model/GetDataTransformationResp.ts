import { DataTransformationInfo } from './DataTransformationInfo';


export class GetDataTransformationResp {
    private 'total_count'?: number;
    private 'filter_conditions'?: Array<DataTransformationInfo>;
    public constructor() { 
    }
    public withTotalCount(totalCount: number): GetDataTransformationResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withFilterConditions(filterConditions: Array<DataTransformationInfo>): GetDataTransformationResp {
        this['filter_conditions'] = filterConditions;
        return this;
    }
    public set filterConditions(filterConditions: Array<DataTransformationInfo>  | undefined) {
        this['filter_conditions'] = filterConditions;
    }
    public get filterConditions(): Array<DataTransformationInfo> | undefined {
        return this['filter_conditions'];
    }
}