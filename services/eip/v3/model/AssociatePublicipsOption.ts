

export class AssociatePublicipsOption {
    private 'associate_instance_type'?: AssociatePublicipsOptionAssociateInstanceTypeEnum | string;
    private 'associate_instance_id'?: string;
    public constructor(associateInstanceType?: string, associateInstanceId?: string) { 
        this['associate_instance_type'] = associateInstanceType;
        this['associate_instance_id'] = associateInstanceId;
    }
    public withAssociateInstanceType(associateInstanceType: AssociatePublicipsOptionAssociateInstanceTypeEnum | string): AssociatePublicipsOption {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: AssociatePublicipsOptionAssociateInstanceTypeEnum | string  | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType(): AssociatePublicipsOptionAssociateInstanceTypeEnum | string | undefined {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): AssociatePublicipsOption {
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
export enum AssociatePublicipsOptionAssociateInstanceTypeEnum {
    PORT = 'PORT',
    NATGW = 'NATGW',
    VPN = 'VPN',
    ELB = 'ELB'
}
