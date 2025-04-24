import { ChannelCreateReqPolicy } from './ChannelCreateReqPolicy';


export class ChannelUpdateReq {
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'cross_account'?: boolean;
    public policy?: { [key: string]: ChannelCreateReqPolicy; };
    public constructor() { 
    }
    public withDescription(description: string): ChannelUpdateReq {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChannelUpdateReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCrossAccount(crossAccount: boolean): ChannelUpdateReq {
        this['cross_account'] = crossAccount;
        return this;
    }
    public set crossAccount(crossAccount: boolean  | undefined) {
        this['cross_account'] = crossAccount;
    }
    public get crossAccount(): boolean | undefined {
        return this['cross_account'];
    }
    public withPolicy(policy: { [key: string]: ChannelCreateReqPolicy; }): ChannelUpdateReq {
        this['policy'] = policy;
        return this;
    }
}