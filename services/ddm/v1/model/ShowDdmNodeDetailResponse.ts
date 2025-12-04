
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDdmNodeDetailResponse extends SdkResponse {
    public id?: string;
    private 'private_ip'?: string;
    public status?: string;
    public name?: string;
    private 'subnet_id'?: string;
    private 'az_code'?: string;
    private 'group_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDdmNodeDetailResponse {
        this['id'] = id;
        return this;
    }
    public withPrivateIp(privateIp: string): ShowDdmNodeDetailResponse {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withStatus(status: string): ShowDdmNodeDetailResponse {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ShowDdmNodeDetailResponse {
        this['name'] = name;
        return this;
    }
    public withSubnetId(subnetId: string): ShowDdmNodeDetailResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAzCode(azCode: string): ShowDdmNodeDetailResponse {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withGroupId(groupId: string): ShowDdmNodeDetailResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}