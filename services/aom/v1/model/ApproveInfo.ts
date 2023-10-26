

export class ApproveInfo {
    private 'topic_selected'?: string;
    private 'need_approve'?: boolean;
    private 'smn_urn_list'?: string;
    public constructor() { 
    }
    public withTopicSelected(topicSelected: string): ApproveInfo {
        this['topic_selected'] = topicSelected;
        return this;
    }
    public set topicSelected(topicSelected: string  | undefined) {
        this['topic_selected'] = topicSelected;
    }
    public get topicSelected(): string | undefined {
        return this['topic_selected'];
    }
    public withNeedApprove(needApprove: boolean): ApproveInfo {
        this['need_approve'] = needApprove;
        return this;
    }
    public set needApprove(needApprove: boolean  | undefined) {
        this['need_approve'] = needApprove;
    }
    public get needApprove(): boolean | undefined {
        return this['need_approve'];
    }
    public withSmnUrnList(smnUrnList: string): ApproveInfo {
        this['smn_urn_list'] = smnUrnList;
        return this;
    }
    public set smnUrnList(smnUrnList: string  | undefined) {
        this['smn_urn_list'] = smnUrnList;
    }
    public get smnUrnList(): string | undefined {
        return this['smn_urn_list'];
    }
}