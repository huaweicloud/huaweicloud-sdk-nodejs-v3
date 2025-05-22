

export class ShowWorkItemWrokflowConfigRequest {
    private 'project_id'?: string;
    private 'board_id'?: string;
    public constructor(projectId?: string, boardId?: string) { 
        this['project_id'] = projectId;
        this['board_id'] = boardId;
    }
    public withProjectId(projectId: string): ShowWorkItemWrokflowConfigRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBoardId(boardId: string): ShowWorkItemWrokflowConfigRequest {
        this['board_id'] = boardId;
        return this;
    }
    public set boardId(boardId: string  | undefined) {
        this['board_id'] = boardId;
    }
    public get boardId(): string | undefined {
        return this['board_id'];
    }
}