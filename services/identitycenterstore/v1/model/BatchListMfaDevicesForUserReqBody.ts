import { RetrieveMfaDevicesForUserDto } from './RetrieveMfaDevicesForUserDto';


export class BatchListMfaDevicesForUserReqBody {
    private 'user_list'?: Array<RetrieveMfaDevicesForUserDto>;
    public constructor(userList?: Array<RetrieveMfaDevicesForUserDto>) { 
        this['user_list'] = userList;
    }
    public withUserList(userList: Array<RetrieveMfaDevicesForUserDto>): BatchListMfaDevicesForUserReqBody {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<RetrieveMfaDevicesForUserDto>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<RetrieveMfaDevicesForUserDto> | undefined {
        return this['user_list'];
    }
}