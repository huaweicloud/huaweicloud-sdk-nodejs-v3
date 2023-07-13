import { AllowUserBody } from './AllowUserBody';


export class ShowDomainProtectPolicyResponseBodyProtectPolicy {
    private 'allow_user': AllowUserBody | undefined;
    private 'operation_protection': boolean | undefined;
    public mobile: string;
    private 'admin_check': string | undefined;
    public email: string;
    public scene: string;
    public constructor(allowUser?: any, operationProtection?: any, mobile?: any, adminCheck?: any, email?: any, scene?: any) { 
        this['allow_user'] = allowUser;
        this['operation_protection'] = operationProtection;
        this['mobile'] = mobile;
        this['admin_check'] = adminCheck;
        this['email'] = email;
        this['scene'] = scene;
    }
    public withAllowUser(allowUser: AllowUserBody): ShowDomainProtectPolicyResponseBodyProtectPolicy {
        this['allow_user'] = allowUser;
        return this;
    }
    public set allowUser(allowUser: AllowUserBody | undefined) {
        this['allow_user'] = allowUser;
    }
    public get allowUser() {
        return this['allow_user'];
    }
    public withOperationProtection(operationProtection: boolean): ShowDomainProtectPolicyResponseBodyProtectPolicy {
        this['operation_protection'] = operationProtection;
        return this;
    }
    public set operationProtection(operationProtection: boolean | undefined) {
        this['operation_protection'] = operationProtection;
    }
    public get operationProtection() {
        return this['operation_protection'];
    }
    public withMobile(mobile: string): ShowDomainProtectPolicyResponseBodyProtectPolicy {
        this['mobile'] = mobile;
        return this;
    }
    public withAdminCheck(adminCheck: string): ShowDomainProtectPolicyResponseBodyProtectPolicy {
        this['admin_check'] = adminCheck;
        return this;
    }
    public set adminCheck(adminCheck: string | undefined) {
        this['admin_check'] = adminCheck;
    }
    public get adminCheck() {
        return this['admin_check'];
    }
    public withEmail(email: string): ShowDomainProtectPolicyResponseBodyProtectPolicy {
        this['email'] = email;
        return this;
    }
    public withScene(scene: string): ShowDomainProtectPolicyResponseBodyProtectPolicy {
        this['scene'] = scene;
        return this;
    }
}