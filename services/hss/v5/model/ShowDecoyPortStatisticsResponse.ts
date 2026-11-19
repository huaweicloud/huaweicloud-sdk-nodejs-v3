import { DecoyPortBasePortStruct } from './DecoyPortBasePortStruct';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDecoyPortStatisticsResponse extends SdkResponse {
    private 'host_num'?: number;
    private 'policy_num'?: number;
    private 'event_num'?: number;
    private 'linux_propose'?: Array<DecoyPortBasePortStruct>;
    private 'windows_propose'?: Array<DecoyPortBasePortStruct>;
    public constructor() { 
        super();
    }
    public withHostNum(hostNum: number): ShowDecoyPortStatisticsResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withPolicyNum(policyNum: number): ShowDecoyPortStatisticsResponse {
        this['policy_num'] = policyNum;
        return this;
    }
    public set policyNum(policyNum: number  | undefined) {
        this['policy_num'] = policyNum;
    }
    public get policyNum(): number | undefined {
        return this['policy_num'];
    }
    public withEventNum(eventNum: number): ShowDecoyPortStatisticsResponse {
        this['event_num'] = eventNum;
        return this;
    }
    public set eventNum(eventNum: number  | undefined) {
        this['event_num'] = eventNum;
    }
    public get eventNum(): number | undefined {
        return this['event_num'];
    }
    public withLinuxPropose(linuxPropose: Array<DecoyPortBasePortStruct>): ShowDecoyPortStatisticsResponse {
        this['linux_propose'] = linuxPropose;
        return this;
    }
    public set linuxPropose(linuxPropose: Array<DecoyPortBasePortStruct>  | undefined) {
        this['linux_propose'] = linuxPropose;
    }
    public get linuxPropose(): Array<DecoyPortBasePortStruct> | undefined {
        return this['linux_propose'];
    }
    public withWindowsPropose(windowsPropose: Array<DecoyPortBasePortStruct>): ShowDecoyPortStatisticsResponse {
        this['windows_propose'] = windowsPropose;
        return this;
    }
    public set windowsPropose(windowsPropose: Array<DecoyPortBasePortStruct>  | undefined) {
        this['windows_propose'] = windowsPropose;
    }
    public get windowsPropose(): Array<DecoyPortBasePortStruct> | undefined {
        return this['windows_propose'];
    }
}