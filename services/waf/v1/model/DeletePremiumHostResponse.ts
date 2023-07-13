import { Flag } from './Flag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePremiumHostResponse extends SdkResponse {
    public id?: string;
    public hostname?: string;
    public extend?: { [key: string]: string; };
    public region?: string;
    public flag?: Flag;
    public description?: string;
    public policyid?: string;
    private 'protect_status'?: number | undefined;
    private 'access_status'?: number | undefined;
    private 'web_tag'?: string | undefined;
    private 'host_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): DeletePremiumHostResponse {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): DeletePremiumHostResponse {
        this['hostname'] = hostname;
        return this;
    }
    public withExtend(extend: { [key: string]: string; }): DeletePremiumHostResponse {
        this['extend'] = extend;
        return this;
    }
    public withRegion(region: string): DeletePremiumHostResponse {
        this['region'] = region;
        return this;
    }
    public withFlag(flag: Flag): DeletePremiumHostResponse {
        this['flag'] = flag;
        return this;
    }
    public withDescription(description: string): DeletePremiumHostResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyid(policyid: string): DeletePremiumHostResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withProtectStatus(protectStatus: number): DeletePremiumHostResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
    public withAccessStatus(accessStatus: number): DeletePremiumHostResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus() {
        return this['access_status'];
    }
    public withWebTag(webTag: string): DeletePremiumHostResponse {
        this['web_tag'] = webTag;
        return this;
    }
    public set webTag(webTag: string | undefined) {
        this['web_tag'] = webTag;
    }
    public get webTag() {
        return this['web_tag'];
    }
    public withHostId(hostId: string): DeletePremiumHostResponse {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
}