import { NodeTemplateExtendParam } from './NodeTemplateExtendParam';
import { NodeTemplateLifeCycle } from './NodeTemplateLifeCycle';
import { NodeTemplateLogin } from './NodeTemplateLogin';
import { NodeTemplateRuntimeConfig } from './NodeTemplateRuntimeConfig';


export class NodeTemplate {
    public os?: string;
    public imageID?: string;
    public login?: NodeTemplateLogin;
    public lifeCycle?: NodeTemplateLifeCycle;
    public runtimeConfig?: NodeTemplateRuntimeConfig;
    public extendParam?: NodeTemplateExtendParam;
    public constructor() { 
    }
    public withOs(os: string): NodeTemplate {
        this['os'] = os;
        return this;
    }
    public withImageID(imageID: string): NodeTemplate {
        this['imageID'] = imageID;
        return this;
    }
    public withLogin(login: NodeTemplateLogin): NodeTemplate {
        this['login'] = login;
        return this;
    }
    public withLifeCycle(lifeCycle: NodeTemplateLifeCycle): NodeTemplate {
        this['lifeCycle'] = lifeCycle;
        return this;
    }
    public withRuntimeConfig(runtimeConfig: NodeTemplateRuntimeConfig): NodeTemplate {
        this['runtimeConfig'] = runtimeConfig;
        return this;
    }
    public withExtendParam(extendParam: NodeTemplateExtendParam): NodeTemplate {
        this['extendParam'] = extendParam;
        return this;
    }
}