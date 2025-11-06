import { BussinessGroupTransferBodyDto } from './BussinessGroupTransferBodyDto';


export class TransferGroupRequest {
    private 'group_id'?: number;
    public body?: BussinessGroupTransferBodyDto;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): TransferGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withBody(body: BussinessGroupTransferBodyDto): TransferGroupRequest {
        this['body'] = body;
        return this;
    }
}