import { AutopilotAuthentication } from './AutopilotAuthentication';
import { AutopilotClusterExtendParam } from './AutopilotClusterExtendParam';
import { AutopilotContainerNetwork } from './AutopilotContainerNetwork';
import { AutopilotEniNetwork } from './AutopilotEniNetwork';
import { AutopilotHostNetwork } from './AutopilotHostNetwork';
import { AutopilotPackageConfiguration } from './AutopilotPackageConfiguration';
import { AutopilotResourceTag } from './AutopilotResourceTag';
import { AutopilotServiceNetwork } from './AutopilotServiceNetwork';


export class AutopilotClusterSpec {
    public category?: AutopilotClusterSpecCategoryEnum | string;
    public type?: AutopilotClusterSpecTypeEnum | string;
    public flavor?: string;
    public version?: string;
    public platformVersion?: string;
    public description?: string;
    public customSan?: Array<string>;
    public enableSnat?: boolean;
    public enableSWRImageAccess?: boolean;
    public ipv6enable?: boolean;
    public hostNetwork?: AutopilotHostNetwork;
    public containerNetwork?: AutopilotContainerNetwork;
    public eniNetwork?: AutopilotEniNetwork;
    public serviceNetwork?: AutopilotServiceNetwork;
    public authentication?: AutopilotAuthentication;
    public billingMode?: number;
    public kubernetesSvcIpRange?: string;
    public clusterTags?: Array<AutopilotResourceTag>;
    public kubeProxyMode?: AutopilotClusterSpecKubeProxyModeEnum | string;
    public az?: string;
    public extendParam?: AutopilotClusterExtendParam;
    public configurationsOverride?: Array<AutopilotPackageConfiguration>;
    public constructor(flavor?: string, hostNetwork?: AutopilotHostNetwork, containerNetwork?: AutopilotContainerNetwork) { 
        this['flavor'] = flavor;
        this['hostNetwork'] = hostNetwork;
        this['containerNetwork'] = containerNetwork;
    }
    public withCategory(category: AutopilotClusterSpecCategoryEnum | string): AutopilotClusterSpec {
        this['category'] = category;
        return this;
    }
    public withType(type: AutopilotClusterSpecTypeEnum | string): AutopilotClusterSpec {
        this['type'] = type;
        return this;
    }
    public withFlavor(flavor: string): AutopilotClusterSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withVersion(version: string): AutopilotClusterSpec {
        this['version'] = version;
        return this;
    }
    public withPlatformVersion(platformVersion: string): AutopilotClusterSpec {
        this['platformVersion'] = platformVersion;
        return this;
    }
    public withDescription(description: string): AutopilotClusterSpec {
        this['description'] = description;
        return this;
    }
    public withCustomSan(customSan: Array<string>): AutopilotClusterSpec {
        this['customSan'] = customSan;
        return this;
    }
    public withEnableSnat(enableSnat: boolean): AutopilotClusterSpec {
        this['enableSnat'] = enableSnat;
        return this;
    }
    public withEnableSWRImageAccess(enableSWRImageAccess: boolean): AutopilotClusterSpec {
        this['enableSWRImageAccess'] = enableSWRImageAccess;
        return this;
    }
    public withIpv6enable(ipv6enable: boolean): AutopilotClusterSpec {
        this['ipv6enable'] = ipv6enable;
        return this;
    }
    public withHostNetwork(hostNetwork: AutopilotHostNetwork): AutopilotClusterSpec {
        this['hostNetwork'] = hostNetwork;
        return this;
    }
    public withContainerNetwork(containerNetwork: AutopilotContainerNetwork): AutopilotClusterSpec {
        this['containerNetwork'] = containerNetwork;
        return this;
    }
    public withEniNetwork(eniNetwork: AutopilotEniNetwork): AutopilotClusterSpec {
        this['eniNetwork'] = eniNetwork;
        return this;
    }
    public withServiceNetwork(serviceNetwork: AutopilotServiceNetwork): AutopilotClusterSpec {
        this['serviceNetwork'] = serviceNetwork;
        return this;
    }
    public withAuthentication(authentication: AutopilotAuthentication): AutopilotClusterSpec {
        this['authentication'] = authentication;
        return this;
    }
    public withBillingMode(billingMode: number): AutopilotClusterSpec {
        this['billingMode'] = billingMode;
        return this;
    }
    public withKubernetesSvcIpRange(kubernetesSvcIpRange: string): AutopilotClusterSpec {
        this['kubernetesSvcIpRange'] = kubernetesSvcIpRange;
        return this;
    }
    public withClusterTags(clusterTags: Array<AutopilotResourceTag>): AutopilotClusterSpec {
        this['clusterTags'] = clusterTags;
        return this;
    }
    public withKubeProxyMode(kubeProxyMode: AutopilotClusterSpecKubeProxyModeEnum | string): AutopilotClusterSpec {
        this['kubeProxyMode'] = kubeProxyMode;
        return this;
    }
    public withAz(az: string): AutopilotClusterSpec {
        this['az'] = az;
        return this;
    }
    public withExtendParam(extendParam: AutopilotClusterExtendParam): AutopilotClusterSpec {
        this['extendParam'] = extendParam;
        return this;
    }
    public withConfigurationsOverride(configurationsOverride: Array<AutopilotPackageConfiguration>): AutopilotClusterSpec {
        this['configurationsOverride'] = configurationsOverride;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AutopilotClusterSpecCategoryEnum {
    TURBO = 'Turbo'
}
/**
    * @export
    * @enum {string}
    */
export enum AutopilotClusterSpecTypeEnum {
    VIRTUALMACHINE = 'VirtualMachine'
}
/**
    * @export
    * @enum {string}
    */
export enum AutopilotClusterSpecKubeProxyModeEnum {
    IPTABLES = 'iptables'
}
