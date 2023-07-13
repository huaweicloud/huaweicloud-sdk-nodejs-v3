

export class AssociatePublicipsOption {
    private 'associate_instance_type': AssociatePublicipsOptionAssociateInstanceTypeEnum | undefined;
    private 'associate_instance_id': string | undefined;
    public constructor(associateInstanceType?: any, associateInstanceId?: any) { 
        this['associate_instance_type'] = associateInstanceType;
        this['associate_instance_id'] = associateInstanceId;
    }
    public withAssociateInstanceType(associateInstanceType: AssociatePublicipsOptionAssociateInstanceTypeEnum): AssociatePublicipsOption {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: AssociatePublicipsOptionAssociateInstanceTypeEnum | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType() {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): AssociatePublicipsOption {
        this['associate_instance_id'] = associateInstanceId;
        return this;
    }
    public set associateInstanceId(associateInstanceId: string | undefined) {
        this['associate_instance_id'] = associateInstanceId;
    }
    public get associateInstanceId() {
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
