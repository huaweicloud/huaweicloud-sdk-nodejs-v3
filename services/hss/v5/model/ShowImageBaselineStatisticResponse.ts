
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageBaselineStatisticResponse extends SdkResponse {
    private 'image_weak_pwd'?: number;
    private 'pwd_policy'?: number;
    private 'security_check'?: number;
    public constructor() { 
        super();
    }
    public withImageWeakPwd(imageWeakPwd: number): ShowImageBaselineStatisticResponse {
        this['image_weak_pwd'] = imageWeakPwd;
        return this;
    }
    public set imageWeakPwd(imageWeakPwd: number  | undefined) {
        this['image_weak_pwd'] = imageWeakPwd;
    }
    public get imageWeakPwd(): number | undefined {
        return this['image_weak_pwd'];
    }
    public withPwdPolicy(pwdPolicy: number): ShowImageBaselineStatisticResponse {
        this['pwd_policy'] = pwdPolicy;
        return this;
    }
    public set pwdPolicy(pwdPolicy: number  | undefined) {
        this['pwd_policy'] = pwdPolicy;
    }
    public get pwdPolicy(): number | undefined {
        return this['pwd_policy'];
    }
    public withSecurityCheck(securityCheck: number): ShowImageBaselineStatisticResponse {
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