

export class AssociateIssueInfoVo {
    public associate?: boolean;
    private 'issue_id'?: string;
    private 'tracker_id'?: string;
    private 'board_id'?: string;
    private 'tracker_name'?: string;
    public constructor() { 
    }
    public withAssociate(associate: boolean): AssociateIssueInfoVo {
        this['associate'] = associate;
        return this;
    }
    public withIssueId(issueId: string): AssociateIssueInfoVo {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withTrackerId(trackerId: string): AssociateIssueInfoVo {
        this['tracker_id'] = trackerId;
        return this;
    }
    public set trackerId(trackerId: string  | undefined) {
        this['tracker_id'] = trackerId;
    }
    public get trackerId(): string | undefined {
        return this['tracker_id'];
    }
    public withBoardId(boardId: string): AssociateIssueInfoVo {
        this['board_id'] = boardId;
        return this;
    }
    public set boardId(boardId: string  | undefined) {
        this['board_id'] = boardId;
    }
    public get boardId(): string | undefined {
        return this['board_id'];
    }
    public withTrackerName(trackerName: string): AssociateIssueInfoVo {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
}