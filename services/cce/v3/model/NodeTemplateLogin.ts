import { NodeTemplateLoginUserPassword } from './NodeTemplateLoginUserPassword';


export class NodeTemplateLogin {
    public sshKey?: string;
    public userPassword?: NodeTemplateLoginUserPassword;
    public constructor() { 
    }
    public withSshKey(sshKey: string): NodeTemplateLogin {
        this['sshKey'] = sshKey;
        return this;
    }
    public withUserPassword(userPassword: NodeTemplateLoginUserPassword): NodeTemplateLogin {
        this['userPassword'] = userPassword;
        return this;
    }
}