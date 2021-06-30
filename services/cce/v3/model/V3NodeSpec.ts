import { Login } from './Login';
import { NodeExtendParam } from './NodeExtendParam';
import { NodeNicSpec } from './NodeNicSpec';
import { Runtime } from './Runtime';
import { Taint } from './Taint';
import { UserTag } from './UserTag';
import { V3NodePublicIP } from './V3NodePublicIP';
import { Volume } from './Volume';


export class V3NodeSpec {
    public flavor: string;
    public az: string;
    public os?: string;
    public login: Login;
    public rootVolume: Volume;
    public dataVolumes: Array<Volume>;
    public publicIP?: V3NodePublicIP;
    public nodeNicSpec?: NodeNicSpec;
    public count: number;
    public billingMode?: number;
    public taints?: Array<Taint>;
    public k8sTags?: { [key: string]: string; };
    public ecsGroupId?: string;
    public dedicatedHostId?: string;
    public offloadNode?: boolean;
    public userTags?: Array<UserTag>;
    public runtime?: Runtime;
    public extendParam?: NodeExtendParam;
    public constructor(flavor?: any, az?: any, login?: any, rootVolume?: any, dataVolumes?: any, count?: any) { 
        this['flavor'] = flavor;
        this['az'] = az;
        this['login'] = login;
        this['rootVolume'] = rootVolume;
        this['dataVolumes'] = dataVolumes;
        this['count'] = count;
    }
    public withFlavor(flavor: string): V3NodeSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withAz(az: string): V3NodeSpec {
        this['az'] = az;
        return this;
    }
    public withOs(os: string): V3NodeSpec {
        this['os'] = os;
        return this;
    }
    public withLogin(login: Login): V3NodeSpec {
        this['login'] = login;
        return this;
    }
    public withRootVolume(rootVolume: Volume): V3NodeSpec {
        this['rootVolume'] = rootVolume;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<Volume>): V3NodeSpec {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withPublicIP(publicIP: V3NodePublicIP): V3NodeSpec {
        this['publicIP'] = publicIP;
        return this;
    }
    public withNodeNicSpec(nodeNicSpec: NodeNicSpec): V3NodeSpec {
        this['nodeNicSpec'] = nodeNicSpec;
        return this;
    }
    public withCount(count: number): V3NodeSpec {
        this['count'] = count;
        return this;
    }
    public withBillingMode(billingMode: number): V3NodeSpec {
        this['billingMode'] = billingMode;
        return this;
    }
    public withTaints(taints: Array<Taint>): V3NodeSpec {
        this['taints'] = taints;
        return this;
    }
    public withK8sTags(k8sTags: { [key: string]: string; }): V3NodeSpec {
        this['k8sTags'] = k8sTags;
        return this;
    }
    public withEcsGroupId(ecsGroupId: string): V3NodeSpec {
        this['ecsGroupId'] = ecsGroupId;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): V3NodeSpec {
        this['dedicatedHostId'] = dedicatedHostId;
        return this;
    }
    public withOffloadNode(offloadNode: boolean): V3NodeSpec {
        this['offloadNode'] = offloadNode;
        return this;
    }
    public withUserTags(userTags: Array<UserTag>): V3NodeSpec {
        this['userTags'] = userTags;
        return this;
    }
    public withRuntime(runtime: Runtime): V3NodeSpec {
        this['runtime'] = runtime;
        return this;
    }
    public withExtendParam(extendParam: NodeExtendParam): V3NodeSpec {
        this['extendParam'] = extendParam;
        return this;
    }
}