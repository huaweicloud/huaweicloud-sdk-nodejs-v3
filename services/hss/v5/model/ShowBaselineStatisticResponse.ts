
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBaselineStatisticResponse extends SdkResponse {
    private 'host_weak_pwd'?: number;
    private 'pwd_policy'?: number;
    private 'security_check'?: number;
    public constructor() { 
        super();
    }
    public withHostWeakPwd(hostWeakPwd: number): ShowBaselineStatisticResponse {
        this['host_weak_pwd'] = hostWeakPwd;
        return this;
    }
    public set hostWeakPwd(hostWeakPwd: number  | undefined) {
        this['host_weak_pwd'] = hostWeakPwd;
    }
    public get hostWeakPwd(): number | undefined {
        return this['host_weak_pwd'];
    }
    public withPwdPolicy(pwdPolicy: number): ShowBaselineStatisticResponse {
        this['pwd_policy'] = pwdPolicy;
        return this;
    }
    public set pwdPolicy(pwdPolicy: number  | undefined) {
        this['pwd_policy'] = pwdPolicy;
    }
    public get pwdPolicy(): number | undefined {
        return this['pwd_policy'];
    }
    public withSecurityCheck(securityCheck: number): ShowBaselineStatisticResponse {
        this['security_check'] = securityCheck;
        return this;
    }
    public set securityCheck(securityCheck: number  | undefined) {
        this['security_check'] = securityCheck;
    }
    public get securityCheck(): number | undefined {
        return this['security_check'];
    }
}