import { HostnameConfig } from './HostnameConfig';
import { Login } from './Login';
import { NodeExtendParam } from './NodeExtendParam';
import { Runtime } from './Runtime';
import { Storage } from './Storage';
import { Volume } from './Volume';


export class NodeTemplateInHyperNode {
    public az?: string;
    public os?: string;
    public login?: Login;
    public rootVolume?: Volume;
    public dataVolumes?: Array<Volume>;
    public storage?: Storage;
    public k8sTags?: { [key: string]: string; };
    public runtime?: Runtime;
    public extendParam?: NodeExtendParam;
    public hostnameConfig?: HostnameConfig;
    public constructor() { 
    }
    public withAz(az: string): NodeTemplateInHyperNode {
        this['az'] = az;
        return this;
    }
    public withOs(os: string): NodeTemplateInHyperNode {
        this['os'] = os;
        return this;
    }
    public withLogin(login: Login): NodeTemplateInHyperNode {
        this['login'] = login;
        return this;
    }
    public withRootVolume(rootVolume: Volume): NodeTemplateInHyperNode {
        this['rootVolume'] = rootVolume;
        return this;
    }
    public withDataVolumes(dataVolumes: Array<Volume>): NodeTemplateInHyperNode {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withStorage(storage: Storage): NodeTemplateInHyperNode {
        this['storage'] = storage;
        return this;
    }
    public withK8sTags(k8sTags: { [key: string]: string; }): NodeTemplateInHyperNode {
        this['k8sTags'] = k8sTags;
        return this;
    }
    public withRuntime(runtime: Runtime): NodeTemplateInHyperNode {
        this['runtime'] = runtime;
        return this;
    }
    public withExtendParam(extendParam: NodeExtendParam): NodeTemplateInHyperNode {
        this['extendParam'] = extendParam;
        return this;
    }
    public withHostnameConfig(hostnameConfig: HostnameConfig): NodeTemplateInHyperNode {
        this['hostnameConfig'] = hostnameConfig;
        return this;
    }
}