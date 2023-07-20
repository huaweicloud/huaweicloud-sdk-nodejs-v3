import { VpcInfo } from './VpcInfo';


export class VpcPeering {
    public id?: string;
    public name?: string;
    public status?: VpcPeeringStatusEnum | string;
    private 'request_vpc_info'?: VpcInfo;
    private 'accept_vpc_info'?: VpcInfo;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public description?: string;
    public constructor(id?: string, name?: string, status?: string, requestVpcInfo?: VpcInfo, acceptVpcInfo?: VpcInfo, createdAt?: Date, updatedAt?: Date, description?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['request_vpc_info'] = requestVpcInfo;
        this['accept_vpc_info'] = acceptVpcInfo;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['description'] = description;
    }
    public withId(id: string): VpcPeering {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpcPeering {
        this['name'] = name;
        return this;
    }
    public withStatus(status: VpcPeeringStatusEnum | string): VpcPeering {
        this['status'] = status;
        return this;
    }
    public withRequestVpcInfo(requestVpcInfo: VpcInfo): VpcPeering {
        this['request_vpc_info'] = requestVpcInfo;
        return this;
    }
    public set requestVpcInfo(requestVpcInfo: VpcInfo  | undefined) {
        this['request_vpc_info'] = requestVpcInfo;
    }
    public get requestVpcInfo(): VpcInfo | undefined {
        return this['request_vpc_info'];
    }
    public withAcceptVpcInfo(acceptVpcInfo: VpcInfo): VpcPeering {
        this['accept_vpc_info'] = acceptVpcInfo;
        return this;
    }
    public set acceptVpcInfo(acceptVpcInfo: VpcInfo  | undefined) {
        this['accept_vpc_info'] = acceptVpcInfo;
    }
    public get acceptVpcInfo(): VpcInfo | undefined {
        return this['accept_vpc_info'];
    }
    public withCreatedAt(createdAt: Date): VpcPeering {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): VpcPeering {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDescription(description: string): VpcPeering {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcPeeringStatusEnum {
    PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE',
    REJECTED = 'REJECTED',
    EXPIRED = 'EXPIRED',
    DELETED = 'DELETED',
    ACTIVE = 'ACTIVE'
}
