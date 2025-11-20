

export class MigrateDnInfoOpenResponse {
    private 'dn_instance_id'?: string;
    private 'dn_instance_name'?: string;
    public constructor() { 
    }
    public withDnInstanceId(dnInstanceId: string): MigrateDnInfoOpenResponse {
        this['dn_instance_id'] = dnInstanceId;
        return this;
    }
    public set dnInstanceId(dnInstanceId: string  | undefined) {
        this['dn_instance_id'] = dnInstanceId;
    }
    public get dnInstanceId(): string | undefined {
        return this['dn_instance_id'];
    }
    public withDnInstanceName(dnInstanceName: string): MigrateDnInfoOpenResponse {
        this['dn_instance_name'] = dnInstanceName;
        return this;
    }
    public set dnInstanceName(dnInstanceName: string  | undefined) {
        this['dn_instance_name'] = dnInstanceName;
    }
    public get dnInstanceName(): string | undefined {
        return this['dn_instance_name'];
    }
}