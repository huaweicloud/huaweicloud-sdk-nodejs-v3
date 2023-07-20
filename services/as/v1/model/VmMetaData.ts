

export class VmMetaData {
    private 'admin_pass'?: string;
    public constructor() { 
    }
    public withAdminPass(adminPass: string): VmMetaData {
        this['admin_pass'] = adminPass;
        return this;
    }
    public set adminPass(adminPass: string  | undefined) {
        this['admin_pass'] = adminPass;
    }
    public get adminPass(): string | undefined {
        return this['admin_pass'];
    }
}