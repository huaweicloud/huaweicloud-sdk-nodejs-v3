import { CentralNetworkPolicyStateEnum } from './CentralNetworkPolicyStateEnum';
import { SortDir } from './SortDir';
import { Version } from './Version';


export class ListCentralNetworkPoliciesRequest {
    private 'central_network_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: SortDir;
    public id?: Array<string>;
    public state?: Array<CentralNetworkPolicyStateEnum>;
    public version?: Array<Version>;
    private 'is_applied'?: boolean;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withCentralNetworkId(centralNetworkId: string): ListCentralNetworkPoliciesRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withLimit(limit: number): ListCentralNetworkPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworkPoliciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: string): ListCentralNetworkPoliciesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: SortDir): ListCentralNetworkPoliciesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: SortDir  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): SortDir | undefined {
        return this['sort_dir'];
    }
    public withId(id: Array<string>): ListCentralNetworkPoliciesRequest {
        this['id'] = id;
        return this;
    }
    public withState(state: Array<CentralNetworkPolicyStateEnum>): ListCentralNetworkPoliciesRequest {
        this['state'] = state;
        return this;
    }
    public withVersion(version: Array<Version>): ListCentralNetworkPoliciesRequest {
        this['version'] = version;
        return this;
    }
    public withIsApplied(isApplied: boolean): ListCentralNetworkPoliciesRequest {
        this['is_applied'] = isApplied;
        return this;
    }
    public set isApplied(isApplied: boolean  | undefined) {
        this['is_applied'] = isApplied;
    }
    public get isApplied(): boolean | undefined {
        return this['is_applied'];
    }
}