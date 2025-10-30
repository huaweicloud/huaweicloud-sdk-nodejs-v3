

export class HoneyForensicInfo {
    private 'attack_ip'?: string;
    private 'sandbox_name'?: string;
    private 'service_name'?: string;
    private 'attack_type'?: string;
    private 'attack_method_desc'?: string;
    private 'attack_desc'?: string;
    public constructor() { 
    }
    public withAttackIp(attackIp: string): HoneyForensicInfo {
        this['attack_ip'] = attackIp;
        return this;
    }
    public set attackIp(attackIp: string  | undefined) {
        this['attack_ip'] = attackIp;
    }
    public get attackIp(): string | undefined {
        return this['attack_ip'];
    }
    public withSandboxName(sandboxName: string): HoneyForensicInfo {
        this['sandbox_name'] = sandboxName;
        return this;
    }
    public set sandboxName(sandboxName: string  | undefined) {
        this['sandbox_name'] = sandboxName;
    }
    public get sandboxName(): string | undefined {
        return this['sandbox_name'];
    }
    public withServiceName(serviceName: string): HoneyForensicInfo {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withAttackType(attackType: string): HoneyForensicInfo {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: string  | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType(): string | undefined {
        return this['attack_type'];
    }
    public withAttackMethodDesc(attackMethodDesc: string): HoneyForensicInfo {
        this['attack_method_desc'] = attackMethodDesc;
        return this;
    }
    public set attackMethodDesc(attackMethodDesc: string  | undefined) {
        this['attack_method_desc'] = attackMethodDesc;
    }
    public get attackMethodDesc(): string | undefined {
        return this['attack_method_desc'];
    }
    public withAttackDesc(attackDesc: string): HoneyForensicInfo {
        this['attack_desc'] = attackDesc;
        return this;
    }
    public set attackDesc(attackDesc: string  | undefined) {
        this['attack_desc'] = attackDesc;
    }
    public get attackDesc(): string | undefined {
        return this['attack_desc'];
    }
}