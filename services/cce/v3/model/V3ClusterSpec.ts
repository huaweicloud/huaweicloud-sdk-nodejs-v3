import { Authentication } from './Authentication';
import { ClusterExtendParam } from './ClusterExtendParam';
import { ContainerNetwork } from './ContainerNetwork';
import { EniNetwork } from './EniNetwork';
import { HostNetwork } from './HostNetwork';
import { MasterSpec } from './MasterSpec';
import { ResourceTag } from './ResourceTag';


export class V3ClusterSpec {
    public type: V3ClusterSpecTypeEnum;
    public flavor: string;
    public version?: string;
    public description?: string;
    public ipv6enable?: boolean;
    public hostNetwork: HostNetwork;
    public containerNetwork: ContainerNetwork;
    public eniNetwork?: EniNetwork;
    public authentication?: Authentication;
    public billingMode?: number;
    public masters?: Array<MasterSpec>;
    public kubernetesSvcIpRange?: string;
    public clusterTags?: Array<ResourceTag>;
    public kubeProxyMode?: V3ClusterSpecKubeProxyModeEnum;
    public az?: string;
    public extendParam?: ClusterExtendParam;
    public supportIstio?: boolean;
    public constructor(type?: any, flavor?: any, hostNetwork?: any, containerNetwork?: any) { 
        this['type'] = type;
        this['flavor'] = flavor;
        this['hostNetwork'] = hostNetwork;
        this['containerNetwork'] = containerNetwork;
    }
    public withType(type: V3ClusterSpecTypeEnum): V3ClusterSpec {
        this['type'] = type;
        return this;
    }
    public withFlavor(flavor: string): V3ClusterSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withVersion(version: string): V3ClusterSpec {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): V3ClusterSpec {
        this['description'] = description;
        return this;
    }
    public withIpv6enable(ipv6enable: boolean): V3ClusterSpec {
        this['ipv6enable'] = ipv6enable;
        return this;
    }
    public withHostNetwork(hostNetwork: HostNetwork): V3ClusterSpec {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
    public withContainerNetwork(containerNetwork: ContainerNetwork): V3ClusterSpec {
        this['containerNetwork'] = containerNetwork;
        return this;
    }
    public withEniNetwork(eniNetwork: EniNetwork): V3ClusterSpec {
        this['eniNetwork'] = eniNetwork;
        return this;
    }
    public withAuthentication(authentication: Authentication): V3ClusterSpec {
        this['authentication'] = authentication;
        return this;
    }
    public withBillingMode(billingMode: number): V3ClusterSpec {
        this['billingMode'] = billingMode;
        return this;
    }
    public withMasters(masters: Array<MasterSpec>): V3ClusterSpec {
        this['masters'] = masters;
        return this;
    }
    public withKubernetesSvcIpRange(kubernetesSvcIpRange: string): V3ClusterSpec {
        this['kubernetesSvcIpRange'] = kubernetesSvcIpRange;
        return this;
    }
    public withClusterTags(clusterTags: Array<ResourceTag>): V3ClusterSpec {
        this['clusterTags'] = clusterTags;
        return this;
    }
    public withKubeProxyMode(kubeProxyMode: V3ClusterSpecKubeProxyModeEnum): V3ClusterSpec {
        this['kubeProxyMode'] = kubeProxyMode;
        return this;
    }
    public withAz(az: string): V3ClusterSpec {
        this['az'] = az;
        return this;
    }
    public withExtendParam(extendParam: ClusterExtendParam): V3ClusterSpec {
        this['extendParam'] = extendParam;
        return this;
    }
    public withSupportIstio(supportIstio: boolean): V3ClusterSpec {
        this['supportIstio'] = supportIstio;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum V3ClusterSpecTypeEnum {
    VIRTUALMACHINE = 'VirtualMachine',
    ARM64 = 'ARM64'
}
/**
    * @export
    * @enum {string}
    */
export enum V3ClusterSpecKubeProxyModeEnum {
    IPTABLES = 'iptables',
    IPVS = 'ipvs'
}
