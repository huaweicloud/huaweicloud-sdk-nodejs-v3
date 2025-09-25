import { Elbv3Listener } from './Elbv3Listener';
import { EsLoadBalancerResource } from './EsLoadBalancerResource';
import { Member } from './Member';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowElbDetailResponse extends SdkResponse {
    public serverCertName?: string;
    public serverCertId?: string;
    public cacertName?: string;
    public cacertId?: string;
    private 'elb_enable'?: boolean;
    private 'authentication_type'?: string;
    public loadBalancer?: EsLoadBalancerResource;
    public listener?: Elbv3Listener;
    public healthmonitors?: Member;
    public constructor() { 
        super();
    }
    public withServerCertName(serverCertName: string): ShowElbDetailResponse {
        this['serverCertName'] = serverCertName;
        return this;
    }
    public withServerCertId(serverCertId: string): ShowElbDetailResponse {
        this['serverCertId'] = serverCertId;
        return this;
    }
    public withCacertName(cacertName: string): ShowElbDetailResponse {
        this['cacertName'] = cacertName;
        return this;
    }
    public withCacertId(cacertId: string): ShowElbDetailResponse {
        this['cacertId'] = cacertId;
        return this;
    }
    public withElbEnable(elbEnable: boolean): ShowElbDetailResponse {
        this['elb_enable'] = elbEnable;
        return this;
    }
    public set elbEnable(elbEnable: boolean  | undefined) {
        this['elb_enable'] = elbEnable;
    }
    public get elbEnable(): boolean | undefined {
        return this['elb_enable'];
    }
    public withAuthenticationType(authenticationType: string): ShowElbDetailResponse {
        this['authentication_type'] = authenticationType;
        return this;
    }
    public set authenticationType(authenticationType: string  | undefined) {
        this['authentication_type'] = authenticationType;
    }
    public get authenticationType(): string | undefined {
        return this['authentication_type'];
    }
    public withLoadBalancer(loadBalancer: EsLoadBalancerResource): ShowElbDetailResponse {
        this['loadBalancer'] = loadBalancer;
        return this;
    }
    public withListener(listener: Elbv3Listener): ShowElbDetailResponse {
        this['listener'] = listener;
        return this;
    }
    public withHealthmonitors(healthmonitors: Member): ShowElbDetailResponse {
        this['healthmonitors'] = healthmonitors;
        return this;
    }
}