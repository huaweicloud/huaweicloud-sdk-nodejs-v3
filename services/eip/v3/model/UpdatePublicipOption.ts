

export class UpdatePublicipOption {
    public alias?: string;
    public description?: string;
    private 'associate_instance_type'?: UpdatePublicipOptionAssociateInstanceTypeEnum | string;
    private 'associate_instance_id'?: string;
    public constructor() { 
    }
    public withAlias(alias: string): UpdatePublicipOption {
        this['alias'] = alias;
        return this;
    }
    public withDescription(description: string): UpdatePublicipOption {
        this['description'] = description;
        return this;
    }
    public withAssociateInstanceType(associateInstanceType: UpdatePublicipOptionAssociateInstanceTypeEnum | string): UpdatePublicipOption {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: UpdatePublicipOptionAssociateInstanceTypeEnum | string  | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType(): UpdatePublicipOptionAssociateInstanceTypeEnum | string | undefined {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): UpdatePublicipOption {
        this['associate_instance_id'] = associateInstanceId;
        return this;
    }
    public set associateInstanceId(associateInstanceId: string  | undefined) {
        this['associate_instance_id'] = associateInstanceId;
    }
    public get associateInstanceId(): string | undefined {
        return this['associate_instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePublicipOptionAssociateInstanceTypeEnum {
    PORT = 'PORT',
    NATGW = 'NATGW',
    ELB = 'ELB',
    VPN = 'VPN'
}
