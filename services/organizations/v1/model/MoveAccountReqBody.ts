

export class MoveAccountReqBody {
    private 'source_parent_id'?: string;
    private 'destination_parent_id'?: string;
    public constructor(sourceParentId?: string, destinationParentId?: string) { 
        this['source_parent_id'] = sourceParentId;
        this['destination_parent_id'] = destinationParentId;
    }
    public withSourceParentId(sourceParentId: string): MoveAccountReqBody {
        this['source_parent_id'] = sourceParentId;
        return this;
    }
    public set sourceParentId(sourceParentId: string  | undefined) {
        this['source_parent_id'] = sourceParentId;
    }
    public get sourceParentId(): string | undefined {
        return this['source_parent_id'];
    }
    public withDestinationParentId(destinationParentId: string): MoveAccountReqBody {
        this['destination_parent_id'] = destinationParentId;
        return this;
    }
    public set destinationParentId(destinationParentId: string  | undefined) {
        this['destination_parent_id'] = destinationParentId;
    }
    public get destinationParentId(): string | undefined {
        return this['destination_parent_id'];
    }
}