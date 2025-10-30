import { SiteStatus } from './SiteStatus';


export class ListEdgeSitesRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public id?: Array<string>;
    public name?: Array<string>;
    private 'availability_zone_id'?: Array<string>;
    public status?: Array<SiteStatus>;
    public constructor() { 
    }
    public withLimit(limit: number): ListEdgeSitesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEdgeSitesRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: Array<string>): ListEdgeSitesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<string>): ListEdgeSitesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<string> | undefined {
        return this['sort_dir'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListEdgeSitesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: Array<string>): ListEdgeSitesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListEdgeSitesRequest {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZoneId(availabilityZoneId: Array<string>): ListEdgeSitesRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: Array<string>  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): Array<string> | undefined {
        return this['availability_zone_id'];
    }
    public withStatus(status: Array<SiteStatus>): ListEdgeSitesRequest {
        this['status'] = status;
        return this;
    }
}