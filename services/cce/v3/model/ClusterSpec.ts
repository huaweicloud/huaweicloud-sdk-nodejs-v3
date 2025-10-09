import { Authentication } from './Authentication';
import { ClusterExtendParam } from './ClusterExtendParam';
import { ClusterOps } from './ClusterOps';
import { ContainerNetwork } from './ContainerNetwork';
import { EncryptionConfig } from './EncryptionConfig';
import { EniNetwork } from './EniNetwork';
import { HostNetwork } from './HostNetwork';
import { MasterSpec } from './MasterSpec';
import { PackageConfiguration } from './PackageConfiguration';
import { ResourceTag } from './ResourceTag';
import { ServiceNetwork } from './ServiceNetwork';


export class ClusterSpec {
    public category?: ClusterSpecCategoryEnum | string;
    public type?: ClusterSpecTypeEnum | string;
    public flavor?: string;
    public version?: string;
    public platformVersion?: string;
    public legacyVersion?: string;
    public description?: string;
    public customSan?: Array<string>;
    public ipv6enable?: boolean;
    public hostNetwork?: HostNetwork;
    public containerNetwork?: ContainerNetwork;
    public eniNetwork?: EniNetwork;
    public serviceNetwork?: ServiceNetwork;
    public authentication?: Authentication;
    public billingMode?: number;
    public masters?: Array<MasterSpec>;
    public kubernetesSvcIpRange?: string;
    public clusterTags?: Array<ResourceTag>;
    public kubeProxyMode?: ClusterSpecKubeProxyModeEnum | string;
    public az?: string;
    public extendParam?: ClusterExtendParam;
    public supportIstio?: boolean;
    public enableMasterVolumeEncryption?: boolean;
    public enableDistMgt?: boolean;
    public deletionProtection?: boolean;
    public configurationsOverride?: Array<PackageConfiguration>;
    public clusterOps?: ClusterOps;
    public encryptionConfig?: EncryptionConfig;
    public constructor(flavor?: string, hostNetwork?: HostNetwork, containerNetwork?: ContainerNetwork, eniNetwork?: EniNetwork) { 
        this['flavor'] = flavor;
        this['hostNetwork'] = hostNetwork;
        this['containerNetwork'] = containerNetwork;
        this['eniNetwork'] = eniNetwork;
    }
    public withCategory(category: ClusterSpecCategoryEnum | string): ClusterSpec {
        this['category'] = category;
        return this;
    }
    public withType(type: ClusterSpecTypeEnum | string): ClusterSpec {
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
    public withLegacyVersion(legacyVersion: string): ClusterSpec {
        this['legacyVersion'] = legacyVersion;
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
    public withServiceNetwork(serviceNetwork: ServiceNetwork): ClusterSpec {
        this['serviceNetwork'] = serviceNetwork;
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
    public withKubeProxyMode(kubeProxyMode: ClusterSpecKubeProxyModeEnum | string): ClusterSpec {
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
    public withEnableMasterVolumeEncryption(enableMasterVolumeEncryption: boolean): ClusterSpec {
        this['enableMasterVolumeEncryption'] = enableMasterVolumeEncryption;
        return this;
    }
    public withEnableDistMgt(enableDistMgt: boolean): ClusterSpec {
        this['enableDistMgt'] = enableDistMgt;
        return this;
    }
    public withDeletionProtection(deletionProtection: boolean): ClusterSpec {
        this['deletionProtection'] = deletionProtection;
        return this;
    }
    public withConfigurationsOverride(configurationsOverride: Array<PackageConfiguration>): ClusterSpec {
        this['configurationsOverride'] = configurationsOverride;
        return this;
    }
    public withClusterOps(clusterOps: ClusterOps): ClusterSpec {
        this['clusterOps'] = clusterOps;
        return this;
    }
    public withEncryptionConfig(encryptionConfig: EncryptionConfig): ClusterSpec {
        this['encryptionConfig'] = encryptionConfig;
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
