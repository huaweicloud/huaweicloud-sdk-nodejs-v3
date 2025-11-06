import { CommitDto } from './CommitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBranchResponse extends SdkResponse {
    public name?: string;
    public commit?: CommitDto;
    public merged?: boolean;
    private 'protected'?: boolean;
    private 'developers_can_push'?: boolean;
    private 'developers_can_merge'?: boolean;
    private 'can_push'?: boolean;
    private 'default'?: boolean;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowBranchResponse {
        this['name'] = name;
        return this;
    }
    public withCommit(commit: CommitDto): ShowBranchResponse {
        this['commit'] = commit;
        return this;
    }
    public withMerged(merged: boolean): ShowBranchResponse {
        this['merged'] = merged;
        return this;
    }
    public withProtected(_protected: boolean): ShowBranchResponse {
        this['protected'] = _protected;
        return this;
    }
    public set _protected(_protected: boolean  | undefined) {
        this['protected'] = _protected;
    }
    public get _protected(): boolean | undefined {
        return this['protected'];
    }
    public withDevelopersCanPush(developersCanPush: boolean): ShowBranchResponse {
        this['developers_can_push'] = developersCanPush;
        return this;
    }
    public set developersCanPush(developersCanPush: boolean  | undefined) {
        this['developers_can_push'] = developersCanPush;
    }
    public get developersCanPush(): boolean | undefined {
        return this['developers_can_push'];
    }
    public withDevelopersCanMerge(developersCanMerge: boolean): ShowBranchResponse {
        this['developers_can_merge'] = developersCanMerge;
        return this;
    }
    public set developersCanMerge(developersCanMerge: boolean  | undefined) {
        this['developers_can_merge'] = developersCanMerge;
    }
    public get developersCanMerge(): boolean | undefined {
        return this['developers_can_merge'];
    }
    public withCanPush(canPush: boolean): ShowBranchResponse {
        this['can_push'] = canPush;
        return this;
    }
    public set canPush(canPush: boolean  | undefined) {
        this['can_push'] = canPush;
    }
    public get canPush(): boolean | undefined {
        return this['can_push'];
    }
    public withDefault(_default: boolean): ShowBranchResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withXTotal(xTotal: string): ShowBranchResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}