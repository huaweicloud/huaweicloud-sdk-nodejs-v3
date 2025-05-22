import { Login } from './Login';
import { NodePoolUpdateExtendParam } from './NodePoolUpdateExtendParam';
import { NodeSpecUpdateNodeNameTemplate } from './NodeSpecUpdateNodeNameTemplate';
import { NodeSpecUpdateNodeNicSpecUpdate } from './NodeSpecUpdateNodeNicSpecUpdate';
import { Runtime } from './Runtime';
import { Storage } from './Storage';
import { Taint } from './Taint';
import { UserTag } from './UserTag';
import { Volume } from './Volume';


export class NodeSpecUpdate {
    public flavor?: string;
    public os?: string;
    public login?: Login;
    public rootVolumeUpdate?: Volume;
    public dataVolumesUpdate?: Array<Volume>;
    public storage?: Storage;
    public runtime?: Runtime;
    public taints?: Array<Taint>;
    public k8sTags?: { [key: string]: string; };
    public ecsGroupId?: string;
    public userTags?: Array<UserTag>;
    public nodeNameTemplate?: NodeSpecUpdateNodeNameTemplate;
    public initializedConditions?: Array<string>;
    public serverEnterpriseProjectID?: string;
    public nodeNicSpecUpdate?: NodeSpecUpdateNodeNicSpecUpdate;
    public extendParam?: NodePoolUpdateExtendParam;
    public constructor(taints?: Array<Taint>, k8sTags?: { [key: string]: string; }, userTags?: Array<UserTag>) { 
        this['taints'] = taints;
        this['k8sTags'] = k8sTags;
        this['userTags'] = userTags;
    }
    public withFlavor(flavor: string): NodeSpecUpdate {
        this['flavor'] = flavor;
        return this;
    }
    public withOs(os: string): NodeSpecUpdate {
        this['os'] = os;
        return this;
    }
    public withLogin(login: Login): NodeSpecUpdate {
        this['login'] = login;
        return this;
    }
    public withRootVolumeUpdate(rootVolumeUpdate: Volume): NodeSpecUpdate {
        this['rootVolumeUpdate'] = rootVolumeUpdate;
        return this;
    }
    public withDataVolumesUpdate(dataVolumesUpdate: Array<Volume>): NodeSpecUpdate {
        this['dataVolumesUpdate'] = dataVolumesUpdate;
        return this;
    }
    public withStorage(storage: Storage): NodeSpecUpdate {
        this['storage'] = storage;
        return this;
    }
    public withRuntime(runtime: Runtime): NodeSpecUpdate {
        this['runtime'] = runtime;
        return this;
    }
    public withTaints(taints: Array<Taint>): NodeSpecUpdate {
        this['taints'] = taints;
        return this;
    }
    public withK8sTags(k8sTags: { [key: string]: string; }): NodeSpecUpdate {
        this['k8sTags'] = k8sTags;
        return this;
    }
    public withEcsGroupId(ecsGroupId: string): NodeSpecUpdate {
        this['ecsGroupId'] = ecsGroupId;
        return this;
    }
    public withUserTags(userTags: Array<UserTag>): NodeSpecUpdate {
        this['userTags'] = userTags;
        return this;
    }
    public withNodeNameTemplate(nodeNameTemplate: NodeSpecUpdateNodeNameTemplate): NodeSpecUpdate {
        this['nodeNameTemplate'] = nodeNameTemplate;
        return this;
    }
    public withInitializedConditions(initializedConditions: Array<string>): NodeSpecUpdate {
        this['initializedConditions'] = initializedConditions;
        return this;
    }
    public withServerEnterpriseProjectID(serverEnterpriseProjectID: string): NodeSpecUpdate {
        this['serverEnterpriseProjectID'] = serverEnterpriseProjectID;
        return this;
    }
    public withNodeNicSpecUpdate(nodeNicSpecUpdate: NodeSpecUpdateNodeNicSpecUpdate): NodeSpecUpdate {
        this['nodeNicSpecUpdate'] = nodeNicSpecUpdate;
        return this;
    }
    public withExtendParam(extendParam: NodePoolUpdateExtendParam): NodeSpecUpdate {
        this['extendParam'] = extendParam;
        return this;
    }
}