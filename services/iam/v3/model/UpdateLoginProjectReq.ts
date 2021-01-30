import { UpdateLoginProject } from './UpdateLoginProject';


export class UpdateLoginProjectReq {
    private 'login_protect': UpdateLoginProject | undefined;
    public constructor(loginProtect: any) { 
        this['login_protect'] = loginProtect;
    }
    public withLoginProtect(loginProtect: UpdateLoginProject): UpdateLoginProjectReq {
        this['login_protect'] = loginProtect;
        return this;
    }
    public set loginProtect(loginProtect: UpdateLoginProject | undefined) {
        this['login_protect'] = loginProtect;
    }
    public get loginProtect() {
        return this['login_protect'];
    }
}