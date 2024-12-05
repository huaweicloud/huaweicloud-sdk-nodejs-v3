import { ListNodeSessionsResultSessions } from './ListNodeSessionsResultSessions';


export class ListNodeSessionsResult {
    private 'node_id'?: string;
    private 'total_count'?: number;
    public sessions?: Array<ListNodeSessionsResultSessions>;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): ListNodeSessionsResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTotalCount(totalCount: number): ListNodeSessionsResult {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSessions(sessions: Array<ListNodeSessionsResultSessions>): ListNodeSessionsResult {
        this['sessions'] = sessions;
        return this;
    }
}