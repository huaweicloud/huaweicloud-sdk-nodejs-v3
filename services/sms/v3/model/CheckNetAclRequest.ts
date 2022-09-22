

export class CheckNetAclRequest {
    private 't_project_id': string | undefined;
    private 't_network_id': string | undefined;
    private 'region_id': string | undefined;
    private 'os_type': string | undefined;
    public constructor(tProjectId?: any, tNetworkId?: any, regionId?: any, osType?: any) { 
        this['t_project_id'] = tProjectId;
        this['t_network_id'] = tNetworkId;
        this['region_id'] = regionId;
        this['os_type'] = osType;
    }
    public withTProjectId(tProjectId: string): CheckNetAclRequest {
        this['t_project_id'] = tProjectId;
        return this;
    }
    public set tProjectId(tProjectId: string | undefined) {
        this['t_project_id'] = tProjectId;
    }
    public get tProjectId() {
        return this['t_project_id'];
    }
    public withTNetworkId(tNetworkId: string): CheckNetAclRequest {
        this['t_network_id'] = tNetworkId;
        return this;
    }
    public set tNetworkId(tNetworkId: string | undefined) {
        this['t_network_id'] = tNetworkId;
    }
    public get tNetworkId() {
        return this['t_network_id'];
    }
    public withRegionId(regionId: string): CheckNetAclRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withOsType(osType: string): CheckNetAclRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
}