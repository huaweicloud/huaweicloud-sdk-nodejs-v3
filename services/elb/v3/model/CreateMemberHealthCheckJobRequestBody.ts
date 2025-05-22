import { CreateMemberHealthCheckJobOption } from './CreateMemberHealthCheckJobOption';


export class CreateMemberHealthCheckJobRequestBody {
    private 'member_check'?: CreateMemberHealthCheckJobOption;
    public constructor() { 
    }
    public withMemberCheck(memberCheck: CreateMemberHealthCheckJobOption): CreateMemberHealthCheckJobRequestBody {
        this['member_check'] = memberCheck;
        return this;
    }
    public set memberCheck(memberCheck: CreateMemberHealthCheckJobOption  | undefined) {
        this['member_check'] = memberCheck;
    }
    public get memberCheck(): CreateMemberHealthCheckJobOption | undefined {
        return this['member_check'];
    }
}