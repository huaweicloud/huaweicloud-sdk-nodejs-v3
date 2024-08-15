import { SysTags } from './SysTags';


export class CdmClusterEnterpriseProject {
    private 'cluster_id'?: string;
    private 'sys_tags'?: Array<SysTags>;
    public constructor() { 
    }
    public withClusterId(clusterId: string): CdmClusterEnterpriseProject {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withSysTags(sysTags: Array<SysTags>): CdmClusterEnterpriseProject {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTags> | undefined {
        return this['sys_tags'];
    }
}