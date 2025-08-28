import { ShrinkNodeReq } from './ShrinkNodeReq';


export class ShrinkClusterReq {
    public shrink?: Array<ShrinkNodeReq>;
    private 'agency_name'?: string;
    private 'operation_type'?: string;
    private 'cluster_load_check'?: boolean;
    public constructor(shrink?: Array<ShrinkNodeReq>) { 
        this['shrink'] = shrink;
    }
    public withShrink(shrink: Array<ShrinkNodeReq>): ShrinkClusterReq {
        this['shrink'] = shrink;
        return this;
    }
    public withAgencyName(agencyName: string): ShrinkClusterReq {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withOperationType(operationType: string): ShrinkClusterReq {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withClusterLoadCheck(clusterLoadCheck: boolean): ShrinkClusterReq {
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