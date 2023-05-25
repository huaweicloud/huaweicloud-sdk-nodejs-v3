import { Login } from './Login';
import { MigrateNodeExtendParam } from './MigrateNodeExtendParam';
import { NodeItem } from './NodeItem';
import { Runtime } from './Runtime';


export class MigrateNodesSpec {
    public os: string;
    public extendParam?: MigrateNodeExtendParam;
    public login: Login;
    public runtime?: Runtime;
    public nodes: Array<NodeItem>;
    public constructor(os?: any, login?: any, nodes?: any) { 
        this['os'] = os;
        this['login'] = login;
        this['nodes'] = nodes;
    }
    public withOs(os: string): MigrateNodesSpec {
        this['os'] = os;
        return this;
    }
    public withExtendParam(extendParam: MigrateNodeExtendParam): MigrateNodesSpec {
        this['extendParam'] = extendParam;
        return this;
    }
    public withLogin(login: Login): MigrateNodesSpec {
        this['login'] = login;
        return this;
    }
    public withRuntime(runtime: Runtime): MigrateNodesSpec {
        this['runtime'] = runtime;
        return this;
    }
    public withNodes(nodes: Array<NodeItem>): MigrateNodesSpec {
        this['nodes'] = nodes;
        return this;
    }
}