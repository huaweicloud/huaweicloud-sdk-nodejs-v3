import { VpcInfo } from './VpcInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AcceptVpcPeeringResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: AcceptVpcPeeringResponseStatusEnum;
    private 'request_vpc_info'?: VpcInfo | undefined;
    private 'accept_vpc_info'?: VpcInfo | undefined;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): AcceptVpcPeeringResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AcceptVpcPeeringResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: AcceptVpcPeeringResponseStatusEnum): AcceptVpcPeeringResponse {
        this['status'] = status;
        return this;
    }
    public withRequestVpcInfo(requestVpcInfo: VpcInfo): AcceptVpcPeeringResponse {
        this['request_vpc_info'] = requestVpcInfo;
        return this;
    }
    public set requestVpcInfo(requestVpcInfo: VpcInfo | undefined) {
        this['request_vpc_info'] = requestVpcInfo;
    }
    public get requestVpcInfo() {
        return this['request_vpc_info'];
    }
    public withAcceptVpcInfo(acceptVpcInfo: VpcInfo): AcceptVpcPeeringResponse {
        this['accept_vpc_info'] = acceptVpcInfo;
        return this;
    }
    public set acceptVpcInfo(acceptVpcInfo: VpcInfo | undefined) {
        this['accept_vpc_info'] = acceptVpcInfo;
    }
    public get acceptVpcInfo() {
        return this['accept_vpc_info'];
    }
    public withCreatedAt(createdAt: Date): AcceptVpcPeeringResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): AcceptVpcPeeringResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withDescription(description: string): AcceptVpcPeeringResponse {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AcceptVpcPeeringResponseStatusEnum {
    PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE',
    REJECTED = 'REJECTED',
    EXPIRED = 'EXPIRED',
    DELETED = 'DELETED',
    ACTIVE = 'ACTIVE'
}
