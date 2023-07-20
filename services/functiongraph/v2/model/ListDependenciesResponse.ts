import { ListDependenciesResult } from './ListDependenciesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDependenciesResponse extends SdkResponse {
    public dependencies?: Array<ListDependenciesResult>;
    private 'next_marker'?: number;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDependencies(dependencies: Array<ListDependenciesResult>): ListDependenciesResponse {
        this['dependencies'] = dependencies;
        return this;
    }
    public withNextMarker(nextMarker: number): ListDependenciesResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): number | undefined {
        return this['next_marker'];
    }
    public withCount(count: number): ListDependenciesResponse {
        this['count'] = count;
        return this;
    }
}