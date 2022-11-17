

export class DisassociatePublicipsOption {
    private 'associate_instance_type'?: DisassociatePublicipsOptionAssociateInstanceTypeEnum | undefined;
    private 'associate_instance_id'?: string | undefined;
    public constructor() { 
    }
    public withAssociateInstanceType(associateInstanceType: DisassociatePublicipsOptionAssociateInstanceTypeEnum): DisassociatePublicipsOption {
        this['associate_instance_type'] = associateInstanceType;
        return this;
    }
    public set associateInstanceType(associateInstanceType: DisassociatePublicipsOptionAssociateInstanceTypeEnum | undefined) {
        this['associate_instance_type'] = associateInstanceType;
    }
    public get associateInstanceType() {
        return this['associate_instance_type'];
    }
    public withAssociateInstanceId(associateInstanceId: string): DisassociatePublicipsOption {
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
export enum DisassociatePublicipsOptionAssociateInstanceTypeEnum {
    PORT = 'PORT',
    NATGW = 'NATGW',
    VPN = 'VPN',
    ELB = 'ELB',
    Empty = ''
}
