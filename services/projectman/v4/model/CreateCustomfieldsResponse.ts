
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomfieldsResponse extends SdkResponse {
    public options?: string;
    public region?: string;
    public id?: number;
    public identifier?: string;
    private 'project_id'?: number;
    private 'tracker_id'?: number;
    private 'custom_field'?: string;
    public type?: string;
    public name?: string;
    public sort?: number;
    public memo?: string;
    public created?: string;
    public modified?: string;
    private 'is_delete'?: boolean;
    public constructor() { 
        super();
    }
    public withOptions(options: string): CreateCustomfieldsResponse {
        this['options'] = options;
        return this;
    }
    public withRegion(region: string): CreateCustomfieldsResponse {
        this['region'] = region;
        return this;
    }
    public withId(id: number): CreateCustomfieldsResponse {
        this['id'] = id;
        return this;
    }
    public withIdentifier(identifier: string): CreateCustomfieldsResponse {
        this['identifier'] = identifier;
        return this;
    }
    public withProjectId(projectId: number): CreateCustomfieldsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: number  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): number | undefined {
        return this['project_id'];
    }
    public withTrackerId(trackerId: number): CreateCustomfieldsResponse {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: number  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): number | undefined {
        return this['tracker_id'];
    }
    public withCustomField(customField: string): CreateCustomfieldsResponse {
        this['custom_field'] = customField;
        return this;
    }
    public set customField(customField: string  | undefined) {
        this['custom_field'] = customField;
    }
    public get customField(): string | undefined {
        return this['custom_field'];
    }
    public withType(type: string): CreateCustomfieldsResponse {
        this['type'] = type;
        return this;
    }
    public withName(name: string): CreateCustomfieldsResponse {
        this['name'] = name;
        return this;
    }
    public withSort(sort: number): CreateCustomfieldsResponse {
        this['sort'] = sort;
        return this;
    }
    public withMemo(memo: string): CreateCustomfieldsResponse {
        this['memo'] = memo;
        return this;
    }
    public withCreated(created: string): CreateCustomfieldsResponse {
        this['created'] = created;
        return this;
    }
    public withModified(modified: string): CreateCustomfieldsResponse {
        this['modified'] = modified;
        return this;
    }
    public withIsDelete(isDelete: boolean): CreateCustomfieldsResponse {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
}