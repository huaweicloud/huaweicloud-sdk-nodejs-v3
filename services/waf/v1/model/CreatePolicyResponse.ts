import { Action } from './Action';
import { BindHost } from './BindHost';
import { PolicyAction } from './PolicyAction';
import { PolicyOption } from './PolicyOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePolicyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public level?: number;
    private 'full_detection'?: boolean | undefined;
    private 'robot_action'?: Action | undefined;
    public action?: PolicyAction;
    public options?: PolicyOption;
    private 'modulex_options'?: { [key: string]: object; } | undefined;
    public hosts?: Array<string>;
    private 'bind_host'?: Array<BindHost> | undefined;
    public extend?: { [key: string]: string; };
    public timestamp?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePolicyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreatePolicyResponse {
        this['name'] = name;
        return this;
    }
    public withLevel(level: number): CreatePolicyResponse {
        this['level'] = level;
        return this;
    }
    public withFullDetection(fullDetection: boolean): CreatePolicyResponse {
        this['full_detection'] = fullDetection;
        return this;
    }
    public set fullDetection(fullDetection: boolean | undefined) {
        this['full_detection'] = fullDetection;
    }
    public get fullDetection() {
        return this['full_detection'];
    }
    public withRobotAction(robotAction: Action): CreatePolicyResponse {
        this['robot_action'] = robotAction;
        return this;
    }
    public set robotAction(robotAction: Action | undefined) {
        this['robot_action'] = robotAction;
    }
    public get robotAction() {
        return this['robot_action'];
    }
    public withAction(action: PolicyAction): CreatePolicyResponse {
        this['action'] = action;
        return this;
    }
    public withOptions(options: PolicyOption): CreatePolicyResponse {
        this['options'] = options;
        return this;
    }
    public withModulexOptions(modulexOptions: { [key: string]: object; }): CreatePolicyResponse {
        this['modulex_options'] = modulexOptions;
        return this;
    }
    public set modulexOptions(modulexOptions: { [key: string]: object; } | undefined) {
        this['modulex_options'] = modulexOptions;
    }
    public get modulexOptions() {
        return this['modulex_options'];
    }
    public withHosts(hosts: Array<string>): CreatePolicyResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withBindHost(bindHost: Array<BindHost>): CreatePolicyResponse {
        this['bind_host'] = bindHost;
        return this;
    }
    public set bindHost(bindHost: Array<BindHost> | undefined) {
        this['bind_host'] = bindHost;
    }
    public get bindHost() {
        return this['bind_host'];
    }
    public withExtend(extend: { [key: string]: string; }): CreatePolicyResponse {
        this['extend'] = extend;
        return this;
    }
    public withTimestamp(timestamp: number): CreatePolicyResponse {
        this['timestamp'] = timestamp;
        return this;
    }
}