import { Login } from './Login';
import { NodeItem } from './NodeItem';


export class RemoveNodesSpec {
    public login: Login;
    public nodes?: Array<NodeItem>;
    public constructor(login?: any) { 
        this['login'] = login;
    }
    public withLogin(login: Login): RemoveNodesSpec {
        this['login'] = login;
        return this;
    }
    public withNodes(nodes: Array<NodeItem>): RemoveNodesSpec {
        this['nodes'] = nodes;
        return this;
    }
}