import { HostnameConfig } from './HostnameConfig';
import { Login } from './Login';
import { NodeEIPSpec } from './NodeEIPSpec';
import { NodeExtendParam } from './NodeExtendParam';
import { NodeNicSpec } from './NodeNicSpec';
import { NodeSpecNodeNameTemplate } from './NodeSpecNodeNameTemplate';
import { PackageConfiguration } from './PackageConfiguration';
import { Runtime } from './Runtime';
import { Storage } from './Storage';
import { Taint } from './Taint';
import { UserTag } from './UserTag';
import { Volume } from './Volume';


export class NodeTemplate {
    public flavor?: string;
    public az?: string;
    public os?: string;
    public login?: Login;
    public rootVolume?: Volume;
    public dataVolumes?: Array<Volume>;
    public storage?: Storage;
    public publicIP?: NodeEIPSpec;
    public nodeNicSpec?: NodeNicSpec;
    public count?: number;
    public billingMode?: NodeTemplateBillingModeEnum | number;
    public taints?: Array<Taint>;
    public waitPostInstallFinish?: boolean;
    public k8sTags?: { [key: string]: string; };
    public ecsGroupId?: string;
    public dedicatedHostId?: string;
    public userTags?: Array<UserTag>;
    public runtime?: Runtime;
    public initializedConditions?: Array<string>;
    public extendParam?: NodeExtendParam;
    public hostnameConfig?: HostnameConfig;
    public serverEnterpriseProjectID?: string;
    public partition?: string;
    public configurationsOverride?: Array<PackageConfiguration>;
    public nodeNameTemplate?: NodeSpecNodeNameTemplate;
    public constructor() { 
    }
    public withFlavor(flavor: string): NodeTemplate {
        this['flavor'] = flavor;
        return this;
    }
    public withAz(az: string): NodeTemplate {
        this['az'] = az;
        return this;
    }
    public withOs(os: string): NodeTemplate {
        this['os'] = os;
        return this;
    }
    public withLogin(login: Login): NodeTemplate {
        this['login'] = login;
        return this;
    }
    public withRootVolume(rootVolume: Volume): NodeTemplate {
        this['rootVolume'] = rootVolume;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<Volume>): NodeTemplate {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withStorage(storage: Storage): NodeTemplate {
        this['storage'] = storage;
        return this;
    }
    public withPublicIP(publicIP: NodeEIPSpec): NodeTemplate {
        this['publicIP'] = publicIP;
        return this;
    }
    public withNodeNicSpec(nodeNicSpec: NodeNicSpec): NodeTemplate {
        this['nodeNicSpec'] = nodeNicSpec;
        return this;
    }
    public withCount(count: number): NodeTemplate {
        this['count'] = count;
        return this;
    }
    public withBillingMode(billingMode: NodeTemplateBillingModeEnum | number): NodeTemplate {
        this['billingMode'] = billingMode;
        return this;
    }
    public withTaints(taints: Array<Taint>): NodeTemplate {
        this['taints'] = taints;
        return this;
    }
    public withWaitPostInstallFinish(waitPostInstallFinish: boolean): NodeTemplate {
        this['waitPostInstallFinish'] = waitPostInstallFinish;
        return this;
    }
    public withK8sTags(k8sTags: { [key: string]: string; }): NodeTemplate {
        this['k8sTags'] = k8sTags;
        return this;
    }
    public withEcsGroupId(ecsGroupId: string): NodeTemplate {
        this['ecsGroupId'] = ecsGroupId;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): NodeTemplate {
        this['dedicatedHostId'] = dedicatedHostId;
        return this;
    }
    public withUserTags(userTags: Array<UserTag>): NodeTemplate {
        this['userTags'] = userTags;
        return this;
    }
    public withRuntime(runtime: Runtime): NodeTemplate {
        this['runtime'] = runtime;
        return this;
    }
    public withInitializedConditions(initializedConditions: Array<string>): NodeTemplate {
        this['initializedConditions'] = initializedConditions;
        return this;
    }
    public withExtendParam(extendParam: NodeExtendParam): NodeTemplate {
        this['extendParam'] = extendParam;
        return this;
    }
    public withHostnameConfig(hostnameConfig: HostnameConfig): NodeTemplate {
        this['hostnameConfig'] = hostnameConfig;
        return this;
    }
    public withServerEnterpriseProjectID(serverEnterpriseProjectID: string): NodeTemplate {
        this['serverEnterpriseProjectID'] = serverEnterpriseProjectID;
        return this;
    }
    public withPartition(partition: string): NodeTemplate {
        this['partition'] = partition;
        return this;
    }
    public withConfigurationsOverride(configurationsOverride: Array<PackageConfiguration>): NodeTemplate {
        this['configurationsOverride'] = configurationsOverride;
        return this;
    }
    public withNodeNameTemplate(nodeNameTemplate: NodeSpecNodeNameTemplate): NodeTemplate {
        this['nodeNameTemplate'] = nodeNameTemplate;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeTemplateBillingModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
