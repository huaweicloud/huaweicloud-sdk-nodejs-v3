

export class NodeTemplateLoginUserPassword {
    public username?: string;
    public password?: string;
    public constructor() { 
    }
    public withUsername(username: string): NodeTemplateLoginUserPassword {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): NodeTemplateLoginUserPassword {
        this['password'] = password;
        return this;
    }
}