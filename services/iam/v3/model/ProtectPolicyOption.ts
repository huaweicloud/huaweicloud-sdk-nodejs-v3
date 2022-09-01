import { AllowUserBody } from './AllowUserBody';


export class ProtectPolicyOption {
    private 'operation_protection': boolean | undefined;
    private 'allow_user'?: AllowUserBody | undefined;
    public mobile?: string;
    private 'admin_check'?: string | undefined;
    public email?: string;
    public scene?: string;
    public constructor(operationProtection?: any) { 
        this['operation_protection'] = operationProtection;
    }
    public withOperationProtection(operationProtection: boolean): ProtectPolicyOption {
        this['operation_protection'] = operationProtection;
        return this;
    }
    public set operationProtection(operationProtection: boolean | undefined) {
        this['operation_protection'] = operationProtection;
    }
    public get operationProtection() {
        return this['operation_protection'];
    }
    public withAllowUser(allowUser: AllowUserBody): ProtectPolicyOption {
        this['allow_user'] = allowUser;
        return this;
    }
    public set allowUser(allowUser: AllowUserBody | undefined) {
        this['allow_user'] = allowUser;
    }
    public get allowUser() {
        return this['allow_user'];
    }
    public withMobile(mobile: string): ProtectPolicyOption {
        this['mobile'] = mobile;
        return this;
    }
    public withAdminCheck(adminCheck: string): ProtectPolicyOption {
        this['admin_check'] = adminCheck;
        return this;
    }
    public set adminCheck(adminCheck: string | undefined) {
        this['admin_check'] = adminCheck;
    }
    public get adminCheck() {
        return this['admin_check'];
    }
    public withEmail(email: string): ProtectPolicyOption {
        this['email'] = email;
        return this;
    }
    public withScene(scene: string): ProtectPolicyOption {
        this['scene'] = scene;
        return this;
    }
}