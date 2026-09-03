import { LoginInfo } from './LoginInfo';
import { LogoutInfo } from './LogoutInfo';
import { RetryLoginInfo } from './RetryLoginInfo';


export class ExecuteLoginConnectionNewRequestBody {
    public login?: LoginInfo;
    public logout?: LogoutInfo;
    private 'retry_login'?: RetryLoginInfo;
    public constructor() { 
    }
    public withLogin(login: LoginInfo): ExecuteLoginConnectionNewRequestBody {
        this['login'] = login;
        return this;
    }
    public withLogout(logout: LogoutInfo): ExecuteLoginConnectionNewRequestBody {
        this['logout'] = logout;
        return this;
    }
    public withRetryLogin(retryLogin: RetryLoginInfo): ExecuteLoginConnectionNewRequestBody {
        this['retry_login'] = retryLogin;
        return this;
    }
    public set retryLogin(retryLogin: RetryLoginInfo  | undefined) {
        this['retry_login'] = retryLogin;
    }
    public get retryLogin(): RetryLoginInfo | undefined {
        return this['retry_login'];
    }
}