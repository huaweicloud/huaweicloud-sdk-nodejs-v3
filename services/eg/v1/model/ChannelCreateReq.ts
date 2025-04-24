import { ChannelCreateReqPolicy } from './ChannelCreateReqPolicy';


export class ChannelCreateReq {
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'cross_account'?: boolean;
    public policy?: { [key: string]: ChannelCreateReqPolicy; };
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ChannelCreateReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ChannelCreateReq {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChannelCreateReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCrossAccount(crossAccount: boolean): ChannelCreateReq {
        this['cross_account'] = crossAccount;
        return this;
    }
    public set crossAccount(crossAccount: boolean  | undefined) {
        this['cross_account'] = crossAccount;
    }
    public get crossAccount(): boolean | undefined {
        return this['cross_account'];
    }
    public withPolicy(policy: { [key: string]: ChannelCreateReqPolicy; }): ChannelCreateReq {
        this['policy'] = policy;
        return this;
    }
}