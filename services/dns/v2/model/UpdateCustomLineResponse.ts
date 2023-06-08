
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCustomLineResponse extends SdkResponse {
    private 'line_id'?: string | undefined;
    public name?: string;
    private 'ip_segments'?: Array<string> | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public status?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withLineId(lineId: string): UpdateCustomLineResponse {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId() {
        return this['line_id'];
    }
    public withName(name: string): UpdateCustomLineResponse {
        this['name'] = name;
        return this;
    }
    public withIpSegments(ipSegments: Array<string>): UpdateCustomLineResponse {
        this['ip_segments'] = ipSegments;
        return this;
    }
    public set ipSegments(ipSegments: Array<string> | undefined) {
        this['ip_segments'] = ipSegments;
    }
    public get ipSegments() {
        return this['ip_segments'];
    }
    public withCreatedAt(createdAt: string): UpdateCustomLineResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateCustomLineResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withStatus(status: string): UpdateCustomLineResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): UpdateCustomLineResponse {
        this['description'] = description;
        return this;
    }
}