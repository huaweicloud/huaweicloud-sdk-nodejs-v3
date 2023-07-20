import { AllowUserBody } from './AllowUserBody';


export class UpdateDomainProtectPolicyResponseBodyProtectPolicy {
    private 'allow_user'?: AllowUserBody;
    private 'operation_protection'?: boolean;
    private 'admin_check'?: string;
    public scene?: string;
    public constructor(allowUser?: AllowUserBody, operationProtection?: boolean, adminCheck?: string, scene?: string) { 
        this['allow_user'] = allowUser;
        this['operation_protection'] = operationProtection;
        this['admin_check'] = adminCheck;
        this['scene'] = scene;
    }
    public withAllowUser(allowUser: AllowUserBody): UpdateDomainProtectPolicyResponseBodyProtectPolicy {
        this['allow_user'] = allowUser;
        return this;
    }
    public set allowUser(allowUser: AllowUserBody  | undefined) {
        this['allow_user'] = allowUser;
    }
    public get allowUser(): AllowUserBody | undefined {
        return this['allow_user'];
    }
    public withOperationProtection(operationProtection: boolean): UpdateDomainProtectPolicyResponseBodyProtectPolicy {
        this['operation_protection'] = operationProtection;
        return this;
    }
    public set operationProtection(operationProtection: boolean  | undefined) {
        this['operation_protection'] = operationProtection;
    }
    public get operationProtection(): boolean | undefined {
        return this['operation_protection'];
    }
    public withAdminCheck(adminCheck: string): UpdateDomainProtectPolicyResponseBodyProtectPolicy {
        this['admin_check'] = adminCheck;
        return this;
    }
    public set adminCheck(adminCheck: string  | undefined) {
        this['admin_check'] = adminCheck;
    }
    public get adminCheck(): string | undefined {
        return this['admin_check'];
    }
    public withScene(scene: string): UpdateDomainProtectPolicyResponseBodyProtectPolicy {
        this['scene'] = scene;
        return this;
    }
}