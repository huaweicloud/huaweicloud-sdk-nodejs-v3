import { AlgorithmDetailDTO } from './AlgorithmDetailDTO';


export class DynamicMaskingPolicyCreate {
    private 'column_name'?: string;
    private 'column_type'?: string;
    private 'algorithm_type'?: string;
    private 'algorithm_detail'?: string;
    private 'algorithm_detail_dto'?: AlgorithmDetailDTO;
    public constructor(columnName?: string, columnType?: string) { 
        this['column_name'] = columnName;
        this['column_type'] = columnType;
    }
    public withColumnName(columnName: string): DynamicMaskingPolicyCreate {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnType(columnType: string): DynamicMaskingPolicyCreate {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withAlgorithmType(algorithmType: string): DynamicMaskingPolicyCreate {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withAlgorithmDetail(algorithmDetail: string): DynamicMaskingPolicyCreate {
        this['algorithm_detail'] = algorithmDetail;
        return this;
    }
    public set algorithmDetail(algorithmDetail: string  | undefined) {
        this['algorithm_detail'] = algorithmDetail;
    }
    public get algorithmDetail(): string | undefined {
        return this['algorithm_detail'];
    }
    public withAlgorithmDetailDto(algorithmDetailDto: AlgorithmDetailDTO): DynamicMaskingPolicyCreate {
        this['algorithm_detail_dto'] = algorithmDetailDto;
        return this;
    }
    public set algorithmDetailDto(algorithmDetailDto: AlgorithmDetailDTO  | undefined) {
        this['algorithm_detail_dto'] = algorithmDetailDto;
    }
    public get algorithmDetailDto(): AlgorithmDetailDTO | undefined {
        return this['algorithm_detail_dto'];
    }
}