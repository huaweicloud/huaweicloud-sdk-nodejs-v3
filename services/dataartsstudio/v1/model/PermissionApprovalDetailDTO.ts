import { PermissionApprovalDetailDTOPermissions } from './PermissionApprovalDetailDTOPermissions';
import { PermissionApprovalDetailDTOProposers } from './PermissionApprovalDetailDTOProposers';


export class PermissionApprovalDetailDTO {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'datasource_type'?: PermissionApprovalDetailDTODatasourceTypeEnum | string;
    private 'expire_time'?: number;
    public permissions?: Array<PermissionApprovalDetailDTOPermissions>;
    public proposers?: Array<PermissionApprovalDetailDTOProposers>;
    public constructor() { 
    }
    public withClusterId(clusterId: string): PermissionApprovalDetailDTO {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): PermissionApprovalDetailDTO {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatasourceType(datasourceType: PermissionApprovalDetailDTODatasourceTypeEnum | string): PermissionApprovalDetailDTO {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: PermissionApprovalDetailDTODatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): PermissionApprovalDetailDTODatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withExpireTime(expireTime: number): PermissionApprovalDetailDTO {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withPermissions(permissions: Array<PermissionApprovalDetailDTOPermissions>): PermissionApprovalDetailDTO {
        this['permissions'] = permissions;
        return this;
    }
    public withProposers(proposers: Array<PermissionApprovalDetailDTOProposers>): PermissionApprovalDetailDTO {
        this['proposers'] = proposers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionApprovalDetailDTODatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
