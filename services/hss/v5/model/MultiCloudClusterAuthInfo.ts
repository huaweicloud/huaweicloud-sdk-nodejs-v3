

export class MultiCloudClusterAuthInfo {
    private 'api_groups'?: string;
    public resources?: string;
    private 'function'?: string;
    private 'is_authed'?: boolean;
    public advice?: string;
    public constructor() { 
    }
    public withApiGroups(apiGroups: string): MultiCloudClusterAuthInfo {
        this['api_groups'] = apiGroups;
        return this;
    }
    public set apiGroups(apiGroups: string  | undefined) {
        this['api_groups'] = apiGroups;
    }
    public get apiGroups(): string | undefined {
        return this['api_groups'];
    }
    public withResources(resources: string): MultiCloudClusterAuthInfo {
        this['resources'] = resources;
        return this;
    }
    public withFunction(_function: string): MultiCloudClusterAuthInfo {
        this['function'] = _function;
        return this;
    }
    public set _function(_function: string  | undefined) {
        this['function'] = _function;
    }
    public get _function(): string | undefined {
        return this['function'];
    }
    public withIsAuthed(isAuthed: boolean): MultiCloudClusterAuthInfo {
        this['is_authed'] = isAuthed;
        return this;
    }
    public set isAuthed(isAuthed: boolean  | undefined) {
        this['is_authed'] = isAuthed;
    }
    public get isAuthed(): boolean | undefined {
        return this['is_authed'];
    }
    public withAdvice(advice: string): MultiCloudClusterAuthInfo {
        this['advice'] = advice;
        return this;
    }
}