import { Resource } from './Resource';


export class OpExtendInfoRemoveResources {
    private 'fail_count'?: number | undefined;
    private 'total_count'?: number | undefined;
    public resources?: Array<Resource>;
    public constructor() { 
    }
    public withFailCount(failCount: number): OpExtendInfoRemoveResources {
        this['fail_count'] = failCount;
        return this;
    }
    public set failCount(failCount: number | undefined) {
        this['fail_count'] = failCount;
    }
    public get failCount() {
        return this['fail_count'];
    }
    public withTotalCount(totalCount: number): OpExtendInfoRemoveResources {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
    public withResources(resources: Array<Resource>): OpExtendInfoRemoveResources {
        this['resources'] = resources;
        return this;
    }
}