import { Node } from './Node';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteNodeResponse extends SdkResponse {
    private 'delete_fail_list'?: Array<Node>;
    private 'delete_success_list'?: Array<Node>;
    public constructor() { 
        super();
    }
    public withDeleteFailList(deleteFailList: Array<Node>): DeleteNodeResponse {
        this['delete_fail_list'] = deleteFailList;
        return this;
    }
    public set deleteFailList(deleteFailList: Array<Node>  | undefined) {
        this['delete_fail_list'] = deleteFailList;
    }
    public get deleteFailList(): Array<Node> | undefined {
        return this['delete_fail_list'];
    }
    public withDeleteSuccessList(deleteSuccessList: Array<Node>): DeleteNodeResponse {
        this['delete_success_list'] = deleteSuccessList;
        return this;
    }
    public set deleteSuccessList(deleteSuccessList: Array<Node>  | undefined) {
        this['delete_success_list'] = deleteSuccessList;
    }
    public get deleteSuccessList(): Array<Node> | undefined {
        return this['delete_success_list'];
    }
}