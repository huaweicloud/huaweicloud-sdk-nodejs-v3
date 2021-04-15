import { UserPassword } from './UserPassword';


export class Login {
    public sshKey?: string;
    public userPassword?: UserPassword;
    public constructor() { 
    }
    public withSshKey(sshKey: string): Login {
        this['sshKey'] = sshKey;
        return this;
    }
    public withUserPassword(userPassword: UserPassword): Login {
        this['userPassword'] = userPassword;
        return this;
    }
}