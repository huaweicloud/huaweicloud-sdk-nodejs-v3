import { Login } from './Login';
import { NodeNicSpec } from './NodeNicSpec';
import { Taint } from './Taint';
import { UserTag } from './UserTag';
import { V3DataVolume } from './V3DataVolume';
import { V3NodePublicIP } from './V3NodePublicIP';
import { V3RootVolume } from './V3RootVolume';


export class V3NodeSpec {
    public az: string;
    public billingMode?: number;
    public count: number;
    public dataVolumes: Array<V3DataVolume>;
    public dedicatedHostId?: string;
    public ecsGroupId?: string;
    public extendParam?: { [key: string]: object; };
    public flavor: string;
    public k8sTags?: { [key: string]: string; };
    public login: Login;
    public nodeNicSpec?: NodeNicSpec;
    public offloadNode?: boolean;
    public os: string;
    public publicIP?: V3NodePublicIP;
    public rootVolume: V3RootVolume;
    public taints?: Array<Taint>;
    public userTags?: Array<UserTag>;
    public constructor(az?: any, count?: any, dataVolumes?: any, flavor?: any, login?: any, os?: any, rootVolume?: any) { 
        this['az'] = az;
        this['count'] = count;
        this['dataVolumes'] = dataVolumes;
        this['flavor'] = flavor;
        this['login'] = login;
        this['os'] = os;
        this['rootVolume'] = rootVolume;
    }
    public withAz(az: string): V3NodeSpec {
        this['az'] = az;
        return this;
    }
    public withBillingMode(billingMode: number): V3NodeSpec {
        this['billingMode'] = billingMode;
        return this;
    }
    public withCount(count: number): V3NodeSpec {
        this['count'] = count;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<V3DataVolume>): V3NodeSpec {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): V3NodeSpec {
        this['dedicatedHostId'] = dedicatedHostId;
        return this;
    }
    public withEcsGroupId(ecsGroupId: string): V3NodeSpec {
        this['ecsGroupId'] = ecsGroupId;
        return this;
    }
    public withExtendParam(extendParam: { [key: string]: object; }): V3NodeSpec {
        this['extendParam'] = extendParam;
        return this;
    }
    public withFlavor(flavor: string): V3NodeSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withK8sTags(k8sTags: { [key: string]: string; }): V3NodeSpec {
        this['k8sTags'] = k8sTags;
        return this;
    }
    public withLogin(login: Login): V3NodeSpec {
        this['login'] = login;
        return this;
    }
    public withNodeNicSpec(nodeNicSpec: NodeNicSpec): V3NodeSpec {
        this['nodeNicSpec'] = nodeNicSpec;
        return this;
    }
    public withOffloadNode(offloadNode: boolean): V3NodeSpec {
        this['offloadNode'] = offloadNode;
        return this;
    }
    public withOs(os: string): V3NodeSpec {
        this['os'] = os;
        return this;
    }
    public withPublicIP(publicIP: V3NodePublicIP): V3NodeSpec {
        this['publicIP'] = publicIP;
        return this;
    }
    public withRootVolume(rootVolume: V3RootVolume): V3NodeSpec {
        this['rootVolume'] = rootVolume;
        return this;
    }
    public withTaints(taints: Array<Taint>): V3NodeSpec {
        this['taints'] = taints;
        return this;
    }
    public withUserTags(userTags: Array<UserTag>): V3NodeSpec {
        this['userTags'] = userTags;
        return this;
    }
}