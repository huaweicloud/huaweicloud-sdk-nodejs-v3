import { PolicyAction } from './PolicyAction';


export class DirectoryTraversalProtectionConfig {
    public action?: PolicyAction;
    private 'time_range'?: number;
    private 'num_requests'?: number;
    private 'not_found_status_percentage'?: number;
    private 'num_non_existent_directories'?: number;
    private 'blocking_period'?: number;
    public constructor() { 
    }
    public withAction(action: PolicyAction): DirectoryTraversalProtectionConfig {
        this['action'] = action;
        return this;
    }
    public withTimeRange(timeRange: number): DirectoryTraversalProtectionConfig {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: number  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): number | undefined {
        return this['time_range'];
    }
    public withNumRequests(numRequests: number): DirectoryTraversalProtectionConfig {
        this['num_requests'] = numRequests;
        return this;
    }
    public set numRequests(numRequests: number  | undefined) {
        this['num_requests'] = numRequests;
    }
    public get numRequests(): number | undefined {
        return this['num_requests'];
    }
    public withNotFoundStatusPercentage(notFoundStatusPercentage: number): DirectoryTraversalProtectionConfig {
        this['not_found_status_percentage'] = notFoundStatusPercentage;
        return this;
    }
    public set notFoundStatusPercentage(notFoundStatusPercentage: number  | undefined) {
        this['not_found_status_percentage'] = notFoundStatusPercentage;
    }
    public get notFoundStatusPercentage(): number | undefined {
        return this['not_found_status_percentage'];
    }
    public withNumNonExistentDirectories(numNonExistentDirectories: number): DirectoryTraversalProtectionConfig {
        this['num_non_existent_directories'] = numNonExistentDirectories;
        return this;
    }
    public set numNonExistentDirectories(numNonExistentDirectories: number  | undefined) {
        this['num_non_existent_directories'] = numNonExistentDirectories;
    }
    public get numNonExistentDirectories(): number | undefined {
        return this['num_non_existent_directories'];
    }
    public withBlockingPeriod(blockingPeriod: number): DirectoryTraversalProtectionConfig {
        this['blocking_period'] = blockingPeriod;
        return this;
    }
    public set blockingPeriod(blockingPeriod: number  | undefined) {
        this['blocking_period'] = blockingPeriod;
    }
    public get blockingPeriod(): number | undefined {
        return this['blocking_period'];
    }
}