

export class ShowShrinkCheckResponseBodyCheckDetail {
    private 'broker_id'?: number;
    private 'can_delete'?: boolean;
    private 'is_zk_node'?: boolean;
    private 'is_controller'?: boolean;
    private 'has_topics'?: boolean;
    public topics?: Array<string>;
    public constructor() { 
    }
    public withBrokerId(brokerId: number): ShowShrinkCheckResponseBodyCheckDetail {
        this['broker_id'] = brokerId;
        return this;
    }
    public set brokerId(brokerId: number  | undefined) {
        this['broker_id'] = brokerId;
    }
    public get brokerId(): number | undefined {
        return this['broker_id'];
    }
    public withCanDelete(canDelete: boolean): ShowShrinkCheckResponseBodyCheckDetail {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withIsZkNode(isZkNode: boolean): ShowShrinkCheckResponseBodyCheckDetail {
        this['is_zk_node'] = isZkNode;
        return this;
    }
    public set isZkNode(isZkNode: boolean  | undefined) {
        this['is_zk_node'] = isZkNode;
    }
    public get isZkNode(): boolean | undefined {
        return this['is_zk_node'];
    }
    public withIsController(isController: boolean): ShowShrinkCheckResponseBodyCheckDetail {
        this['is_controller'] = isController;
        return this;
    }
    public set isController(isController: boolean  | undefined) {
        this['is_controller'] = isController;
    }
    public get isController(): boolean | undefined {
        return this['is_controller'];
    }
    public withHasTopics(hasTopics: boolean): ShowShrinkCheckResponseBodyCheckDetail {
        this['has_topics'] = hasTopics;
        return this;
    }
    public set hasTopics(hasTopics: boolean  | undefined) {
        this['has_topics'] = hasTopics;
    }
    public get hasTopics(): boolean | undefined {
        return this['has_topics'];
    }
    public withTopics(topics: Array<string>): ShowShrinkCheckResponseBodyCheckDetail {
        this['topics'] = topics;
        return this;
    }
}