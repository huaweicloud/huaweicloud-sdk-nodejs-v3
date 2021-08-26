

export class ClusterExtendParam {
    public clusterAZ?: string;
    public dssMasterVolumes?: string;
    public enterpriseProjectId?: string;
    public kubeProxyMode?: string;
    public clusterExternalIP?: string;
    private 'alpha.cce/fixPoolMask'?: string | undefined;
    public decMasterFlavor?: string;
    public dockerUmaskMode?: string;
    private 'kubernetes.io/cpuManagerPolicy'?: string | undefined;
    public orderID?: string;
    public periodType?: string;
    public periodNum?: number;
    public isAutoRenew?: string;
    public isAutoPay?: string;
    public upgradefrom?: string;
    public constructor() { 
    }
    public withClusterAZ(clusterAZ: string): ClusterExtendParam {
        this['clusterAZ'] = clusterAZ;
        return this;
    }
    public withDssMasterVolumes(dssMasterVolumes: string): ClusterExtendParam {
        this['dssMasterVolumes'] = dssMasterVolumes;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ClusterExtendParam {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withKubeProxyMode(kubeProxyMode: string): ClusterExtendParam {
        this['kubeProxyMode'] = kubeProxyMode;
        return this;
    }
    public withClusterExternalIP(clusterExternalIP: string): ClusterExtendParam {
        this['clusterExternalIP'] = clusterExternalIP;
        return this;
    }
    public withAlphaCceFixPoolMask(alphaCceFixPoolMask: string): ClusterExtendParam {
        this['alpha.cce/fixPoolMask'] = alphaCceFixPoolMask;
        return this;
    }
    public set alphaCceFixPoolMask(alphaCceFixPoolMask: string | undefined) {
        this['alpha.cce/fixPoolMask'] = alphaCceFixPoolMask;
    }
    public get alphaCceFixPoolMask() {
        return this['alpha.cce/fixPoolMask'];
    }
    public withDecMasterFlavor(decMasterFlavor: string): ClusterExtendParam {
        this['decMasterFlavor'] = decMasterFlavor;
        return this;
    }
    public withDockerUmaskMode(dockerUmaskMode: string): ClusterExtendParam {
        this['dockerUmaskMode'] = dockerUmaskMode;
        return this;
    }
    public withKubernetesIoCpuManagerPolicy(kubernetesIoCpuManagerPolicy: string): ClusterExtendParam {
        this['kubernetes.io/cpuManagerPolicy'] = kubernetesIoCpuManagerPolicy;
        return this;
    }
    public set kubernetesIoCpuManagerPolicy(kubernetesIoCpuManagerPolicy: string | undefined) {
        this['kubernetes.io/cpuManagerPolicy'] = kubernetesIoCpuManagerPolicy;
    }
    public get kubernetesIoCpuManagerPolicy() {
        return this['kubernetes.io/cpuManagerPolicy'];
    }
    public withOrderID(orderID: string): ClusterExtendParam {
        this['orderID'] = orderID;
        return this;
    }
    public withPeriodType(periodType: string): ClusterExtendParam {
        this['periodType'] = periodType;
        return this;
    }
    public withPeriodNum(periodNum: number): ClusterExtendParam {
        this['periodNum'] = periodNum;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: string): ClusterExtendParam {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withIsAutoPay(isAutoPay: string): ClusterExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withUpgradefrom(upgradefrom: string): ClusterExtendParam {
        this['upgradefrom'] = upgradefrom;
        return this;
    }
}