import { AlgorithmDetailDTO } from './AlgorithmDetailDTO';


export class DynamicMaskingPolicy {
    public id?: string;
    private 'policy_set_id'?: string;
    private 'column_name'?: string;
    private 'column_type'?: string;
    private 'algorithm_type'?: string;
    private 'sync_status'?: DynamicMaskingPolicySyncStatusEnum | string;
    private 'algorithm_detail'?: string;
    private 'algorithm_detail_dto'?: AlgorithmDetailDTO;
    public constructor() { 
    }
    public withId(id: string): DynamicMaskingPolicy {
        this['id'] = id;
        return this;
    }
    public withPolicySetId(policySetId: string): DynamicMaskingPolicy {
        this['policy_set_id'] = policySetId;
        return this;
    }
    public set policySetId(policySetId: string  | undefined) {
        this['policy_set_id'] = policySetId;
    }
    public get policySetId(): string | undefined {
        return this['policy_set_id'];
    }
    public withColumnName(columnName: string): DynamicMaskingPolicy {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnType(columnType: string): DynamicMaskingPolicy {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withAlgorithmType(algorithmType: string): DynamicMaskingPolicy {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withSyncStatus(syncStatus: DynamicMaskingPolicySyncStatusEnum | string): DynamicMaskingPolicy {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: DynamicMaskingPolicySyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): DynamicMaskingPolicySyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withAlgorithmDetail(algorithmDetail: string): DynamicMaskingPolicy {
        this['algorithm_detail'] = algorithmDetail;
        return this;
    }
    public set algorithmDetail(algorithmDetail: string  | undefined) {
        this['algorithm_detail'] = algorithmDetail;
    }
    public get algorithmDetail(): string | undefined {
        return this['algorithm_detail'];
    }
    public withAlgorithmDetailDto(algorithmDetailDto: AlgorithmDetailDTO): DynamicMaskingPolicy {
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

/**
    * @export
    * @enum {string}
    */
export enum DynamicMaskingPolicySyncStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_SYNC = 'NOT_SYNC',
    SYNCING = 'SYNCING',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    SYNC_FAIL = 'SYNC_FAIL',
    SYNC_PARTIAL_FAIL = 'SYNC_PARTIAL_FAIL',
    DELETE_FAIL = 'DELETE_FAIL',
    DELETING = 'DELETING',
    UPDATING = 'UPDATING',
    DATA_UPDATED = 'DATA_UPDATED'
}
