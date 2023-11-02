

export class CreateResizeOrderRequestBody {
    private 'auto_open_security_group_rule'?: boolean;
    private 'execute_immediately'?: boolean;
    private 'new_capacity'?: number;
    public password?: string;
    private 'spec_code'?: string;
    public constructor() { 
    }
    public withAutoOpenSecurityGroupRule(autoOpenSecurityGroupRule: boolean): CreateResizeOrderRequestBody {
        this['auto_open_security_group_rule'] = autoOpenSecurityGroupRule;
        return this;
    }
    public set autoOpenSecurityGroupRule(autoOpenSecurityGroupRule: boolean  | undefined) {
        this['auto_open_security_group_rule'] = autoOpenSecurityGroupRule;
    }
    public get autoOpenSecurityGroupRule(): boolean | undefined {
        return this['auto_open_security_group_rule'];
    }
    public withExecuteImmediately(executeImmediately: boolean): CreateResizeOrderRequestBody {
        this['execute_immediately'] = executeImmediately;
        return this;
    }
    public set executeImmediately(executeImmediately: boolean  | undefined) {
        this['execute_immediately'] = executeImmediately;
    }
    public get executeImmediately(): boolean | undefined {
        return this['execute_immediately'];
    }
    public withNewCapacity(newCapacity: number): CreateResizeOrderRequestBody {
        this['new_capacity'] = newCapacity;
        return this;
    }
    public set newCapacity(newCapacity: number  | undefined) {
        this['new_capacity'] = newCapacity;
    }
    public get newCapacity(): number | undefined {
        return this['new_capacity'];
    }
    public withPassword(password: string): CreateResizeOrderRequestBody {
        this['password'] = password;
        return this;
    }
    public withSpecCode(specCode: string): CreateResizeOrderRequestBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}