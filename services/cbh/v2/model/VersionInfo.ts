

export class VersionInfo {
    private 'require_eip'?: string;
    private 'iam_login'?: string;
    private 'admin_login'?: string;
    private 'float_ipv6'?: string;
    public constructor() { 
    }
    public withRequireEip(requireEip: string): VersionInfo {
        this['require_eip'] = requireEip;
        return this;
    }
    public set requireEip(requireEip: string  | undefined) {
        this['require_eip'] = requireEip;
    }
    public get requireEip(): string | undefined {
        return this['require_eip'];
    }
    public withIamLogin(iamLogin: string): VersionInfo {
        this['iam_login'] = iamLogin;
        return this;
    }
    public set iamLogin(iamLogin: string  | undefined) {
        this['iam_login'] = iamLogin;
    }
    public get iamLogin(): string | undefined {
        return this['iam_login'];
    }
    public withAdminLogin(adminLogin: string): VersionInfo {
        this['admin_login'] = adminLogin;
        return this;
    }
    public set adminLogin(adminLogin: string  | undefined) {
        this['admin_login'] = adminLogin;
    }
    public get adminLogin(): string | undefined {
        return this['admin_login'];
    }
    public withFloatIpv6(floatIpv6: string): VersionInfo {
        this['float_ipv6'] = floatIpv6;
        return this;
    }
    public set floatIpv6(floatIpv6: string  | undefined) {
        this['float_ipv6'] = floatIpv6;
    }
    public get floatIpv6(): string | undefined {
        return this['float_ipv6'];
    }
}