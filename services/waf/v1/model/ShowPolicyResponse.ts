import { Action } from './Action';
import { BindHost } from './BindHost';
import { PolicyAction } from './PolicyAction';
import { PolicyOption } from './PolicyOption';
import { ScanProtectionOption } from './ScanProtectionOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public level?: number;
    private 'full_detection'?: boolean;
    private 'robot_action'?: Action;
    public action?: PolicyAction;
    public options?: PolicyOption;
    private 'modulex_options'?: { [key: string]: object; };
    private 'scan_protection_options'?: ScanProtectionOption;
    public hosts?: Array<string>;
    private 'bind_host'?: Array<BindHost>;
    public extend?: { [key: string]: string; };
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withLevel(level: number): ShowPolicyResponse {
        this['level'] = level;
        return this;
    }
    public withFullDetection(fullDetection: boolean): ShowPolicyResponse {
        this['full_detection'] = fullDetection;
        return this;
    }
    public set fullDetection(fullDetection: boolean  | undefined) {
        this['full_detection'] = fullDetection;
    }
    public get fullDetection(): boolean | undefined {
        return this['full_detection'];
    }
    public withRobotAction(robotAction: Action): ShowPolicyResponse {
        this['robot_action'] = robotAction;
        return this;
    }
    public set robotAction(robotAction: Action  | undefined) {
        this['robot_action'] = robotAction;
    }
    public get robotAction(): Action | undefined {
        return this['robot_action'];
    }
    public withAction(action: PolicyAction): ShowPolicyResponse {
        this['action'] = action;
        return this;
    }
    public withOptions(options: PolicyOption): ShowPolicyResponse {
        this['options'] = options;
        return this;
    }
    public withModulexOptions(modulexOptions: { [key: string]: object; }): ShowPolicyResponse {
        this['modulex_options'] = modulexOptions;
        return this;
    }
    public set modulexOptions(modulexOptions: { [key: string]: object; }  | undefined) {
        this['modulex_options'] = modulexOptions;
    }
    public get modulexOptions(): { [key: string]: object; } | undefined {
        return this['modulex_options'];
    }
    public withScanProtectionOptions(scanProtectionOptions: ScanProtectionOption): ShowPolicyResponse {
        this['scan_protection_options'] = scanProtectionOptions;
        return this;
    }
    public set scanProtectionOptions(scanProtectionOptions: ScanProtectionOption  | undefined) {
        this['scan_protection_options'] = scanProtectionOptions;
    }
    public get scanProtectionOptions(): ScanProtectionOption | undefined {
        return this['scan_protection_options'];
    }
    public withHosts(hosts: Array<string>): ShowPolicyResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withBindHost(bindHost: Array<BindHost>): ShowPolicyResponse {
        this['bind_host'] = bindHost;
        return this;
    }
    public set bindHost(bindHost: Array<BindHost>  | undefined) {
        this['bind_host'] = bindHost;
    }
    public get bindHost(): Array<BindHost> | undefined {
        return this['bind_host'];
    }
    public withExtend(extend: { [key: string]: string; }): ShowPolicyResponse {
        this['extend'] = extend;
        return this;
    }
    public withTimestamp(timestamp: number): ShowPolicyResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}