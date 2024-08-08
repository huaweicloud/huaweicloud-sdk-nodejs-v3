import { OperateWindow } from './OperateWindow';
import { UpdateAccessInfo } from './UpdateAccessInfo';
import { UpdateForwardingInfo } from './UpdateForwardingInfo';


export class UpdateInstance {
    public name?: string;
    public description?: string;
    private 'operate_window'?: OperateWindow;
    private 'forwarding_info'?: UpdateForwardingInfo;
    private 'access_info'?: UpdateAccessInfo;
    public constructor() { 
    }
    public withName(name: string): UpdateInstance {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateInstance {
        this['description'] = description;
        return this;
    }
    public withOperateWindow(operateWindow: OperateWindow): UpdateInstance {
        this['operate_window'] = operateWindow;
        return this;
    }
    public set operateWindow(operateWindow: OperateWindow  | undefined) {
        this['operate_window'] = operateWindow;
    }
    public get operateWindow(): OperateWindow | undefined {
        return this['operate_window'];
    }
    public withForwardingInfo(forwardingInfo: UpdateForwardingInfo): UpdateInstance {
        this['forwarding_info'] = forwardingInfo;
        return this;
    }
    public set forwardingInfo(forwardingInfo: UpdateForwardingInfo  | undefined) {
        this['forwarding_info'] = forwardingInfo;
    }
    public get forwardingInfo(): UpdateForwardingInfo | undefined {
        return this['forwarding_info'];
    }
    public withAccessInfo(accessInfo: UpdateAccessInfo): UpdateInstance {
        this['access_info'] = accessInfo;
        return this;
    }
    public set accessInfo(accessInfo: UpdateAccessInfo  | undefined) {
        this['access_info'] = accessInfo;
    }
    public get accessInfo(): UpdateAccessInfo | undefined {
        return this['access_info'];
    }
}