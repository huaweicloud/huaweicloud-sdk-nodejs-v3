import { MergeRequestsItem } from './MergeRequestsItem';


export class MergeResult {
    public closed?: number;
    private 'merge_requests'?: Array<MergeRequestsItem>;
    public merged?: number;
    public opened?: number;
    public total?: number;
    public constructor() { 
    }
    public withClosed(closed: number): MergeResult {
        this['closed'] = closed;
        return this;
    }
    public withMergeRequests(mergeRequests: Array<MergeRequestsItem>): MergeResult {
        this['merge_requests'] = mergeRequests;
        return this;
    }
    public set mergeRequests(mergeRequests: Array<MergeRequestsItem>  | undefined) {
        this['merge_requests'] = mergeRequests;
    }
    public get mergeRequests(): Array<MergeRequestsItem> | undefined {
        return this['merge_requests'];
    }
    public withMerged(merged: number): MergeResult {
        this['merged'] = merged;
        return this;
    }
    public withOpened(opened: number): MergeResult {
        this['opened'] = opened;
        return this;
    }
    public withTotal(total: number): MergeResult {
        this['total'] = total;
        return this;
    }
}