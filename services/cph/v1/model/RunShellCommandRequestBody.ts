

export class RunShellCommandRequestBody {
    public command?: string;
    public content?: string;
    private 'phone_ids'?: Array<string>;
    private 'server_ids'?: Array<string>;
    public constructor(command?: string, content?: string) { 
        this['command'] = command;
        this['content'] = content;
    }
    public withCommand(command: string): RunShellCommandRequestBody {
        this['command'] = command;
        return this;
    }
    public withContent(content: string): RunShellCommandRequestBody {
        this['content'] = content;
        return this;
    }
    public withPhoneIds(phoneIds: Array<string>): RunShellCommandRequestBody {
        this['phone_ids'] = phoneIds;
        return this;
    }
    public set phoneIds(phoneIds: Array<string>  | undefined) {
        this['phone_ids'] = phoneIds;
    }
    public get phoneIds(): Array<string> | undefined {
        return this['phone_ids'];
    }
    public withServerIds(serverIds: Array<string>): RunShellCommandRequestBody {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
}