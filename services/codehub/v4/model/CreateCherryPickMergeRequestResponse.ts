
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCherryPickMergeRequestResponse extends SdkResponse {
    public state?: string;
    public title?: string;
    private 'cherry_pick_branch_name'?: string;
    public constructor() { 
        super();
    }
    public withState(state: string): CreateCherryPickMergeRequestResponse {
        this['state'] = state;
        return this;
    }
    public withTitle(title: string): CreateCherryPickMergeRequestResponse {
        this['title'] = title;
        return this;
    }
    public withCherryPickBranchName(cherryPickBranchName: string): CreateCherryPickMergeRequestResponse {
        this['cherry_pick_branch_name'] = cherryPickBranchName;
        return this;
    }
    public set cherryPickBranchName(cherryPickBranchName: string  | undefined) {
        this['cherry_pick_branch_name'] = cherryPickBranchName;
    }
    public get cherryPickBranchName(): string | undefined {
        return this['cherry_pick_branch_name'];
    }
}