import { UserPassword } from './UserPassword';


export class Login {
    public sshKey?: string;
    public userPassword?: UserPassword;
    public removeUserPassword?: boolean;
    public removeSSHKey?: boolean;
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
    public withRemoveUserPassword(removeUserPassword: boolean): Login {
        this['removeUserPassword'] = removeUserPassword;
        return this;
    }
    public withRemoveSSHKey(removeSSHKey: boolean): Login {
        this['removeSSHKey'] = removeSSHKey;
        return this;
    }
}