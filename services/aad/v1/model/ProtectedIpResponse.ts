import { IpStatusDetail } from './IpStatusDetail';


export class ProtectedIpResponse {
    public id?: string;
    public ip?: string;
    public type?: ProtectedIpResponseTypeEnum | string;
    public name?: string;
    public status?: number;
    private 'status_detail'?: IpStatusDetail;
    private 'policy_name'?: string;
    public region?: string;
    private 'package_id'?: string;
    private 'package_name'?: string;
    public tags?: string;
    public tag?: string;
    private 'is_resale'?: boolean;
    private 'package_version'?: ProtectedIpResponsePackageVersionEnum | string;
    public constructor(id?: string, ip?: string, type?: string, status?: number, policyName?: string, region?: string, packageId?: string, packageName?: string, isResale?: boolean, packageVersion?: string) { 
        this['id'] = id;
        this['ip'] = ip;
        this['type'] = type;
        this['status'] = status;
        this['policy_name'] = policyName;
        this['region'] = region;
        this['package_id'] = packageId;
        this['package_name'] = packageName;
        this['is_resale'] = isResale;
        this['package_version'] = packageVersion;
    }
    public withId(id: string): ProtectedIpResponse {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): ProtectedIpResponse {
        this['ip'] = ip;
        return this;
    }
    public withType(type: ProtectedIpResponseTypeEnum | string): ProtectedIpResponse {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ProtectedIpResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: number): ProtectedIpResponse {
        this['status'] = status;
        return this;
    }
    public withStatusDetail(statusDetail: IpStatusDetail): ProtectedIpResponse {
        this['status_detail'] = statusDetail;
        return this;
    }
    public set statusDetail(statusDetail: IpStatusDetail  | undefined) {
        this['status_detail'] = statusDetail;
    }
    public get statusDetail(): IpStatusDetail | undefined {
        return this['status_detail'];
    }
    public withPolicyName(policyName: string): ProtectedIpResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withRegion(region: string): ProtectedIpResponse {
        this['region'] = region;
        return this;
    }
    public withPackageId(packageId: string): ProtectedIpResponse {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withPackageName(packageName: string): ProtectedIpResponse {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withTags(tags: string): ProtectedIpResponse {
        this['tags'] = tags;
        return this;
    }
    public withTag(tag: string): ProtectedIpResponse {
        this['tag'] = tag;
        return this;
    }
    public withIsResale(isResale: boolean): ProtectedIpResponse {
        this['is_resale'] = isResale;
        return this;
    }
    public set isResale(isResale: boolean  | undefined) {
        this['is_resale'] = isResale;
    }
    public get isResale(): boolean | undefined {
        return this['is_resale'];
    }
    public withPackageVersion(packageVersion: ProtectedIpResponsePackageVersionEnum | string): ProtectedIpResponse {
        this['package_version'] = packageVersion;
        return this;
    }
    public set packageVersion(packageVersion: ProtectedIpResponsePackageVersionEnum | string  | undefined) {
        this['package_version'] = packageVersion;
    }
    public get packageVersion(): ProtectedIpResponsePackageVersionEnum | string | undefined {
        return this['package_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProtectedIpResponseTypeEnum {
    VPN = 'VPN',
    NAT = 'NAT',
    VIP = 'VIP',
    CCI = 'CCI',
    EIP = 'EIP',
    ELB = 'ELB',
    REROUTING_IP = 'REROUTING_IP',
    SUBENI = 'SubEni',
    NETINTERFACE = 'NetInterFace'
}
/**
    * @export
    * @enum {string}
    */
export enum ProtectedIpResponsePackageVersionEnum {
    CNAD_PRO = 'cnad_pro',
    CNAD_IP = 'cnad_ip',
    CNAD_EP = 'cnad_ep',
    CNAD_FULL_HIGH = 'cnad_full_high',
    CNAD_VIC = 'cnad_vic',
    CNAD_INTL_EP = 'cnad_intl_ep'
}
