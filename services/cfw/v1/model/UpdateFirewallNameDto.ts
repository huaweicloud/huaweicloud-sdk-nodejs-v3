

export class UpdateFirewallNameDto {
    private 'fw_instance_name'?: string;
    public constructor(fwInstanceName?: string) { 
        this['fw_instance_name'] = fwInstanceName;
    }
    public withFwInstanceName(fwInstanceName: string): UpdateFirewallNameDto {
        this['fw_instance_name'] = fwInstanceName;
        return this;
    }
    public set fwInstanceName(fwInstanceName: string  | undefined) {
        this['fw_instance_name'] = fwInstanceName;
    }
    public get fwInstanceName(): string | undefined {
        return this['fw_instance_name'];
    }
}