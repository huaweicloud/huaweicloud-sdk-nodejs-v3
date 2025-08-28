

export class ReduceRequest {
    private 'node_number'?: number;
    private 'group_id'?: string;
    public constructor(nodeNumber?: number) { 
        this['node_number'] = nodeNumber;
    }
    public withNodeNumber(nodeNumber: number): ReduceRequest {
        this['node_number'] = nodeNumber;
        return this;
    }
    public set nodeNumber(nodeNumber: number  | undefined) {
        this['node_number'] = nodeNumber;
    }
    public get nodeNumber(): number | undefined {
        return this['node_number'];
    }
    public withGroupId(groupId: string): ReduceRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}