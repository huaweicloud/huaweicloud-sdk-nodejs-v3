import { StatusAttribute } from './StatusAttribute';


export class IssueStatus {
    public id?: string;
    private 'status_id'?: number;
    public name?: string;
    private 'tracker_ids'?: Array<number>;
    private 'status_attribute'?: StatusAttribute;
    public constructor() { 
    }
    public withId(id: string): IssueStatus {
        this['id'] = id;
        return this;
    }
    public withStatusId(statusId: number): IssueStatus {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: number  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): number | undefined {
        return this['status_id'];
    }
    public withName(name: string): IssueStatus {
        this['name'] = name;
        return this;
    }
    public withTrackerIds(trackerIds: Array<number>): IssueStatus {
        this['tracker_ids'] = trackerIds;
        return this;
    }
    public set trackerIds(trackerIds: Array<number>  | undefined) {
        this['tracker_ids'] = trackerIds;
    }
    public get trackerIds(): Array<number> | undefined {
        return this['tracker_ids'];
    }
    public withStatusAttribute(statusAttribute: StatusAttribute): IssueStatus {
        this['status_attribute'] = statusAttribute;
        return this;
    }
    public set statusAttribute(statusAttribute: StatusAttribute  | undefined) {
        this['status_attribute'] = statusAttribute;
    }
    public get statusAttribute(): StatusAttribute | undefined {
        return this['status_attribute'];
    }
}