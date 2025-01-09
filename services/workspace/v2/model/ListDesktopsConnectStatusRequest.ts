

export class ListDesktopsConnectStatusRequest {
    private 'user_names'?: Array<string>;
    private 'connect_status'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withUserNames(userNames: Array<string>): ListDesktopsConnectStatusRequest {
        this['user_names'] = userNames;
        return this;
    }
    public set userNames(userNames: Array<string>  | undefined) {
        this['user_names'] = userNames;
    }
    public get userNames(): Array<string> | undefined {
        return this['user_names'];
    }
    public withConnectStatus(connectStatus: string): ListDesktopsConnectStatusRequest {
        this['connect_status'] = connectStatus;
        return this;
    }
    public set connectStatus(connectStatus: string  | undefined) {
        this['connect_status'] = connectStatus;
    }
    public get connectStatus(): string | undefined {
        return this['connect_status'];
    }
    public withOffset(offset: number): ListDesktopsConnectStatusRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopsConnectStatusRequest {
        this['limit'] = limit;
        return this;
    }
}