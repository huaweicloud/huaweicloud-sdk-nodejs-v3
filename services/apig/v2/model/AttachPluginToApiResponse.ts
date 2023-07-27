import { PluginApiAttachInfo } from './PluginApiAttachInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachPluginToApiResponse extends SdkResponse {
    private 'attached_plugins'?: Array<PluginApiAttachInfo>;
    public constructor() { 
        super();
    }
    public withAttachedPlugins(attachedPlugins: Array<PluginApiAttachInfo>): AttachPluginToApiResponse {
        this['attached_plugins'] = attachedPlugins;
        return this;
    }
    public set attachedPlugins(attachedPlugins: Array<PluginApiAttachInfo>  | undefined) {
        this['attached_plugins'] = attachedPlugins;
    }
    public get attachedPlugins(): Array<PluginApiAttachInfo> | undefined {
        return this['attached_plugins'];
    }
}