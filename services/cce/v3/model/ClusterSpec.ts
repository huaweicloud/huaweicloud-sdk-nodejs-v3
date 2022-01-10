import { Authentication } from './Authentication';
import { ClusterExtendParam } from './ClusterExtendParam';
import { ContainerNetwork } from './ContainerNetwork';
import { EniNetwork } from './EniNetwork';
import { HostNetwork } from './HostNetwork';
import { MasterSpec } from './MasterSpec';
import { ResourceTag } from './ResourceTag';


export class ClusterSpec {
    public category?: ClusterSpecCategoryEnum;
    public type?: ClusterSpecTypeEnum;
    public flavor: string;
    public version?: string;
    public platformVersion?: string;
    public description?: string;
    public customSan?: Array<string>;
    public ipv6enable?: boolean;
    public hostNetwork: HostNetwork;
    public containerNetwork: ContainerNetwork;
    public eniNetwork?: EniNetwork;
    public authentication?: Authentication;
    public billingMode?: number;
    public masters?: Array<MasterSpec>;
    public kubernetesSvcIpRange?: string;
    public clusterTags?: Array<ResourceTag>;
    public kubeProxyMode?: ClusterSpecKubeProxyModeEnum;
    public az?: string;
    public extendParam?: ClusterExtendParam;
    public supportIstio?: boolean;
    public constructor(flavor?: any, hostNetwork?: any, containerNetwork?: any) { 
        this['flavor'] = flavor;
        this['hostNetwork'] = hostNetwork;
        this['containerNetwork'] = containerNetwork;
    }
    public withCategory(category: ClusterSpecCategoryEnum): ClusterSpec {
        this['category'] = category;
        return this;
    }
    public withType(type: ClusterSpecTypeEnum): ClusterSpec {
        this['type'] = type;
        return this;
    }
    public withFlavor(flavor: string): ClusterSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withVersion(version: string): ClusterSpec {
        this['version'] = version;
        return this;
    }
    public withPlatformVersion(platformVersion: string): ClusterSpec {
        this['platformVersion'] = platformVersion;
        return this;
    }
    public withDescription(description: string): ClusterSpec {
        this['description'] = description;
        return this;
    }
    public withCustomSan(customSan: Array<string>): ClusterSpec {
        this['customSan'] = customSan;
        return this;
    }
    public withIpv6enable(ipv6enable: boolean): ClusterSpec {
        this['ipv6enable'] = ipv6enable;
        return this;
    }
    public withHostNetwork(hostNetwork: HostNetwork): ClusterSpec {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
    public withContainerNetwork(containerNetwork: ContainerNetwork): ClusterSpec {
        this['containerNetwork'] = containerNetwork;
        return this;
    }
    public withEniNetwork(eniNetwork: EniNetwork): ClusterSpec {
        this['eniNetwork'] = eniNetwork;
        return this;
    }
    public withAuthentication(authentication: Authentication): ClusterSpec {
        this['authentication'] = authentication;
        return this;
    }
    public withBillingMode(billingMode: number): ClusterSpec {
        this['billingMode'] = billingMode;
        return this;
    }
    public withMasters(masters: Array<MasterSpec>): ClusterSpec {
        this['masters'] = masters;
        return this;
    }
    public withKubernetesSvcIpRange(kubernetesSvcIpRange: string): ClusterSpec {
        this['kubernetesSvcIpRange'] = kubernetesSvcIpRange;
        return this;
    }
    public withClusterTags(clusterTags: Array<ResourceTag>): ClusterSpec {
        this['clusterTags'] = clusterTags;
        return this;
    }
    public withKubeProxyMode(kubeProxyMode: ClusterSpecKubeProxyModeEnum): ClusterSpec {
        this['kubeProxyMode'] = kubeProxyMode;
        return this;
    }
    public withAz(az: string): ClusterSpec {
        this['az'] = az;
        return this;
    }
    public withExtendParam(extendParam: ClusterExtendParam): ClusterSpec {
        this['extendParam'] = extendParam;
        return this;
    }
    public withSupportIstio(supportIstio: boolean): ClusterSpec {
        this['supportIstio'] = supportIstio;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterSpecCategoryEnum {
    CCE = 'CCE',
    TURBO = 'Turbo'
}
/**
    * @export
    * @enum {string}
    */
export enum ClusterSpecTypeEnum {
    VIRTUALMACHINE = 'VirtualMachine',
    ARM64 = 'ARM64'
}
/**
    * @export
    * @enum {string}
    */
export enum ClusterSpecKubeProxyModeEnum {
    IPTABLES = 'iptables',
    IPVS = 'ipvs'
}
