import { CommitRepoV2 } from './CommitRepoV2';


export class AddProtectResponse {
    public name?: string;
    public commit?: CommitRepoV2;
    private 'protected'?: boolean;
    private 'developers_can_push'?: boolean;
    private 'developers_can_merge'?: boolean;
    private 'master_can_push'?: boolean;
    private 'master_can_merge'?: boolean;
    private 'no_one_can_push'?: boolean;
    private 'no_one_can_merge'?: boolean;
    private 'in_an_opened_merge_request'?: boolean;
    public constructor() { 
    }
    public withName(name: string): AddProtectResponse {
        this['name'] = name;
        return this;
    }
    public withCommit(commit: CommitRepoV2): AddProtectResponse {
        this['commit'] = commit;
        return this;
    }
    public withProtected(_protected: boolean): AddProtectResponse {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): boolean | undefined {
        return this['protected'];
    }
    public withDevelopersCanPush(developersCanPush: boolean): AddProtectResponse {
        this['developers_can_push'] = developersCanPush;
        return this;
    }
    public set developersCanPush(developersCanPush: boolean  | undefined) {
        this['developers_can_push'] = developersCanPush;
    }
    public get developersCanPush(): boolean | undefined {
        return this['developers_can_push'];
    }
    public withDevelopersCanMerge(developersCanMerge: boolean): AddProtectResponse {
        this['developers_can_merge'] = developersCanMerge;
        return this;
    }
    public set developersCanMerge(developersCanMerge: boolean  | undefined) {
        this['developers_can_merge'] = developersCanMerge;
    }
    public get developersCanMerge(): boolean | undefined {
        return this['developers_can_merge'];
    }
    public withMasterCanPush(masterCanPush: boolean): AddProtectResponse {
        this['master_can_push'] = masterCanPush;
        return this;
    }
    public set masterCanPush(masterCanPush: boolean  | undefined) {
        this['master_can_push'] = masterCanPush;
    }
    public get masterCanPush(): boolean | undefined {
        return this['master_can_push'];
    }
    public withMasterCanMerge(masterCanMerge: boolean): AddProtectResponse {
        this['master_can_merge'] = masterCanMerge;
        return this;
    }
    public set masterCanMerge(masterCanMerge: boolean  | undefined) {
        this['master_can_merge'] = masterCanMerge;
    }
    public get masterCanMerge(): boolean | undefined {
        return this['master_can_merge'];
    }
    public withNoOneCanPush(noOneCanPush: boolean): AddProtectResponse {
        this['no_one_can_push'] = noOneCanPush;
        return this;
    }
    public set noOneCanPush(noOneCanPush: boolean  | undefined) {
        this['no_one_can_push'] = noOneCanPush;
    }
    public get noOneCanPush(): boolean | undefined {
        return this['no_one_can_push'];
    }
    public withNoOneCanMerge(noOneCanMerge: boolean): AddProtectResponse {
        this['no_one_can_merge'] = noOneCanMerge;
        return this;
    }
    public set noOneCanMerge(noOneCanMerge: boolean  | undefined) {
        this['no_one_can_merge'] = noOneCanMerge;
    }
    public get noOneCanMerge(): boolean | undefined {
        return this['no_one_can_merge'];
    }
    public withInAnOpenedMergeRequest(inAnOpenedMergeRequest: boolean): AddProtectResponse {
        this['in_an_opened_merge_request'] = inAnOpenedMergeRequest;
        return this;
    }
    public set inAnOpenedMergeRequest(inAnOpenedMergeRequest: boolean  | undefined) {
        this['in_an_opened_merge_request'] = inAnOpenedMergeRequest;
    }
    public get inAnOpenedMergeRequest(): boolean | undefined {
        return this['in_an_opened_merge_request'];
    }
}