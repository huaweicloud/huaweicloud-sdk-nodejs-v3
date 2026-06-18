

export class BatchResizeFlavorRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'spec_code'?: string;
    public delay?: boolean;
    private 'auto_pay'?: boolean;
    private 'occupy_ip'?: boolean;
    public constructor(instanceIds?: Array<string>, specCode?: string) { 
        this['instance_ids'] = instanceIds;
        this['spec_code'] = specCode;
    }
    public withInstanceIds(instanceIds: Array<string>): BatchResizeFlavorRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withSpecCode(specCode: string): BatchResizeFlavorRequestBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withDelay(delay: boolean): BatchResizeFlavorRequestBody {
        this['delay'] = delay;
        return this;
    }
    public withAutoPay(autoPay: boolean): BatchResizeFlavorRequestBody {
        this['auto_pay'] = autoPay;
        return this;
    }
    public set autoPay(autoPay: boolean  | undefined) {
        this['auto_pay'] = autoPay;
    }
    public get autoPay(): boolean | undefined {
        return this['auto_pay'];
    }
    public withOccupyIp(occupyIp: boolean): BatchResizeFlavorRequestBody {
        this['occupy_ip'] = occupyIp;
        return this;
    }
    public set occupyIp(occupyIp: boolean  | undefined) {
        this['occupy_ip'] = occupyIp;
    }
    public get occupyIp(): boolean | undefined {
        return this['occupy_ip'];
    }
}