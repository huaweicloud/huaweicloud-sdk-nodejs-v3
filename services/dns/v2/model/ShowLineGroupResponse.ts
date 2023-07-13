
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLineGroupResponse extends SdkResponse {
    public name?: string;
    public lines?: Array<string>;
    public status?: string;
    public description?: string;
    private 'line_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowLineGroupResponse {
        this['name'] = name;
        return this;
    }
    public withLines(lines: Array<string>): ShowLineGroupResponse {
        this['lines'] = lines;
        return this;
    }
    public withStatus(status: string): ShowLineGroupResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ShowLineGroupResponse {
        this['description'] = description;
        return this;
    }
    public withLineId(lineId: string): ShowLineGroupResponse {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId() {
        return this['line_id'];
    }
    public withCreatedAt(createdAt: string): ShowLineGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowLineGroupResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}