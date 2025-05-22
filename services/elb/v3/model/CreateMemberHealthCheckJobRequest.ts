import { CreateMemberHealthCheckJobRequestBody } from './CreateMemberHealthCheckJobRequestBody';


export class CreateMemberHealthCheckJobRequest {
    private 'member_id'?: string;
    public body?: CreateMemberHealthCheckJobRequestBody;
    public constructor(memberId?: string) { 
        this['member_id'] = memberId;
    }
    public withMemberId(memberId: string): CreateMemberHealthCheckJobRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withBody(body: CreateMemberHealthCheckJobRequestBody): CreateMemberHealthCheckJobRequest {
        this['body'] = body;
        return this;
    }
}