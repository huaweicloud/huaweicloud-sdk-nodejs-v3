import { VpcInfo } from './VpcInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RejectVpcPeeringResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: RejectVpcPeeringResponseStatusEnum | string;
    private 'request_vpc_info'?: VpcInfo;
    private 'accept_vpc_info'?: VpcInfo;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): RejectVpcPeeringResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RejectVpcPeeringResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: RejectVpcPeeringResponseStatusEnum | string): RejectVpcPeeringResponse {
        this['status'] = status;
        return this;
    }
    public withRequestVpcInfo(requestVpcInfo: VpcInfo): RejectVpcPeeringResponse {
        this['request_vpc_info'] = requestVpcInfo;
        return this;
    }
    public set requestVpcInfo(requestVpcInfo: VpcInfo  | undefined) {
        this['request_vpc_info'] = requestVpcInfo;
    }
    public get requestVpcInfo(): VpcInfo | undefined {
        return this['request_vpc_info'];
    }
    public withAcceptVpcInfo(acceptVpcInfo: VpcInfo): RejectVpcPeeringResponse {
        this['accept_vpc_info'] = acceptVpcInfo;
        return this;
    }
    public set acceptVpcInfo(acceptVpcInfo: VpcInfo  | undefined) {
        this['accept_vpc_info'] = acceptVpcInfo;
    }
    public get acceptVpcInfo(): VpcInfo | undefined {
        return this['accept_vpc_info'];
    }
    public withCreatedAt(createdAt: Date): RejectVpcPeeringResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): RejectVpcPeeringResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDescription(description: string): RejectVpcPeeringResponse {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RejectVpcPeeringResponseStatusEnum {
    PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE',
    REJECTED = 'REJECTED',
    EXPIRED = 'EXPIRED',
    DELETED = 'DELETED',
    ACTIVE = 'ACTIVE'
}
