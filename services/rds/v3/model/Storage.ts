

export class Storage {
    public name?: string;
    private 'az_status'?: { [key: string]: string; };
    private 'support_compute_group_type'?: Array<string>;
    public constructor(name?: string, azStatus?: { [key: string]: string; }) { 
        this['name'] = name;
        this['az_status'] = azStatus;
    }
    public withName(name: string): Storage {
        this['name'] = name;
        return this;
    }
    public withAzStatus(azStatus: { [key: string]: string; }): Storage {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
    public withSupportComputeGroupType(supportComputeGroupType: Array<string>): Storage {
        this['support_compute_group_type'] = supportComputeGroupType;
        return this;
    }
    public set supportComputeGroupType(supportComputeGroupType: Array<string>  | undefined) {
        this['support_compute_group_type'] = supportComputeGroupType;
    }
    public get supportComputeGroupType(): Array<string> | undefined {
        return this['support_compute_group_type'];
    }
}