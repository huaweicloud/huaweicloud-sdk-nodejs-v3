

export class UpdateFlavorByTypeReq {
    private 'new_flavor_id'?: string;
    private 'operation_type'?: string;
    private 'need_check_replica'?: boolean;
    private 'is_auto_pay'?: number;
    private 'need_check_cluster_status'?: boolean;
    private 'cluster_load_check'?: boolean;
    public constructor(newFlavorId?: string) { 
        this['new_flavor_id'] = newFlavorId;
    }
    public withNewFlavorId(newFlavorId: string): UpdateFlavorByTypeReq {
        this['new_flavor_id'] = newFlavorId;
        return this;
    }
    public set newFlavorId(newFlavorId: string  | undefined) {
        this['new_flavor_id'] = newFlavorId;
    }
    public get newFlavorId(): string | undefined {
        return this['new_flavor_id'];
    }
    public withOperationType(operationType: string): UpdateFlavorByTypeReq {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withNeedCheckReplica(needCheckReplica: boolean): UpdateFlavorByTypeReq {
        this['need_check_replica'] = needCheckReplica;
        return this;
    }
    public set needCheckReplica(needCheckReplica: boolean  | undefined) {
        this['need_check_replica'] = needCheckReplica;
    }
    public get needCheckReplica(): boolean | undefined {
        return this['need_check_replica'];
    }
    public withIsAutoPay(isAutoPay: number): UpdateFlavorByTypeReq {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
    public withNeedCheckClusterStatus(needCheckClusterStatus: boolean): UpdateFlavorByTypeReq {
        this['need_check_cluster_status'] = needCheckClusterStatus;
        return this;
    }
    public set needCheckClusterStatus(needCheckClusterStatus: boolean  | undefined) {
        this['need_check_cluster_status'] = needCheckClusterStatus;
    }
    public get needCheckClusterStatus(): boolean | undefined {
        return this['need_check_cluster_status'];
    }
    public withClusterLoadCheck(clusterLoadCheck: boolean): UpdateFlavorByTypeReq {
        this['cluster_load_check'] = clusterLoadCheck;
        return this;
    }
    public set clusterLoadCheck(clusterLoadCheck: boolean  | undefined) {
        this['cluster_load_check'] = clusterLoadCheck;
    }
    public get clusterLoadCheck(): boolean | undefined {
        return this['cluster_load_check'];
    }
}