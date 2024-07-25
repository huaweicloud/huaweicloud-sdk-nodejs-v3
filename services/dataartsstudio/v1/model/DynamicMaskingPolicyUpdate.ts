import { AlgorithmDetailDTO } from './AlgorithmDetailDTO';


export class DynamicMaskingPolicyUpdate {
    private 'column_name'?: string;
    private 'column_type'?: string;
    private 'algorithm_type'?: string;
    private 'algorithm_detail'?: string;
    private 'algorithm_detail_dto'?: AlgorithmDetailDTO;
    public constructor(columnName?: string, columnType?: string) { 
        this['column_name'] = columnName;
        this['column_type'] = columnType;
    }
    public withColumnName(columnName: string): DynamicMaskingPolicyUpdate {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnType(columnType: string): DynamicMaskingPolicyUpdate {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withAlgorithmType(algorithmType: string): DynamicMaskingPolicyUpdate {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withAlgorithmDetail(algorithmDetail: string): DynamicMaskingPolicyUpdate {
        this['algorithm_detail'] = algorithmDetail;
        return this;
    }
    public set algorithmDetail(algorithmDetail: string  | undefined) {
        this['algorithm_detail'] = algorithmDetail;
    }
    public get algorithmDetail(): string | undefined {
        return this['algorithm_detail'];
    }
    public withAlgorithmDetailDto(algorithmDetailDto: AlgorithmDetailDTO): DynamicMaskingPolicyUpdate {
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