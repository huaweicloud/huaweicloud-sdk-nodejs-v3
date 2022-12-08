import { BatchProfile } from './BatchProfile';


export class BatchPublicIp {
    public id?: string;
    public type: BatchPublicIpTypeEnum;
    private 'ip_version'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public tags?: Array<string>;
    public profile?: BatchProfile;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withId(id: string): BatchPublicIp {
        this['id'] = id;
        return this;
    }
    public withType(type: BatchPublicIpTypeEnum): BatchPublicIp {
        this['type'] = type;
        return this;
    }
    public withIpVersion(ipVersion: string): BatchPublicIp {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchPublicIp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<string>): BatchPublicIp {
        this['tags'] = tags;
        return this;
    }
    public withProfile(profile: BatchProfile): BatchPublicIp {
        this['profile'] = profile;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchPublicIpTypeEnum {
    E_5_BGP = '5_bgp',
    E_5_UNION = '5_union',
    E_5_SBGP = '5_sbgp'
}
