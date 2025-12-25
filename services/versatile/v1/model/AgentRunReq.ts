import { Message } from './Message';
import { UserProfile } from './UserProfile';


export class AgentRunReq {
    public query?: string;
    public inputs?: { [key: string]: object; };
    private 'user_profile'?: UserProfile;
    private 'tool_switch_dict'?: { [key: string]: boolean; };
    private 'model_deployment_id'?: string;
    private 'enable_history'?: boolean;
    public histories?: Array<Message>;
    public files?: Array<string>;
    public constructor(query?: string) { 
        this['query'] = query;
    }
    public withQuery(query: string): AgentRunReq {
        this['query'] = query;
        return this;
    }
    public withInputs(inputs: { [key: string]: object; }): AgentRunReq {
        this['inputs'] = inputs;
        return this;
    }
    public withUserProfile(userProfile: UserProfile): AgentRunReq {
        this['user_profile'] = userProfile;
        return this;
    }
    public set userProfile(userProfile: UserProfile  | undefined) {
        this['user_profile'] = userProfile;
    }
    public get userProfile(): UserProfile | undefined {
        return this['user_profile'];
    }
    public withToolSwitchDict(toolSwitchDict: { [key: string]: boolean; }): AgentRunReq {
        this['tool_switch_dict'] = toolSwitchDict;
        return this;
    }
    public set toolSwitchDict(toolSwitchDict: { [key: string]: boolean; }  | undefined) {
        this['tool_switch_dict'] = toolSwitchDict;
    }
    public get toolSwitchDict(): { [key: string]: boolean; } | undefined {
        return this['tool_switch_dict'];
    }
    public withModelDeploymentId(modelDeploymentId: string): AgentRunReq {
        this['model_deployment_id'] = modelDeploymentId;
        return this;
    }
    public set modelDeploymentId(modelDeploymentId: string  | undefined) {
        this['model_deployment_id'] = modelDeploymentId;
    }
    public get modelDeploymentId(): string | undefined {
        return this['model_deployment_id'];
    }
    public withEnableHistory(enableHistory: boolean): AgentRunReq {
        this['enable_history'] = enableHistory;
        return this;
    }
    public set enableHistory(enableHistory: boolean  | undefined) {
        this['enable_history'] = enableHistory;
    }
    public get enableHistory(): boolean | undefined {
        return this['enable_history'];
    }
    public withHistories(histories: Array<Message>): AgentRunReq {
        this['histories'] = histories;
        return this;
    }
    public withFiles(files: Array<string>): AgentRunReq {
        this['files'] = files;
        return this;
    }
}