

export class AccessControl {
    private 'ip_access_control'?: string;
    public constructor() { 
    }
    public withIpAccessControl(ipAccessControl: string): AccessControl {
        this['ip_access_control'] = ipAccessControl;
        return this;
    }
    public set ipAccessControl(ipAccessControl: string  | undefined) {
        this['ip_access_control'] = ipAccessControl;
    }
    public get ipAccessControl(): string | undefined {
        return this['ip_access_control'];
    }
}