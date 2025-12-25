import { Conversation } from './Conversation';
import { Message } from './Message';
import { PluginConfig } from './PluginConfig';
import { UserProfile } from './UserProfile';


export class WorkflowRunReq {
    public inputs?: { [key: string]: object; };
    private 'memory_inputs'?: { [key: string]: object; };
    public globals?: { [key: string]: object; };
    public messages?: Array<Message>;
    private 'user_profile'?: UserProfile;
    private 'plugin_configs'?: Array<PluginConfig>;
    public version?: number;
    public userId?: string;
    public conversation?: Conversation;
    private 'enable_history'?: boolean;
    public constructor(inputs?: { [key: string]: object; }) { 
        this['inputs'] = inputs;
    }
    public withInputs(inputs: { [key: string]: object; }): WorkflowRunReq {
        this['inputs'] = inputs;
        return this;
    }
    public withMemoryInputs(memoryInputs: { [key: string]: object; }): WorkflowRunReq {
        this['memory_inputs'] = memoryInputs;
        return this;
    }
    public set memoryInputs(memoryInputs: { [key: string]: object; }  | undefined) {
        this['memory_inputs'] = memoryInputs;
    }
    public get memoryInputs(): { [key: string]: object; } | undefined {
        return this['memory_inputs'];
    }
    public withGlobals(globals: { [key: string]: object; }): WorkflowRunReq {
        this['globals'] = globals;
        return this;
    }
    public withMessages(messages: Array<Message>): WorkflowRunReq {
        this['messages'] = messages;
        return this;
    }
    public withUserProfile(userProfile: UserProfile): WorkflowRunReq {
        this['user_profile'] = userProfile;
        return this;
    }
    public set userProfile(userProfile: UserProfile  | undefined) {
        this['user_profile'] = userProfile;
    }
    public get userProfile(): UserProfile | undefined {
        return this['user_profile'];
    }
    public withPluginConfigs(pluginConfigs: Array<PluginConfig>): WorkflowRunReq {
        this['plugin_configs'] = pluginConfigs;
        return this;
    }
    public set pluginConfigs(pluginConfigs: Array<PluginConfig>  | undefined) {
        this['plugin_configs'] = pluginConfigs;
    }
    public get pluginConfigs(): Array<PluginConfig> | undefined {
        return this['plugin_configs'];
    }
    public withVersion(version: number): WorkflowRunReq {
        this['version'] = version;
        return this;
    }
    public withUserId(userId: string): WorkflowRunReq {
        this['userId'] = userId;
        return this;
    }
    public withConversation(conversation: Conversation): WorkflowRunReq {
        this['conversation'] = conversation;
        return this;
    }
    public withEnableHistory(enableHistory: boolean): WorkflowRunReq {
        this['enable_history'] = enableHistory;
        return this;
    }
    public set enableHistory(enableHistory: boolean  | undefined) {
        this['enable_history'] = enableHistory;
    }
    public get enableHistory(): boolean | undefined {
        return this['enable_history'];
    }
}