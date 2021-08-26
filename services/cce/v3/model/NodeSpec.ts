import { Login } from './Login';
import { NodeExtendParam } from './NodeExtendParam';
import { NodeNicSpec } from './NodeNicSpec';
import { NodePublicIP } from './NodePublicIP';
import { Runtime } from './Runtime';
import { Storage } from './Storage';
import { Taint } from './Taint';
import { UserTag } from './UserTag';
import { Volume } from './Volume';


export class NodeSpec {
    public flavor: string;
    public az: string;
    public os?: string;
    public login: Login;
    public rootVolume: Volume;
    public dataVolumes: Array<Volume>;
    public storage?: Storage;
    public publicIP?: NodePublicIP;
    public nodeNicSpec?: NodeNicSpec;
    public count?: number;
    public billingMode?: number;
    public taints?: Array<Taint>;
    public k8sTags?: { [key: string]: string; };
    public ecsGroupId?: string;
    public dedicatedHostId?: string;
    public userTags?: Array<UserTag>;
    public runtime?: Runtime;
    public extendParam?: NodeExtendParam;
    public constructor(flavor?: any, az?: any, login?: any, rootVolume?: any, dataVolumes?: any) { 
        this['flavor'] = flavor;
        this['az'] = az;
        this['login'] = login;
        this['rootVolume'] = rootVolume;
        this['dataVolumes'] = dataVolumes;
    }
    public withFlavor(flavor: string): NodeSpec {
        this['flavor'] = flavor;
        return this;
    }
    public withAz(az: string): NodeSpec {
        this['az'] = az;
        return this;
    }
    public withOs(os: string): NodeSpec {
        this['os'] = os;
        return this;
    }
    public withLogin(login: Login): NodeSpec {
        this['login'] = login;
        return this;
    }
    public withRootVolume(rootVolume: Volume): NodeSpec {
        this['rootVolume'] = rootVolume;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<Volume>): NodeSpec {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withStorage(storage: Storage): NodeSpec {
        this['storage'] = storage;
        return this;
    }
    public withPublicIP(publicIP: NodePublicIP): NodeSpec {
        this['publicIP'] = publicIP;
        return this;
    }
    public withNodeNicSpec(nodeNicSpec: NodeNicSpec): NodeSpec {
        this['nodeNicSpec'] = nodeNicSpec;
        return this;
    }
    public withCount(count: number): NodeSpec {
        this['count'] = count;
        return this;
    }
    public withBillingMode(billingMode: number): NodeSpec {
        this['billingMode'] = billingMode;
        return this;
    }
    public withTaints(taints: Array<Taint>): NodeSpec {
        this['taints'] = taints;
        return this;
    }
    public withK8sTags(k8sTags: { [key: string]: string; }): NodeSpec {
        this['k8sTags'] = k8sTags;
        return this;
    }
    public withEcsGroupId(ecsGroupId: string): NodeSpec {
        this['ecsGroupId'] = ecsGroupId;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): NodeSpec {
        this['dedicatedHostId'] = dedicatedHostId;
        return this;
    }
    public withUserTags(userTags: Array<UserTag>): NodeSpec {
        this['userTags'] = userTags;
        return this;
    }
    public withRuntime(runtime: Runtime): NodeSpec {
        this['runtime'] = runtime;
        return this;
    }
    public withExtendParam(extendParam: NodeExtendParam): NodeSpec {
        this['extendParam'] = extendParam;
        return this;
    }
}