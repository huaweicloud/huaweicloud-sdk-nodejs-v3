

export class CreateDrClusterDto {
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    public cidr?: string;
    private 'gateway_ip'?: string;
    private 'internal_ips'?: string;
    private 'private_ips'?: string;
    public endpoint?: string;
    private 'db_admin_pwd'?: string;
    private 'disaster_recovery_id'?: string;
    private 'kernel_version'?: string;
    public constructor() { 
    }
    public withClusterName(clusterName: string): CreateDrClusterDto {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): CreateDrClusterDto {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withCidr(cidr: string): CreateDrClusterDto {
        this['cidr'] = cidr;
        return this;
    }
    public withGatewayIp(gatewayIp: string): CreateDrClusterDto {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string  | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp(): string | undefined {
        return this['gateway_ip'];
    }
    public withInternalIps(internalIps: string): CreateDrClusterDto {
        this['internal_ips'] = internalIps;
        return this;
    }
    public set internalIps(internalIps: string  | undefined) {
        this['internal_ips'] = internalIps;
    }
    public get internalIps(): string | undefined {
        return this['internal_ips'];
    }
    public withPrivateIps(privateIps: string): CreateDrClusterDto {
        this['private_ips'] = privateIps;
        return this;
    }
    public set privateIps(privateIps: string  | undefined) {
        this['private_ips'] = privateIps;
    }
    public get privateIps(): string | undefined {
        return this['private_ips'];
    }
    public withEndpoint(endpoint: string): CreateDrClusterDto {
        this['endpoint'] = endpoint;
        return this;
    }
    public withDbAdminPwd(dbAdminPwd: string): CreateDrClusterDto {
        this['db_admin_pwd'] = dbAdminPwd;
        return this;
    }
    public set dbAdminPwd(dbAdminPwd: string  | undefined) {
        this['db_admin_pwd'] = dbAdminPwd;
    }
    public get dbAdminPwd(): string | undefined {
        return this['db_admin_pwd'];
    }
    public withDisasterRecoveryId(disasterRecoveryId: string): CreateDrClusterDto {
        this['disaster_recovery_id'] = disasterRecoveryId;
        return this;
    }
    public set disasterRecoveryId(disasterRecoveryId: string  | undefined) {
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public get disasterRecoveryId(): string | undefined {
        return this['disaster_recovery_id'];
    }
    public withKernelVersion(kernelVersion: string): CreateDrClusterDto {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
}